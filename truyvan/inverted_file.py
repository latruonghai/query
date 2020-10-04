from truyVan import TruyVan

class InvertedFile(TruyVan):
    def __init__(self, tv, data):
        super().__init__(tv, data)
    
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
if __name__ == "__main__":
    tv = "'Trump' and 'Biden' and not 'Trung'"
    data = '../datas/*.txt'
    inv = InvertedFile(tv, data)
    inv.getQuery('He')
    #print(logic)
    #print(newClause)
    
    #print(dictionary)