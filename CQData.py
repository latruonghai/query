from Crawl.CData import CData
from truyvan.QData import QData
import re

class CQData:
    def __init__(self, url = 'https://vi.wikipedia.org/wiki/Wikipedia', tv = " ", numberOfDay = 0, web = 0, boolean = 0):
        self.url = url
        self.tv = tv
        self.numberOfDay = numberOfDay
        self.web = web
        self.boolean = boolean
    
    def askForDoing(self):
        self.tv = analyze_Word(input("Nhập vào câu truy vấn của bạn "))
        self.web = input("Bạn muốn lấy dữ liệu từ 2 trang web nào?\nCó 2 lựa chọn cho bạn:\n \t- Chọn '0' nếu bạn muốn lấy dữ liệu từ Wikipedia \n\t- Chọn '1' nếu bạn muốn lấy dừ liệu từ VnExpress")
        if self.web =='0':
            self.url = 'https://vi.wikipedia.org/wiki/' + get_Keyword(input("Nhập từ khóa cần tìm của bạn vào đây: "))
        else:
            self.url = input('Nhập đường dẫn trang báo Vnexpress của bạn vào đây: ')
        if self.boolean == 0:
            print("Bạn sẽ được truy vấn dưới dạng Inverted Files! ")
        else:
            print('Bạn sẽ được truy vấn dưới dạng Boolean Retrieval! ')
    def letDoIt(self):
        self.askForDoing()
        cd = CData(self.url,self.web, self.numberOfDay)
        folderNameParent, folderNameChild = cd.Crawler()
        qd = QData(self.tv, cd.sourceFolder + '/*.txt', self.boolean)
        qd.getDataQueries(folderNameChild)
        
def get_Keyword(string):
    return string.replace(' ', '_')  
def analyze_Word(word):
    pattern = '[^\w\s\=/%-]'
    truyVan = re.sub(pattern,'',word).split()
    #truyVan = word.split()
    for i in range(len(truyVan)):
        truyVan[i] = "'"+truyVan[i]+"'"
    return ' and '.join(truyVan)

if __name__ == '__main__':
    cq = CQData()
    cq.letDoIt()