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
        self.folderNameParent, self.folderNameChild = get_name(self.pattern, self.url)
        self.srcFolder = '../src/' + self.folderNameParent
        self.dataFolder = '../data/CSV/' + self.folderNameParent
        create_folder(self.srcFolder, self.dataFolder)
        self.srcFolder += '/' + self.folderNameChild
        self.dataFolder += '/' + self.folderNameChild
        create_folder(self.srcFolder, self.dataFolder)
    def get_page_content(self, url):
        page = requests.get(url)
        soup = bs4.BeautifulSoup(page.text, 'html.parser')
        return soup
    
    def letCrawl(self):
        pass
    
    def get_df(self, header, data ):
        papers = {}
        l = len(data) if len(data) < len(header) else len(header)
        for i in range(l):
            papers[header[i]] = data[i]
            dataFrame = pd.DataFrame(papers)
        return dataFrame
    def get_csv(self, df):
        filename = random_char(4)
        path_folder = self.dataFolder + '/' + filename + '.csv'
        result = df.to_csv(path_folder,header = True, index = None)
        print(f'Your file was saved in {path_folder}')
        return result

    def get_text(self):
        #print(self.contents)
        file_name = random_char(4)
        for i  in range(len(self.contents)):
            if len(self.contents[i]) < 100:
                continue
            path = self.srcFolder + '/' + file_name +'-'+ str(i) + '.txt'
            with open(path,'a') as f:
                f.write(self.contents[i])
        print('Get text Done, Your File is saved in: {}'.format(path))

    def getCrawlData(self, header = None):
        data = self.letCrawl()
        df = self.get_df(header, data)
        result = self.get_csv(df)
        self.get_text()
        
def random_char(y):
       return ''.join(random.choice(string.ascii_letters) for x in range(y))

def create_folder( *pathFolders):
    for pathFolder in pathFolders:
        try:
            os.mkdir(pathFolder)
        except FileExistsError:
            pass
    
def get_name(pattern, string):
    names = re.match(pattern,string).groups()
    folderNameParent = names[0]
    folderNameChild = names[1]
    return (folderNameParent, folderNameChild)
if __name__ == '__main__':
    #url = 'https://vnexpress.net/thoi-su'
# Do su dung khoang thoi gian nen khi thay doi trang se + 'temp' vao tempurl
# Vi du: https://vnexpress.net/thoi-su-p2

    #crawl = Crawl(url,tempurl)
    #crawl.get_csv()
    #crawl.get_text()
    a = random_char(4)
    print(a)
    
    





