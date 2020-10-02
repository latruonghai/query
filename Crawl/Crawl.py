import requests
import bs4
import pandas as pd
import os
import re
from datetime import *

class Crawl:
    def __init__(self, url, numberOfDays):
        self.url = url
        self.numberOfDays = numberOfDays
        self.dataFrame = []
        self.contents = []
        self.folderName = re.match('https?:\/\/vnexpress\.net\/(\w+-\w+)',url).groups()[0]
    
    def letCrawl(self):
        url =self.url
        tempUrl = url + '-p'
        # Do su dung khoang thoi gian nen khi thay doi trang se + 'temp' vao tempurl
        # Vi du: https://vnexpress.net/thoi-su-p2
        temp = 2
        # Get date of today and date of last month
        today = datetime.today()
        eltaday = timedelta(days =self.numberOfDays)
        lastmonth = today - eltaday
        #tday_stamp = datetime.timestramp(today)
        lmon_stamp = datetime.timestamp(lastmonth)
        src = []
        Date = []
        titles = []
        pattern = '(\d)+/(\d)+/(\d){4}'
        #d
        dem = 0
        out = False
        while True:
            soup = self.get_page_content(url)
            sources = [s.find('a').get('href') for s in soup.findAll('h3',class_= 'title-news')]
            #print(len(sources))
            print(url)
            for srcs in sources:
                soup = self.get_page_content(srcs)
                        #print
                title = soup.find('h1',class_ = 'title-detail')
                contents = soup.findAll('p',class_ = 'Normal')
                texts = [content.text for content in contents]
                self.contents.append(texts)
                if title !=None:
                    
                    dates = soup.find('span', class_= 'date').text
                    datestring= re.search(pattern,dates).group()
                    #day = date(year = datetimes[2], month = datetimes[1], day = datetimes[0])
                    date_object = datetime.strptime(datestring, "%d/%m/%Y")
                    d_stamp = datetime.timestamp(date_object)
                    if (d_stamp<lmon_stamp):
                        out = True
                        break
                        
                    titles.append(title.text)
                    Date.append(dates)
                    src.append(srcs)

            if out:
                break
            else:
                url = tempUrl + str(temp)
                temp+=1
        return (titles, Date, src)
    
    def get_page_content(self, url):
        page = requests.get(url)
        soup = bs4.BeautifulSoup(page.text, 'html.parser')
        return soup

    def get_df(self):
        title, date, src = self.letCrawl()
        papers = {'Title': title,
                    'Source': src,
                    'Date': date}
        self.dataFrame = pd.DataFrame(papers)

    def get_csv(self):
        path_folder = './data/CSV/' + self.folderName
        try:
            os.mkdir(path_folder)
        except FileExistsError:
            pass
        print(path_folder)
        self.get_df()
        filename = input('Please type your file name to make csv file ')
        result = self.dataFrame.to_csv(path_folder + '/' + filename + '.csv',header = True, index = None)
        return result

    def get_text(self):
        #print(self.contents)
        file_name = input('Get your new data file text name ')
        path_folder = './src/' + self.folderName 
        try:
            os.mkdir(path_folder)
        except FileExistsError:
            pass
        for i in range(len(self.contents)):
            path = path_folder + '/' + file_name +'-'+ str(i) + '.txt'
            for content in self.contents[i]:
                with open(path,'a') as f:
                    f.write(content)
        print('Get text Done')
                    
if __name__ == '__main__':
    url = 'https://vnexpress.net/thoi-su'
# Do su dung khoang thoi gian nen khi thay doi trang se + 'temp' vao tempurl
# Vi du: https://vnexpress.net/thoi-su-p2

    crawl = Crawl(url,tempurl)
    crawl.get_csv()
    crawl.get_text()
    
    





