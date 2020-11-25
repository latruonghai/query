from Crawl.CrawlVnE import CrawlVnE
from Crawl.CrawlWiki import CrawlWiki

class CData:
    
    def __init__(self, url ='https://vi.wikipedia.org/wiki/Wikipedia', mode = 0, numberOfDate = 0):
        self.url = url
        self.mode = mode 
        self.numberOfDate = numberOfDate
    
    def Info(self):
        
        """ 
        Get info of this Data
        
        Return:
        srcFolder: source folder, where you do to Query
        --------
        folderNameChild: The folder to save
        
         """
        if self.mode == '1':
            cr = CrawlVnE(self.url, self.numberOfDate)
        else:
            cr = CrawlWiki(self.url)
        return (cr.srcFolder, cr.folderNameChild)
    def Crawler(self):
        """ 
        Crawl the content
        
        Return:
        folderNameParent (string): link to the folder containing main data folder
        ---------
        folderNameParent (string): link to the main data folder
        
         """
        if self.mode == '1':
            cr = CrawlVnE(self.url, self.numberOfDate)
            cr.getCrawlData(header = ['Titles', 'Dates', 'Sources'])
        else:
            cr = CrawlWiki(self.url)
            data = cr.letCrawl()
            header = ['link', 'title', 'paragraphs']
            df = cr.get_df(header, data, force_Dataframe = 0)
            cr.get_Json(df, )
            cr.get_text()
        return self.Info()
    
if __name__ == "__main__":
    cd = CData()
    folderNameParent, folderNameChild = cd.Crawler()
    print(folderNameParent + '/' + folderNameChild)        