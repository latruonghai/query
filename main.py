from Crawl.Crawl import Crawl
from truyvan import truyVan

if __name__ == '__main__':
    tv = "'Quốc' and 'Trung'"
    url = 'https://vnexpress.net/the-gioi'
    # Do su dung khoang thoi gian nen khi thay doi trang se + 'temp' vao tempurl
    # Vi du: https://vnexpress.net/thoi-su-p2

    #tempurl = 'https://vnexpress.net/thoi-su-p'
    crawl = Crawl(url, 10)
    fd_name = crawl.folderName
    data = 'src/' + fd_name + '/*.txt'
    #print(crawl.folderName)
    TV = truyVan.TruyVan(tv, data)
    #crawl.get_csv()
    #crawl.get_text()
    TV.getQuery(fd_name)