from .CData import CData
from truyvan.QData import QData, analyze_Word
import re
import time


class CQData:
    def __init__(self, url='https://vi.wikipedia.org/wiki/Wikipedia', tv=" ", numberOfDay=0, web='0', boolean=0):
        """ 
        The Constructor of CQData

        Paremeters:
        self.url: The url links to the page which do you want to crawl
        --------
        self.tv: The text of Query which do you want to look up
        --------
        self.numberOfDay: The num of days that you want to search if you crawl on Vnexpress
        -------
        self.web: Choose the web that you want to Crawl:
                - Choose '0' to crawl on wikipeedia
                - Choose '1' to crawl on VnExpress
        -------
        self.boolean: Choose the Query methods you want to use
         """

        self.url = url
        self.tv = tv
        self.numberOfDay = numberOfDay
        self.web = web
        self.boolean = boolean

    def askForDoing(self):
        """ 
        UX, ask the user to do what he/she want

        Function's used:
        get_keyword: to convert the KeyWord to  the url
        --------
        analyze_Word: parse the Query Words and convert  it to Query

         """
        self.select = input(
            "Bạn có 3 lựa chọn:\n\t- Chọn '1' để Crawl\n\t- Chọn '0' để bỏ qua bước Crawl\n\t- Chọn '2' để vừa Crawl vừa Truy vấn\n")

        if self.select == '0':
            self.tv = analyze_Word(input("Nhập vào câu truy vấn của bạn "))
        elif self.select == '1':
            self.web = input(
                "Bạn muốn lấy dữ liệu từ 2 trang web nào?\nCó 2 lựa chọn cho bạn:\n \t- Chọn '0' nếu bạn muốn lấy dữ liệu từ Wikipedia \n\t- Chọn '1' nếu bạn muốn lấy dừ liệu từ VnExpress")
        else:
            self.tv = analyze_Word(input("Nhập vào câu truy vấn của bạn "))
            self.web = input(
                "Bạn muốn lấy dữ liệu từ 2 trang web nào?\nCó 2 lựa chọn cho bạn:\n \t- Chọn '0' nếu bạn muốn lấy dữ liệu từ Wikipedia \n\t- Chọn '1' nếu bạn muốn lấy dừ liệu từ VnExpress")

        if self.web == '0':
            self.url = 'https://vi.wikipedia.org/wiki/' + \
                get_Keyword(input("Nhập từ khóa cần tìm của bạn vào đây: "))
        else:
            self.url = input(
                'Nhập đường dẫn trang báo Vnexpress của bạn vào đây: ')
            self.numberOfDay = int(
                input("Nhập vào khoảng thời gian bạn muốn Crawl "))
        if self.boolean == 0:
            print("Bạn sẽ được truy vấn dưới dạng Inverted Files! ")
        else:
            print('Bạn sẽ được truy vấn dưới dạng Boolean Retrieval! ')

    def Crawl(self, cd):
        """ 
        Crawl data

        Parameter:
        cd (CData): Crawl the data

        Return:
        sourceFolder (string): define where you Query
        ---------
        folderNameChild (string): define where you save the file

         """

        sourceFolder, folderNameChild = cd.Crawler()
        return sourceFolder, folderNameChild

    def Query(self, folderNameChild='Cuoc Song', sourceFolder="/media/lahai/DATA/Study/DAI HOC/NamBa/TruyVan/Tuan4/src"):
        """ 
        Query the word

        Paremeter:
        folderNameChild (string): main folder to save the data
        -----------
        sourceFolder (string): define where you save the data in

         """

        qd = QData(self.tv, sourceFolder + '/*.txt', self.boolean)
        qd.getDataQueries(folderNameChild)

    def CrawlandQuery(self, cd):
        """ 
        Crawl and Query
         """

        sourceFolder, folderNameChild = self.Crawl(cd)
        self.Query(folderNameChild, sourceFolder)

    def letDoIt(self):
        """ 
        Do the Crawl and Query
        You have 3 choice:
            - Crawl only
            - Query only
            - Crawl and Query
         """

        self.askForDoing()
        cd = CData(self.url, self.web, self.numberOfDay)
        sourceFolder, folderNameChild = cd.Info()
        start = time.time()
        if self.select == '1':

            folderNameChild = self.Crawl(cd)

        elif self.select == '0':
            try:
                self.Query(folderNameChild, sourceFolder)
            except FileNotFoundError:
                self.CrawlandQuery(cd)
                # pass
        else:
            self.CrawlandQuery(cd)
        end = time.time() - start
        print("Thoi gian thuc thi: ", end)


def get_Keyword(string):
    """ 
    Get the Keyword and convert it to URL

    Parameters:
    string: the KeyWord (string)

    Return string (string): The word in type xxx_xxx

    Example:
    The Word "Computer Science" will return "Computer_Science"

     """
    return string.replace(' ', '_')


if __name__ == '__main__':
    cq = CQData(boolean=1, web='1')
    cq.letDoIt()
