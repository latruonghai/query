from query import Query
import numpy as np

class VectorSpace(Query):

    def __init__(self, query, file_path):
        super().__init__(query, file_path)
        self.model, self.idf_vector, self.words = self.load_model(file_path)

    def Norm2(self):
        """ 
        Norm2(): retrieve information base on Norm2 model

        Params:
        ----

        Return:
        -----
        res (list): list of 10 text relating to the query.

        Methods:
        -----
        Use the query and base on it to retrieve information base on words
        imported by models
        """
        content_query = self.query.split()
        print('Norm2')
        words_query = list(set(content_query))
        vector_query = []
        res = []
        try:
            for i in words_query:
                tf = content_query.count(i)/len(content_query)
                idf = self.idf_vector[self.words.index(i)]
                vector_query.append(tf*idf)
            vector_query = np.array(vector_query)

            docs_set = set()
            for i in words_query:
                docs_set.update(self.model[i].keys())
            docs_set = list(docs_set)
            for i in docs_set:
                vt = list()
                for j in words_query:
                    vt.append(self.model[j].setdefault(i, 0))
                vt = np.array(vt)
                res.append((i, np.linalg.norm(vt-vector_query)))
            res.sort(key=lambda x: x[1])
            return res[:10]
        except:
            return None
    # Scalar

    def Scalar(self):
        """
        Norm2(): retrieve information base on Norm2 model

        Params:
        ----

        Return:
        -----
        res (list): list of 10 text relating to the query.

        Methods:
        -----
        Use the query and base on it to retrieve information base on words
        imported by models
        """

        content_query = self.query.split()
        print('Scalar')
        words_query = list(set(content_query))
        vector_query = []
        res = []
        try:
            for i in words_query:
                tf = content_query.count(i)/len(content_query)
                idf = self.idf_vector[self.words.index(i)]
                vector_query.append(tf*idf)
            vector_query = np.array(vector_query)

            docs_set = set()
            for i in words_query:
                docs_set.update(self.model[i].keys())
            docs_set = list(docs_set)
            for i in docs_set:
                vt = list()
                for j in words_query:
                    vt.append(self.model[j].setdefault(i, 0))
                vt = np.array(vt)
                SProduct = vt@vector_query
                res.append((i, SProduct))
            res.sort(reverse=True, key=lambda x: x[1])
            return res[:5]
        except:
            return None
    # Cosine

    def Cosine(self):
        """ 
        Cosine(): retrieve information base on Norm2 model

        Params:
        ----

        Return:
        -----
        res (list): list of 10 text relating to the query.

        Methods:
        -----
        Use the query and base on it to retrieve information base on words
        imported by models
        """

        content_query = self.query.split()
        print('Cosine')
        words_query = list(set(content_query))
        vector_query = []
        res = []
        try:
            for i in words_query:
                tf = content_query.count(i)/len(content_query)
                idf = self.idf_vector[self.words.index(i)]
                vector_query.append(tf*idf)
            vector_query = np.array(vector_query)

            docs_set = set()
            for i in words_query:
                docs_set.update(self.model[i].keys())
            docs_set = list(docs_set)
            for i in docs_set:
                vt = list()
                for j in words_query:
                    vt.append(self.model[j].setdefault(i, 0))
                vt = np.array(vt)
                cos = (vt@vector_query)/(np.linalg.norm(vt)
                                         * np.linalg.norm(vector_query))
                res.append((i, cos))
            res.sort(reverse=True, key=lambda x: x[1])
            """ print(res) """
            return res[:10]
        except:
            return None

    def letQuery(self):
        """ 
        Query data

        Return:
        ----
        self.post (list): list of dictionary with keys ['title', 'id', 'content']
        """
        res = self.Norm2()
        try:
            for index, doc in enumerate(res):
                # print(doc[0])
                id = ''
                temp_post = {}
                if doc[0] < 10:
                    id = '000' + str(doc[0])
                elif doc[0] < 100:
                    id = '00' + str(doc[0])
                elif doc[0] < 1000:
                    id = '0' + str(doc[0])
                else:
                    id = str(doc[0])
                # print(id)

                ori_doc_path = "../Raw_data/corpus_"+id+'.txt'
                # print(path)

                with open(ori_doc_path, 'r', encoding="utf8") as f:
                    full_doc = f.readlines()
                    temp_post['id'] = index + 1
                    temp_post['title'] = full_doc[1]
                    temp_post['content'] = "".join(full_doc[2:])[:200] + '...'
                self.post.append(temp_post)
            return self.post
        except TypeError:
            return None


if __name__ == '__main__':
    que = VectorSpace('du lịch', ["../weight/new_model.pkl",
                                  "../weight/new_idf_vector.pkl", "../weight/new_word.pkl"])
    #res = que.Cosine()
    """ print(res)
    for doc in res:
        # print(doc[0])
        id = ''
        if doc[0] < 10:
            id = '000' + str(doc[0])
        elif doc[0] < 100:
            id = '00' + str(doc[0])
        elif doc[0] < 1000:
            id = '0' + str(doc[0])
        else:
            id = str(doc[0])
        # print(id)

        ori_doc_path = "./Raw_data/corpus_"+id+'.txt'
        # print(path)

        with open(ori_doc_path, 'r', encoding="utf8") as f:
            full_doc = f.read()
        print(full_doc[:200] + '...')
        print("...................................................") """
    print(que.letQuery())
