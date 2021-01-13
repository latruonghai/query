from Crawl import *
import time
import math


class CrawlTraveloka(Crawl):

    def __init__(self, url, post_num):
        self.pattern = 'https?:\/\/blog\.(traveloka)\.com\/vn\/(\w+)\/'
        super().__init__(url)
        self.page_num = math.floor(post_num/9)

    def letCrawl(self):
        """
        Crawl the data on 'Traveloka' with:

        -----
        URL = self.url

        Use get the data on each page based on the link:
        https://blog.traveloka.com/vn/collection/page/(num)/# with name is the page number

        With every page, we get the content in it, including:

        - Source: the url link to the content
        - Title: the title of the blog
        - Content: blog's contents

        Return
        ------
        A list of [title, src, content]
        """
        url = self.url
        page_num = self.page_num
        titles = []
        Src = []

        while page_num > 0:
            subUrl = getSubURL(url, str(page_num))
            print(subUrl)
            soup = self.get_page_content(subUrl)
            container = soup.findAll(class_='post-content-container')
            for item in container:
                title = item.find(class_='post-title')
                source = title.get('href')
                # print(source)
                title = strip(title.text)
                content = title + '\n' + self.getContent(source)
                self.contents.append(content)

                titles.append(title)
                Src.append(source)
            page_num -= 1
        # print(self.contents)
        return [titles, Src]

    def getContent(self, source):
        soup = self.get_page_content(source)
        contents = soup.find(class_='post-content')
        contents = contents.findAll(('p', 'h2', 'li'))
        contents = [
            content.text for content in contents if content.text != 'Mục Lục']
        return '\n'.join(contents)


def strip(str):
    new = str.split()
    # print(new)
    return " ".join(new)


def getSubURL(url, substring):
    """
    Normalize the URL

    Arguments:
    ------
    url: the source url
    Example: https://blog.traveloka.com/vn/collection/

    Return:
    ------
    The normalized url:
    Example: https://blog.traveloka.com/vn/collection/page/3/#
    """
    return url + 'page/' + substring + '/'


if __name__ == '__main__':
    start = time.time()
    url = 'https://blog.traveloka.com/vn/collection/'
    #print(getSubURL(url, '2'), time.time()-start)
    crawl = CrawlTraveloka(url, 20)
    crawl.letCrawl()
