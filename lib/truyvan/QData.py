from truyvan.boolean import BooleanMattrix
from truyvan.inverted_file import InvertedFile
import re

class QData:
    def __init__(self, tv, data, boolean = 0):
        self.boolean = boolean
        self.tv = tv
        self.data = data
    def getDataQueries(self, fd_name):
        
        if self.boolean == 1:
            tv = BooleanMattrix(self.tv, self.data)
        else:
            tv = InvertedFile(self.tv, self.data)
        tv.getQuery(fd_name)
        
def analyze_Word(word):
    
    """ 
    To analyze the word to Query
    
    Return:
    The word after converted (string)
        
    Example:
    The word 'La Truong Hai' will return '"La" and "Truong" and "Hai"'
     """
    
    pattern = '[^\w\s\=/%-]'
    truyVan = re.sub(pattern,'',word).split()
    #truyVan = word.split()
    
    for i in range(len(truyVan)):
        truyVan[i] = "'"+truyVan[i]+"'"
    return ' and '.join(truyVan)

if __name__ == "__main__":
    fd_name = '../src/wikipedia/Du_lịch_Việt_Nam/*.txt'
    tv = analyze_Word("có vai trò rất quan trọng tại Việt Nam")
    q = QData(tv, fd_name)
    q.getDataQueries('Melon')