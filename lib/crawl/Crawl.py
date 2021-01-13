import requests
import bs4
import pandas as pd
import os
import re
from datetime import *
import random
import string
import json
import codecs
from pathlib import Path


class Crawl:
    def __init__(self, url):
        """ 
        Constructor

        Parameters:
        self.url (string): The url link to webpage where you do want to crawl
        --------
        self.contents (list): The contents of the webpage. Starting with a hollow list
        --------
        self.folderNameParent (string): the name of parent folder including the main data folder.
        --------
        self.folderNameChild (string): the name of main data folder.
        --------
        self.srcFolder (string): the path of the Source Folder - Save the folder to Query. 
        --------
        self.dataFolder (string): the path of the Data Folder - Save the crawled folder.
        --------

        Methods Used:
        create_folder: To create the folder.

         """
        # print(self.pattern)
        # if self.pattern == None:
        #     self.pattern = '(\w+)\.(\w+)'
        base_path = Path(__file__).parent
        self.url = url

        try:
            self.folderNameParent, self.folderNameChild = get_name(
                self.pattern, self.url)
        except AttributeError:
            self.pattern = '(\w+).(\w+)'
            self.folderNameParent, self.folderNameChild = get_name(
                self.pattern, self.url)
        self.contents = []
        print(self.folderNameParent, self.folderNameChild)
        self.srcFolder = str((base_path / ('../src/' + self.folderNameParent)).resolve())
        self.dataFolder = str((base_path / ('../data/CSV/' + self.folderNameParent)).resolve())
        create_folder(self.srcFolder, self.dataFolder)
        self.srcFolder += '/' + self.folderNameChild
        self.dataFolder += '/' + self.folderNameChild
        create_folder(self.srcFolder, self.dataFolder)

    def get_page_content(self, url, html=1):
        """ 
        Get the soup (bs4.soup) that contain the '.html' file requested from the url

        Parameters:
        url (string): The url that you want to request

        Examples: The url: 'https://vnexpress.net/the-gioi' will return '.html' file

         """
        if html:
            page = requests.get(url)
            soup = bs4.BeautifulSoup(page.text, 'html.parser')
        else:
            file = codecs.open(self.url, 'r')
            file1 = file.read()
            page = str(file1)
            return bs4.BeautifulSoup(page, "html.parser")
        return soup

    def letCrawl(self):
        """ Crawl the data """
        pass

    def get_df(self, header, data, force_Dataframe=1):
        """ 
        Get the dataframe to be changed into csv:

        Parameters:
        header (list): The list of header where which do you want to add to the '.csv' file
        -------------
        data (list): list of data crawled from webpages

        return dataFrame (DataFrame): to be changed into '.csv'

         """
        papers = {}
        l = len(data) if len(data) < len(header) else len(header)
        for i in range(l):
            papers[header[i]] = data[i]
        if force_Dataframe:
            dataFrame = pd.DataFrame(papers)
        else:
            dataFrame = papers
        return dataFrame

    def get_csv(self, df):
        """ 
        Convert the DataFrame into '.csv' files

        Paremeters:
        df (DataFrame): the DataFrame to change

        Return:
        result: '.csv' files
         """

        filename = random_char(4)
        path_folder = self.dataFolder + '/' + filename + '.csv'
        result = df.to_csv(path_folder, header=True, index=None)
        print(f'File đề mục của bạn đã được lưu trong thư mục : {path_folder}')
        return result

    def get_text(self):
        """ 
        Get the text data from Webpage's content

        Parameters:
        self.contents (list): list containing the webpage's content

         """
        # print(self.contents)
        file_name = random_char(4)
        for i in range(len(self.contents)):
            if len(self.contents[i]) < 100:
                continue
            path = self.srcFolder + '/' + file_name + '-' + str(i) + '.txt'
            with open(path, 'a') as f:
                f.write(self.contents[i])
            #print(path)
        print('File dữ liệu thông tin của bạn đã được Crawl về từ trang web {} trong thư mục: {}'.format(
            self.url, path))

    def get_Json(self, jsonFile):
        """ 
        Get the '.json' files base on self.content
         """
        filename = random_char(4)
        path_folder = self.dataFolder + '/' + filename + '.json'
        with open(path_folder, 'w+') as file:
            json.dump(jsonFile, file, ensure_ascii=False)
        #result = df.to_json(path_folder, force_ascii = False)
        print(f'File đề mục của bạn đã được lưu trong thư mục : {path_folder}')
        # return result

    def getCrawlData(self, header=None, csv=0):
        """ 
        Crawl Data

        Parameters:
        header (list): list containing the header to add to '.csv' file. Default: header = None
         """

        data = self.letCrawl()
        df = self.get_df(header, data)
        # print(df)
        result = self.get_csv(df)

        self.get_text()


def random_char(y):
    """ 
    Get the random name of Folder

    Parameter:
    y (int): the length of folder's name

    Return:
    The string: name of folder (random)

    Example: with y =3, the random name could be 'Qts'

     """
    return ''.join(random.choice(string.ascii_letters) for x in range(y))


def create_folder(*pathFolders):
    """ 
    Creating the folder if it's not exist

    Parameter:
    *pathFolders (string): argument of path folder that you want to create

    Example: with the 'pathFolders' = 'LTH' the page folder will be created
     """

    for pathFolder in pathFolders:
        try:
            os.mkdir(pathFolder)
        except FileExistsError:
            pass


def get_name(pattern, string):
    """ 
    Get the name of folder, chosen from the url

    Parameter:
    pattern (string): the pattern you want to compare with string use Regular Expressions.
    -------
    string (string): the url that will be compared.

    Return:
    folderNameParent: the folder containing main data folder
    -------
    folderNameChild: the main data folder
     """
    names = re.match(pattern, string).groups()
    folderNameParent = names[0]
    folderNameChild = names[1]
    return (folderNameParent, folderNameChild)


if __name__ == '__main__':
    #url = 'https://vnexpress.net/thoi-su'
    # Do su dung khoang thoi gian nen khi thay doi trang se + 'temp' vao tempurl
    # Vi du: https://vnexpress.net/thoi-su-p2

    #crawl = Crawl(url,tempurl)
    # crawl.get_csv()
    # crawl.get_text()
    a = random_char(4)
    print(a)
