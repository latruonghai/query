from truyvan.truyVan import TruyVan
import numpy as np

class BooleanMattrix(TruyVan):
    def __init__(self, tv, data):
        #print('Day la lop con')
        super().__init__(tv, data)
    
    def getTerm(self, words,texts):
        """ Build the 'Term-Mattrix' on behalf of whether
        the word in the text:
        Example: [0, 1, 1, 1, 0] means the word is
        in text with order: 1, 2, 3
        Parameters:
        words: the list of words in texts
        ---------------
        texts: the list of texts
        
        Return:
        inv_files: np.array() include represent where the word in """
        
        termDoc = np.zeros((len(words),len(texts)))
        for index1, word in enumerate(words):
            for index2, text in enumerate(texts):
                if word in text:
                    #print('Word: {} in text: {}'.format(content1,index2+1))
                    termDoc[index1,index2] = 1
        return termDoc.astype('uint8').astype('str')
    
   
    def detQuer(self, words, termDoc):
        """ detQuer(words, termDoc) to determine the word in set(words) which is
        used to query
        Example: You want to query the word: 'Hello' in text: 'Hello my name is Hai'
        detQuer(word, text) will return the list named clause which include np.array([[1]])
        Parameters:
        ------------
        words: the list of words included in the texts
        ------------
        termDoc: termDoc is the np.array()
        -------------
        Return:
        -------------
        clauses: the list of np.array([]) where the term's in
        --------------
        logic: the list includes simple operators"""
        
        #truyVan = "'Trump' and 'Biden'"
        terms, logic = self.defTerm()
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
                clauses.append(np.zeros((1,len(self.file_paths))).astype('uint8').astype('str')[0])
        return clauses, logic
    
    
    def Logic(self, clauses, logic):
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
        clauses: [[1,1,1],[0,0,0]]
        logic: ['A']
        Will return:
        [0,0,0] """
        
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
                    logi += ' not'
                    iLog+=2
                else:
                    iLog+=1
                for i in range(length):
                    string = default[i] + " "+logi + ' ' + term[i]
                    default[i] = int(eval(string))
                index+=1
        return default
    
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
        for i in range(len(clause)):
            if (clause[i] == '1'):
                with open(file[i],'r') as f:
                    string = f.read()
                    s+=f'Văn bản {i+1}: \n{string}\n'
                    self.numberOfText+=1
        return s
    
if __name__ == '__main__':
    tv = "'Trump' and 'Biden' and not 'Trungs'"
    data = '../datas/*.txt'
    Que = BooleanMattrix(tv,data)
    Que.getQuery('Hai')
