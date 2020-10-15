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
                content = set(re.sub('[^\w\s\=/%-]','',string).split())
                lst_contents.append(content)
                dictionary.update(content)
        dictionary = list(dictionary)
        return (dictionary, lst_contents)

    # Buoc 2: xay dung file_inverted
    def getTerm(self, words, texts):
        """ Build the 'Term-Mattrix' on behalf of whether
        the word in the text:
        Example: {1,2,3} means the word is
        in text with order: 1, 2, 3
        
        Parameters:s
        words: the list of words in texts
        ---------------
        texts: the list of texts
        
        Return:
        inv_files: the dictionary include represent where the word in """
        
        inv_files = dict()
        for index1, word in enumerate(words):
            inv_files[word] = set()
            for index2, text in enumerate(texts):
                if word in text: 
                    inv_files[word].add(index2)
        return inv_files
    
    def detQuer(self, words, inv_file):
        """ detQuer(words, termDoc) to determine the word in set(words) which is
        used to query
        Example: You want to query the word: 'Hello' in text: 'Hello my name is Hai'
        detQuer(word, text) will return the list named clause which include set([0]) meaning
        the word 'Hello' in the first text
         """
        terms, logic = self.defTerm()
        clauses = []
        for term in terms:
            try:
                setWord = inv_file[term]
                clauses.append(setWord)
            except:
                clauses.append(set())
        return clauses, logic
    
    # Xac dinh tap luan ly
    def detQuer(self, words, inv_file):
        """ detQuer(words, termDoc) to determine the word in set(words) which is
        used to query
        Example: You want to query the word: 'Hello' in text: 'Hello my name is Hai'
        detQuer(word, text) will return the list named clause which include set([0]) meaning
        the word 'Hello' in the first text
         """
        terms, logic = self.defTerm()
        clauses = []
        for term in terms:
            try:
                setWord = inv_file[term]
                clauses.append(setWord)
            except:
                clauses.append(set())
        return clauses, logic
    
    # Buoc 4: Xay Dung Luan Ly
    def Logic(self, clause, logic):   
        """ Get the Logic and return the list of result
        include the information which show where the words
        are included
        
        Parameters:
        clauses: the list of np.array() include the information of words in the text want to query
        ------------------
        logic: list of simple operator to get the logic
        
        Return:
        default: the result of Logic
        
        Example:
        
        Parameters:
        clauses: [{1,2}, {3}]
        logic: ['O']
        Will return:
        [1, 2, 3] """
        
        default = clause[0].copy()
        #print(default)
        index = 1
        iLog = 0
        stop = len(clause)
        numOfAllText = len(self.file_paths) 
        allText = {i for i in range(numOfAllText)}
        #print('Num', self.numberOfText)
        while True:
            
            if index == stop:
                break
            else:
                
                try:
                    front = logic[iLog+1]
                except:
                    front = ''
                term = clause[index]
                logi = logic[iLog]
                if front =='N':
                    term = allText - term
                    iLog+=1
                if logi == 'A':
                    default = default.intersection(term)
                elif logi == 'O':
                    default = default.union(term)
                elif logi == 'X':
                    default = default.symmetric_difference(term)
                index+=1
                iLog+=1
        print(default)
        return list(default)
        
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
        
        s = ''
        print(clause)
        for i in clause:
            print(i)
            with open(file[i],'r') as f:
                string = f.read()
                s+= f'Văn bản {i+1}: \n{string}\n'
                self.numberOfText+=1
        return s
    
    # Buoc 5: Thuc Hien truy van nhieu van ban
    def truyVan(self):
        """ Query a number of texts in data folder """
        words, texts = self.parseWord(self.file_paths)
        termDoc = self.getTerm(words,texts)
        clauses, logic = self.detQuer(words, termDoc)
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
        folder_path = '../data/text/' + folder
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
            print('File cua ban duoc luu trong thu muc: {}'.format(file_path))

# Lay ten ngau nhien
def random_char(y):
       return ''.join(random.choice(string.ascii_letters) for x in range(y))
   
if __name__ == '__main__':
    tv = "'Trump' or 'quan'"
    data = 'src/*.txt'
    TV = TruyVan(tv, data)
    #a = TV.
    TV.getQuery()
    

