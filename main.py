from Crawl.Crawl import *
from truyvan.boolean import BooleanMattrix
from truyvan.inverted_file import InvertedFile
import time

class QData:
    def __init__(self, boolean = 1):
        self.boolean = boolean
        
    def getDataQueries(self, fd_name, tv, data):
        if self.boolean == 1:
            tv = BooleanMattrix(self.tv, self.data)
        else:
            tv = InvertedFile(self.tv, self.data)
        tv.getQuery(fd_name)
        
    def getCrawl(self, url, numb):
        cr = Crawl(url, numb)
        cr.get_csv()
        cr.get_text()
        return cr.folderName
    
    def crawl_query(self, url, numb):
        fd_name = self.getCrawl(url, numb)
        self.getDataQueries(fd_name)
        
def analyze_Word(word):
    pattern = '[^\w\s\=/%-]'
    truyVan = re.sub(pattern,'',word).split()
    #truyVan = word.split()
    for i in range(len(truyVan)):
        truyVan[i] = "'"+truyVan[i]+"'"
    return ' and '.join(truyVan)

if __name__ == '__main__':
    
    tt = 'Trịnh trả lời vòng vò'
    tv = analyze_Word(tt)
    #tv = "'Trump' and 'Biden' and not 'Trung'"
    #tv = "'đồng' and 'Hội' or not 'gia'"
    url = 'https://vnexpress.net/phap-luat'
    # Do su dung khoang thoi gian nen khi thay doi trang se + 'temp' vao tempurl
    # Vi du: https://vnexpress.net/thoi-su-p2

    # tempurl = 'https://vnexpress.net/thoi-su-p'
    crawl = Crawl(url, 30)
    fd_name = crawl.folderName
    data = 'src/' + fd_name + '/*.txt'
    #data = './datas/*.txt'
    #print(crawl.folderName)
    TV = BooleanMattrix(tv, data)
    tv2 = InvertedFile(tv, data)
    #crawl.get_csv()
    #crawl.get_text()
    start = time.time()
    TV.getQuery(fd_name)
    end = time.time() - start
    print('Boolean ',end)
    start1 = time.time()
    tv2.getQuery(fd_name)
    end1 = time.time() - start1
    print('Inverted ',end1)
    #url = 'https://vnexpress.net/giao-duc'
    #data = 'src/' + fd_name + '/*.txt'
    #qd =QData(tv, data)
    #qd.crawl_query(url, 30)