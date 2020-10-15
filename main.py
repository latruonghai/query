from Crawl.CData import CData
from truyvan.QData import QData
import re

class CQData:
    def __init__(self, url = 'https://vi.wikipedia.org/wiki/Wikipedia', tv = " ", numberOfDay = 0, mode = 0, boolean = 0):
        self.url = url
        self.tv = tv
        self.numberOfDay = numberOfDay
        self.mode = mode
        self.boolean = boolean
    
    def askForDoing(self):
        self.tv = analyze_Word(input("Nhập vào câu truy vấn của bạn "))
        if self.mode ==0:
            self.url = 'https://vi.wikipedia.org/wiki/' + get_Keyword(input("Nhập từ khóa cần tìm của bạn vào đây: "))
        else:
            self.url = input('Nhập đường dẫn trang báo Vnexpress của bạn vào đây: ')
        if self.boolean == 0:
            print("Bạn sẽ được truy vấn dưới dạng Inverted Files! ")
        else:
            print('Bạn sẽ được truy vấn dưới dạng Boolean Retrieval! ')
    def letDoIt(self):
        self.askForDoing()
        cd = CData(self.url,self.mode, self.numberOfDay)
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