import numpy as np
import glob
from os.path import join
from Preprocessing import processingPath
import re


class Model:

    def __init__(self, pathToTxt):
        pathToTxt = processingPath(pathToTxt)
        self.pathToTxt = glob.glob(join(pathToTxt, '*.txt'))
        # self.docTerm = pass
        self.dictionary, self.lst_contents = self.parseText()

    def getDocLenght(self):
        """ 
        Return:
        ----
        Doc's length: 
        """
        pass

    def parseText(self):
        """ 
        Parsing a text to solve it on system

        Params:
        ----
        self.pathToTxt (list): contain paths of txt files

        Variable and Return:
        ----
        dictionary (list): contain the words which included in the texts
        lst_contents (list): include the content of the text file

        """
        
        lst_contents = []
        dictionary = set()
        for path in self.pathToTxt:
            with open(path, 'r') as file:
                string = file.read()
                # Loai bo ki tu dac biet
                content = set(re.sub('[^\w\s\=/%-]', '', string).split())
                lst_contents.append(content)
                dictionary.update(content)
        dictionary = list(dictionary)
        print('Done')
        return (dictionary, lst_contents)


if __name__ == "__main__":
    mo = Model('../Flask/dataset')
    dictionary, lst_contents = mo.parseWord()
    print(dictionary[0:10])
