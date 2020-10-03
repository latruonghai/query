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
    
    # Tao tap cac duong dan
    def filePaths(self, path):
        return glob.glob(path)
    
    # Xay dung tap dictionary chua cac tu can truy van
    # va tap 'lst_contents' chua tap cac van ban de so sanh
    def parseWord(self, file_paths):
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

    # Buoc 2: xay dung ma tran Term-Document
    def termMattrix(self, words,texts):
        termDoc = np.zeros((len(words),len(texts)))
        for index1, word in enumerate(words):
            for index2, text in enumerate(texts):
                if word in text:
                    #print('Word: {} in text: {}'.format(content1,index2+1))
                    termDoc[index1,index2] = 1
        return termDoc.astype('uint8').astype('str')

    # Buoc 2.1: Xay dung inverted-files
    def inverted_files(self, words, texts):
        inv_files = dict()
        for index1, word in enumerate(words):
            inv_files[word] = set()
            for index2, text in enumerate(texts):
                if word in text: 
                    inv_files[word].add(index2)
        return inv_files

    # Buoc 3: Xac dinh cau truy van
    def detQuer(self, truyVan, words, termDoc):
        #truyVan = "'Trump' and 'Biden'"
        pattern1 = "'(\w+)"
        # Lay Logic
        pattern2 = '([oOAaxXnN])\w+\s'
        terms = re.findall(pattern1, truyVan)
        logic = re.findall(pattern2,truyVan)
        logic = [s.capitalize() for s in logic]
        clauses = []
        #print(logic)
        #print(terms)
        for term in terms:
            try:
                index = words.index(term)
                query = termDoc[index,:]
                clauses.append(query)
                #print(query)
            except:
                print(f'Error! The Word \'{term}\' is not in the query')
                clauses.append(np.zeros((1,len(file_paths))).astype('uint8').astype('str')[0])
        return clauses, logic
        #print(clauses)

    # Buoc 4: Xay Dung Luan Ly
    def Logic(self, clauses, logic):
        default = clauses[0].copy()
        index = 1
        iLog = 0
        stop = len(clauses)
        length = len(default)
        dic = {'A': 'and', 'O': 'or', 'X': '^'}
        while True:
            if index == stop:
                break
            else:
                try:
                    front = logic[iLog+1]
                except:
                    front = ''
                #print(front)
                logi = dic[logic[iLog]]
                term = clauses[index]
                if front == 'N':
                    for i in range(length):
                        string = default[i] + " "+ logi+" not " + term[i]
                        #print(string)
                        default[i] = int(eval(string))
                    iLog+=2
                else:
                    for i in range(length):
                        #print(logi)
                        string = default[i] + " "+ logi+" " + term[i]
                        #print(string)
                        default[i] = int(eval(string))
                    #print(eval(string))
                    iLog+=1
                index+=1
        return default

    # Thuc hien truy van 1 van ban
    def Query(self, clause,file):
        s = ''
        for i in range(len(clause)):
            if (clause[i] == '1'):
                with open(file[i],'r') as f:
                    string = f.read()
                    s+=f'Văn bản {i+1}: \n{string}\n'
                    self.numberOfText+=1
        return s
    
    # Buoc 5: Thuc Hien truy van nhieu van ban
    def truyVan(self):
        file_paths = glob.glob(self.data)
        words, texts = self.parseWord(file_paths)
        termDoc = self.termMattrix(words,texts)
        clauses, logic = self.detQuer(self.tv, words, termDoc)
        newClause = self.Logic(clauses, logic)
        query = self.Query(newClause, file_paths)
        self.query += query
        
    # Buoc 6: Xay dung tap van ban chua du lieu truy van
    def getQuery(self, folder):
        file_name = random_char(4)
        folder_path = './data/text/' + folder
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
    TV.getQuery()
    

