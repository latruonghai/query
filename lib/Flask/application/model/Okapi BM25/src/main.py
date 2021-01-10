import re
import math
from nltk.stem import PorterStemmer
import os
from pyvi import ViTokenizer, ViPosTagger
import pickle

def load_weigt():
    with open('./model_okapi_25/avgdl.pkl', 'rb') as f:
        avgdl = pickle.load(f)

    with open('./model_okapi_25/dl.pkl', 'rb') as f:
        dl = pickle.load(f)
    
    with open('./model_okapi_25/dltable.pkl', 'rb') as f:
        dltable = pickle.load(f)
    
    with open('./model_okapi_25/file2terms.pkl', 'rb') as f:
        f2t = pickle.load(f)
    
    with open('./model_okapi_25/files.pkl', 'rb') as f:
        files = pickle.load(f)

    with open('./model_okapi_25/idf.pkl', 'rb') as f:
        idf = pickle.load(f)
    
    with open('./model_okapi_25/invertedIndex.pkl', 'rb') as f:
        iDex = pickle.load(f)

    return files, f2t, iDex, dltable, dl, avgdl, idf


def preprocessing_query(query):
    dict_path =r'D:\src\InforRetri\proj\pro_dictionary.txt'
    with open(dict_path, encoding='utf8') as fobj:
        stop_words=fobj.read()
    query = ViTokenizer.tokenize(query)
    query = query.lower()
    # split text into words (tokenized list of a document)
    
    query = query.split()
    stop_words = stop_words.split()
    prew = ''
    for word in query:
        if word not in stop_words:
            prew = prew + word + ' '
    query = prew.split()

    return query


def getsc(filename, file_to_terms,idf, invertedIndex, k, b, dl, avgdl, qlist):
    score = 0
    for w in self.f2t[filename]:
        if w not in self.query:
            continue
        wc = len(invertedIndex[w][filename])
        score += idf[w] * ((wc) * (k+1)) / (wc + k *
                                                        (1 - b + b * dl[filename] / avgdl))
    return score

def BM25scores(qlist, file_to_terms, idf, invertedIndex, k, b, dl, avgdl):
        '''
        output: a dictionary with filename as key, score as value
        '''
        total_score = {}
        for doc in file_to_terms.keys():

            total_score[doc] = getsc(doc, file_to_terms, idf, invertedIndex, k, b, dl, avgdl, qlist)
        
        return total_score

def ranked_docs(total_score):
    ranked_docs = sorted(total_score.items(),
                            key=lambda x: x[1], reverse=True)
    return ranked_docs[:5]

query = "du lịch đầu năm"

files, f2t, iDex, dltable, dl, avgdl, idf = load_weigt()
query = preprocessing_query(query)
k = 1.2
b = 0.75
sc = BM25scores(query, f2t, idf, iDex, k  , b , dl, avgdl)
print(ranked_docs(sc))