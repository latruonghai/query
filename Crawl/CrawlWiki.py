from Crawl import Crawl, random_char

class CrawlWiki(Crawl):
    
    def __init__(self, url):
        super().__init__(url)
        self.folderName = 'Wikipedia'
    def findH2(self, text, lens, contents):
        i = lens[0] +1
        l = lens[1]
        if i == l:
            return i-1,text
        for j in range(i,l):
                        #print('j: ',j)
            kw = contents[j].find(class_ = 'mw-headline')
            if kw != None:
                #print('i1: ' ,i)
                #temp.append(kw.text)
                return j-1, text
            else:
                text+=contents[j].text
                    #print('kw.text',text)
                    #print('i2: ',i)
        return j-1, text
    def letCrawl(self):
        soup = self.get_page_content(self.url)
        contents = soup.findAll(('h2', 'p'))
        l = len(contents)
        i = 0
        while True:
            if i == l:
                break
            else:
                temp = []
                kw = contents[i].find(class_ = 'mw-headline')
                if kw != None:
                    text = kw.text
                    text += '\n'
                    i, text  = self.findH2(text, (i, l), contents)
                else:
                    text = ""
                    i , text = self.findH2(text, (i,l), contents)
                    if len(text) < 30:
                        i+=1
                        continue
                i+=1
                self.contents.append(text)
if __name__ == "__main__":
    cr = CrawlWiki('https://vi.wikipedia.org/wiki/Du_l%E1%BB%8Bch_Vi%E1%BB%87t_Nam')
    cr.letCrawl()
    cr.get_text()