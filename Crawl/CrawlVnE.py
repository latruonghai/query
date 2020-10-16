from Crawl.Crawl import *
import re
from datetime import *

class CrawlVnE(Crawl):
    
    def __init__(self, url, numberOfDays):
        self.pattern = 'https?:\/\/(vnexpress)\.net\/(\w+-\w+)'
        super().__init__(url)
        self.numberOfDays = numberOfDays
        #self.containFolder = 'VnExpress'
    
    def letCrawl(self):
        
        """
         Crawl the data on 'vnexpress.net for a period days
        
        Return:
        titles: the list of titles Crawled
        ------------------
        Date: the list of Date
        --------------------
        src: the list of link 
        
        """
        
        url =self.url
        tempUrl = url + '-p'
        temp = 2
        # Get date of today and date of last month
        today = datetime.today()
        eltaday = timedelta(days =self.numberOfDays)
        lastmonth = today - eltaday
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
                texts = " ".join([content.text for content in contents])
                
                if title !=None:
                    
                    dates = soup.find('span', class_= 'date').text
                    datestring= re.search(pattern,dates).group()
                    #day = date(year = datetimes[2], month = datetimes[1], day = datetimes[0])
                    date_object = datetime.strptime(datestring, "%d/%m/%Y")
                    d_stamp = datetime.timestamp(date_object)
                    
                    if (d_stamp<lmon_stamp):
                        
                        out = True
                        break
                    
                    title_text = title.text
                    self.contents.append(title_text +'\n' + texts)
                    titles.append(title_text)
                    Date.append(dates)
                    src.append(srcs)
            if out:
                break
            else:
                url = tempUrl + str(temp)
                temp+=1
        return [titles, Date, src]
    
if __name__ == "__main__":
    url = 'https://vnexpress.net/khoa-hoc'
    cr = CrawlVnE(url, 30)
    
    cr.getCrawlData(header = ['Titles', 'Dates', 'Sources' ])
    
        
