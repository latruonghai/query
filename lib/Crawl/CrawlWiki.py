from Crawl import *


class CrawlWiki(Crawl):

    def __init__(self, url='https://vi.wikipedia.org/wiki/Wikipedia'):
        self.pattern = 'https?:\/\/vi\.(wikipedia)\.org\/wiki\/(\w+)'
        super().__init__(url)
        #self.containFolder = 'Wikipedia'

    def findH2(self, text, lens, contents):
        """ 
        Find headers of contents

        Parameters:
        text (string): the content after the header
        ------
        lens: the lens of contents
        ------
        contents (list): list of tag found

        Return:
        j-1: the index before the header
        -------
        text: the new text after add the content below the old text

         """

        i = lens[0] + 1
        l = lens[1]
        if i == l:
            return i-1, text

        for j in range(i, l):
                        #print('j: ',j)
            kw = contents[j].find(class_='mw-headline')
            if kw != None:
                #print('i1: ' ,i)
                # temp.append(kw.text)
                return j-1, text
            else:
                text += contents[j].text
                # print('kw.text',text)
                #print('i2: ',i)
        return j-1, text

    def letCrawl(self):
        """
         Crawl the data on 'vnexpress.net for a period days

        """

        soup = self.get_page_content(self.url)
        title = soup.find('h1', class_='firstHeading').text
        # print(title)
        contents = soup.findAll(('h2', 'p'))
        l = len(contents)
        i = 0
        while True:
            if i == l:
                break
            else:
                kw = contents[i].find(class_='mw-headline')
                if kw != None:
                    text = kw.text
                    text += '\n'
                    i, text = self.findH2(text, (i, l), contents)
                else:
                    text = ""
                    i, text = self.findH2(text, (i, l), contents)
                    if len(text) < 30:
                        i += 1
                        continue
                i += 1
                self.contents.append(text)
        # print(self.contents)
        return [self.url, title, self.contents]


def get_Keyword(string):
    return string.replace(' ', '_')


if __name__ == "__main__":
    string = input("Nhap vao tu khoa can tim kiem ")
    keyword = get_Keyword(string)
    url = 'https://vi.wikipedia.org/wiki/' + keyword
    print(url)
    cr = CrawlWiki(url)
    # print(cr.folderContain)
    cr.letCrawl()
    cr.get_Json()
    cr.get_text()
