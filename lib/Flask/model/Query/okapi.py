from query import Query
from pyvi import ViTokenizer, ViPosTagger
import pickle
import numpy as np
import re


class Okapi(Query):

    def __init__(self, query, file_path):
        super().__init__(query, file_path)
        self.files, self.f2t, self.iDex, self.dltable, self.dl, self.avgdl, self.idf = self.load_model(
            file_path)
        self.name_files = []
        self.total_score = self.BM25_score()

    def load_model(self, file_path):
        with open(file_path[0], 'rb') as f:
            avgdl = pickle.load(f)

        with open(file_path[1], 'rb') as f:
            dl = pickle.load(f)

        with open(file_path[2], 'rb') as f:
            dltable = pickle.load(f)

        with open(file_path[3], 'rb') as f:
            f2t = pickle.load(f)

        with open(file_path[4], 'rb') as f:
            files = pickle.load(f)

        with open(file_path[5], 'rb') as f:
            idf = pickle.load(f)

        with open(file_path[6], 'rb') as f:
            iDex = pickle.load(f)

        return files, f2t, iDex, dltable, dl, avgdl, idf

    def preprocessing_query(self, query):
        dict_path = r'./model/pro_dictionary.txt'
        with open(dict_path, encoding='utf8') as fobj:
            stop_words = fobj.read()
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

    def getsc(self, filename, k=1.2, b=0.5):
        score = 0
        for w in self.f2t[filename]:
            if w not in self.query:
                continue
            wc = len(self.iDex[w][filename])
            score += self.idf[w] * ((wc) * (k+1)) / (wc + k *
                                                     (1 - b + b * self.dl[filename] / self.avgdl))
        return score

    def BM25_score(self):
        '''
        output: a dictionary with filename as key, score as value
        '''
        total_score = {}
        for doc in self.f2t.keys():

            total_score[doc] = self.getsc(doc)

        return total_score

    def ranked_doc(self):
        ranked_docs = sorted(self.total_score.items(),
                             key=lambda x: x[1], reverse=True)
        return ranked_docs[:6]

    def letQuery(self):
        pattern = '(corpus_\d+.txt)'
        self.BM25_score()
        res = self.ranked_doc()
        print(res)
        # print(res)
        for index, doc in enumerate(res):
                # print(doc[0])
            id = ''
            temp_post = {}
            print(doc[0])
            name = re.findall(pattern, doc[0])[0]
            # if doc[0] < 10:
            #     id = '000' + str(doc[0])
            # elif doc[0] < 100:
            #     id = '00' + str(doc[0])
            # elif doc[0] < 1000:
            #     id = '0' + str(doc[0])
            # else:
            #     id = str(doc[0])
            # print(id)

            ori_doc_path = "./model/raw_dataset1/" + name
            # print(path)

            with open(ori_doc_path, 'r', encoding="utf8") as f:
                full_doc = f.readlines()
                temp_post['id'] = index + 1
                temp_post['title'] = full_doc[1]
                temp_post['content'] = "".join(full_doc[2:])[:200] + '...'
            self.post.append(temp_post)
            self.name_files.append(name)
            
        return self.post, self.name_files


if __name__ == '__main__':
    query = 'du lịch'
    file_path = ['/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/Okapi BM25/src/weight of Dataset/avgdl.pkl',
                 '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/Okapi BM25/src/weight of Dataset/dl.pkl',
                 '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/Okapi BM25/src/weight of Dataset/dltable.pkl',
                 '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/Okapi BM25/src/weight of Dataset/file2terms.pkl',
                 '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/Okapi BM25/src/weight of Dataset/files.pkl',
                 '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/Okapi BM25/src/weight of Dataset/idf.pkl',
                 '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/Okapi BM25/src/weight of Dataset/invertedIndex.pkl']
    que = Okapi(query, file_path)
    print(que.letQuery())
