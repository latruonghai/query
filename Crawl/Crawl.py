import requests
import bs4
import pandas as pd
import os
import re
from datetime import *
import random
import string

class Crawl:
    def __init__(self, url):
        self.url = url
        self.contents  = []
    
    def get_page_content(self, url):
        page = requests.get(url)
        soup = bs4.BeautifulSoup(page.text, 'html.parser')
        return soup
    
    def letCrawl():
        pass
    
    def get_df(self, header, data ):
        papers = {}
        l = len(data) if len(data) < len(header) else len(header)
        print(l)
        for i in range(l):
            papers[header[i]] = data[i]
            dataFrame = pd.DataFrame(papers)
        return dataFrame
    def get_csv(self, df):
        path_folder = '../data/CSV/' + self.folderName
        try:
            os.mkdir(path_folder)
        except FileExistsError:
            pass
        print(path_folder)
        filename = random_char(4)
        path_folder = path_folder + '/' + filename + '.csv'
        result = df.to_csv(path_folder,header = True, index = None)
        print(f'Your file was saved in {path_folder}')
        return result

    def get_text(self):
        #print(self.contents)
        file_name = random_char(4)
        path_folder = '../src/' + self.folderName 
        try:
            os.mkdir(path_folder)
        except FileExistsError:
            pass
        for i in range(len(self.contents)):
            if len(self.contents[i]) < 50:
                continue
            path = path_folder + '/' + file_name +'-'+ str(i) + '.txt'
            with open(path,'a') as f:
                for content in self.contents:
                    f.write(content)
        print('Get text Done, Your File is saved in: {}'.format(path))

    def getCrawlData(self, header = None):
        data = self.letCrawl()
        df = self.get_df(header, data)
        print(df)
        result = self.get_csv(df)
        self.get_text()
        
def random_char(y):
       return ''.join(random.choice(string.ascii_letters) for x in range(y))
 
if __name__ == '__main__':
    #url = 'https://vnexpress.net/thoi-su'
# Do su dung khoang thoi gian nen khi thay doi trang se + 'temp' vao tempurl
# Vi du: https://vnexpress.net/thoi-su-p2

    #crawl = Crawl(url,tempurl)
    #crawl.get_csv()
    #crawl.get_text()
    a = random_char(4)
    print(a)
    
    





