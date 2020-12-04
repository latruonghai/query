from Crawl import *
from Crawl import get_name


class CrawlDulich(Crawl):

    def __init__(self, url):
        self.pattern = '(\w+).(\w+)'
        super().__init__(url)
        #self.folderNameChild, self.folderNameParent = get_name(self.pattern, self.url)

    def letCrawl(self):
        """
        Crawl Data from '.html' file

        Return:
        ------
        - Source: link to page file
        - Title: Title of the page

        """
        url = self.url
        soup = self.get_page_content(url, html=0)
        container = soup.findAll(class_='masonry-brick')
        Title = []
        Source = []
        #container = soup.findAll('.post-thumb')
        # print(container)

        for con in container:
            mainContent = con.find(class_='entry-title')
            if mainContent != None:
                link = mainContent.find('a')
                title = link.get('title')
                # print(title)
                source = link.get('href')
                # print(source)
                content = title + '\n' + self.getContent(source)
                self.contents.append(content)
                Title.append(title)
                Source.append(source)
                # print(source)
        # print(Title)
        return [Title, Source]
        # print(source)
    # def crawlContent(self, container):

    def getContent(self, source):
        print(source)
        texts = []
        soup = self.get_page_content(source)
        content = soup.find(class_='entry-content')
        contents = content.findAll('p')
        try:
            compare = content.find('p', class_='has-text-align-right').text
            compare1 = content.find('div', class_='rmp-rate-view').text
            for content in contents:
                text = content.text
                if text not in compare1 and text not in compare:
                    texts.append(text)
        except AttributeError:
            compare1 = content.find('div', class_='rmp-rate-view').text
            for content in contents:
                text = content.text
                if text not in compare1:
                    texts.append(text)
        return '\n'.join(texts)


if __name__ == '__main__':
    cr = CrawlDulich('DuLich.html')
    cr.letCrawl()
    print(cr.contents)
    # print(cr.getContent('https://dulichchat.com/du-lich-da-lat-thang-8-thu-ve-ngan-anh-dep/'))
