from CrawlVnE import CrawlVnE
from CrawlTraveloka import CrawlTraveloka
from CrawlWiki import CrawlWiki
from CrawlDulich import CrawlDulich


class CData:

    def __init__(self, url='https://vi.wikipedia.org/wiki/Wikipedia', mode='0', numberOfDate=0, numofPage=0, homepage=1):
        self.url = url
        self.mode = mode
        if self.mode == '1':
            self.numberOfDate = numberOfDate
        elif self.mode == '2':
            self.numofPage = numofPage
        elif self.mode == '3':
            self.homepage = homepage
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
        elif self.mode == '0':
            cr = CrawlWiki(self.url)
        elif self.mode == '2':
            cr = CrawlTraveloka(self.url, self.numofPage)
        else:
            cr = CrawlDulich(self.url)
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
            cr.getCrawlData(header=['Titles', 'Dates', 'Sources'])
        elif self.mode == '0':
            cr = CrawlWiki(self.url)
            data = cr.letCrawl()
            header = ['link', 'title', 'paragraphs']
            df = cr.get_df(header, data, force_Dataframe=0)
            cr.get_Json(df, )
            cr.get_text()
        elif self.mode == '2':
            cr = CrawlTraveloka(self.url, self.numofPage)
            cr.getCrawlData(header=['Titles', 'Sources'])
        else:
            cr = CrawlDulich(self.url, self.homepage)
            cr.getCrawlData(header=['Titles', 'Sources'])
        return self.Info()


if __name__ == "__main__":
    url = 'https://blog.traveloka.com/vn/category/an-choi/'
    cd = CData(url=url, mode='2', numberOfDate=5, numofPage=10)
    folderNameParent, folderNameChild = cd.Crawler()
    print(folderNameParent + '/' + folderNameChild)
