import glob
import numpy as np
import re
import os
import string
import random

# Doc noi dung cua tung file text
# tach tung tu trong file text
# Xay dung tap 'dictionary' chua danh sach cac tu
class TruyVan:
    def __init__(self, tv, data):
        self.tv = tv
        self.data = data
        self.query = '' 
        self.numberOfText = 0
        self.file_paths = self.filePaths(data)
    
    # Tao tap cac duong dan
    def filePaths(self, path):
        """ To find the files in path:
        Example: in 'data' folder have ['a.txt', 'b.txt', 'c.txt']
        filePaths function will return the list of these name of file
        --------------
        Parameters:
        path: the path link to the folder where you want to find out the files 
        --------------
        Return:
        file_paths: list of files in the folder path"""
        return glob.glob(path)
    
    # Xay dung tap dictionary chua cac tu can truy van
    # va tap 'lst_contents' chua tap cac van ban de so sanh
    
    def parseWord(self, file_paths):
        """ Parse the Words in Text in Split it into simple Word:
        Example: the text: 'Hello, My Name is Hai.' will be parsed and
        return the list of word: ['Hello', 'My', 'Name', 'is', 'Hai']
        --------------
        Parameters:
        file_paths: the list of file txt
        --------------
        
        Return:
        dictionary: list of Words in text
        --------------
        lst_contents: list of texts  """
        
        lst_contents = []
        dictionary = set()
        for path in file_paths:
            with open(path,'r') as file:
                string = file.read()
                # Loai bo ki tu dac biet
                content = set(re.sub('[^\w\s\=/%-]|\d\.','',string).split())
                lst_contents.append(content)
                dictionary.update(content)
        dictionary = list(dictionary)
        return (dictionary, lst_contents)

    # Buoc 2: xay dung ma tran Term-Document
    def getTerm(self, words,texts):
        pass
    
    def defTerm(self):
    
        """ Determine the term of word in query sentences and 
        return two of variable:
        ---------
        terms: include the simple words
        ---------
        logic: include the simple operator
        
        Example: A sentence '"Hai" and "Huy"' will return
        logic = ['and']
        ------
        term = ['Hai', 'Huy'] """
        
        pattern1 = "'(\w+)"
        # Lay Logic
        pattern2 = '([oOAaxXnN])\w+\s'
        terms = re.findall(pattern1, self.tv)
        logic = re.findall(pattern2,self.tv)
        logic = [s.capitalize() for s in logic]
        return terms, logic
    
    # Xac dinh tap luan ly
    def detQuer(self, words, termDoc):
        """ detQuer(words, termDoc) to determine the word in set(words) which is
        used to query
        
        Parameters:
        ------------
        words: the list of words included in the texts
        ------------
        termDoc: if you want to get Logic with Inverted file: termDoc is the sets of words
        included in the texts
        Or: if you want to get Logic with Boolean: termDoc is the np.array()
        -------------
        Return:
        -------------
        clauses: the lists of set() or np.array([]) where the term's in
        --------------
        logic: the list includes simple operators
        """
    # Buoc 4: Xay Dung Luan Ly
    def Logic(self, clauses, logic):
        """ Get the Logic and return the list of result
        include the information which show where the words
        are included """
        
    # Thuc hien truy van 1 van ban
    def Query(self, clause,file):
        """ Query a text
        
        Parameters: 
        clause: the list of clauses which include the word used to
        query. It can be a list of set() or  a np.array([]) 
        ---------------
        file: the file name you want to query in it
        
        Return:
        s: string of represent the text found out"""
        
        # s = ''
        # for i in range(len(clause)):
        #     if (clause[i] == '1'):
        #         with open(file[i],'r') as f:
        #             string = f.read()
        #             s+=f'Văn bản {i+1}: \n{string}\n'
        #             self.numberOfText+=1
        # return s
    
    # Buoc 5: Thuc Hien truy van nhieu van ban
    def truyVan(self):
        """ Query a number of texts in data folder """
        print("Truy van ne")
        words, texts = self.parseWord(self.file_paths)
        term, logic = self.defTerm()
        clauses = self.getTerm(term,texts)
        #clauses, logic = self.defTerm(words, termDoc)
        newClause = self.Logic(clauses, logic)
        query = self.Query(newClause, self.file_paths)
        self.query += query
        
    # Buoc 6: Xay dung tap van ban chua du lieu truy van
    def getQuery(self, folder):
        """ Get the data of the '*.txt' files of the texts Queried 
        
        Parameters:
        folder: the name of folder you want to save it in
        """
        
        file_name = random_char(4)
        folder_path = '/media/lahai/DATA/Study/DAI HOC/NamBa/TruyVan/Tuan4/data/' + folder
        try:
            os.mkdir(folder_path)
        except FileExistsError:
            pass
        file_path = folder_path + '/' + file_name + '.txt'
        #print('Câu truy vấn của bạn là: {}'.format(self.tv))
        self.truyVan()
        with open(file_path,'w+') as f:
            if len(self.query) == 0 : self.query = 'Không tìm được văn bản phù hợp từ khóa'
            f.write(f'Câu truy vấn của bạn là: {self.tv}\nCó {self.numberOfText} văn bản tìm được:\nVăn bản truy vấn được:\n{self.query}')
            print('File truy vấn của bạn đã được lưu trong thư mục: {} dưới dạng text!'.format(file_path))

# Lay ten ngau nhien
def random_char(y):
       return ''.join(random.choice(string.ascii_letters) for x in range(y))
   
if __name__ == '__main__':
    tv = "'Trump' or 'quan'"
    data = 'src/*.txt'
    TV = TruyVan(tv, data)
    #a = TV.
    TV.getQuery()
    

