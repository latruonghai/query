from Crawl.CrawlVnE import CrawlVnE
from Crawl.CrawlWiki import CrawlWiki

class CData:
    
    def __init__(self, url ='https://vi.wikipedia.org/wiki/Wikipedia', mode = 0, numberOfDate = 0):
        self.url = url
        self.mode = mode 
        self.numberOfDate = numberOfDate
    def Crawler(self):
        if self.mode == 1:
            cr = CrawlVnE(self.url, self.numberOfDate)
            cr.getCrawlData(header = ['Titles', 'Dates', 'Sources'])
        else:
            cr = CrawlWiki(self.url)
            cr.letCrawl()
            cr.get_text()
        self.sourceFolder = cr.srcFolder
        return cr.folderNameParent, cr.folderNameChild
if __name__ == "__main__":
    cd = CData()
    folderNameParent, folderNameChild = cd.Crawler()
    print(folderNameParent + '/' + folderNameChild)        