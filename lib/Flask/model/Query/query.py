import pickle
from pyvi import ViTokenizer, ViPosTagger



class Query():
    """ 
    Query the namespace
    ----
    Params:
    ------
    query (str): A query sentences to retrieve the information

    files_path (srt): path links to the model to retrieve on it
    _---
    Methods:
    -----
    Norm2(): retrieve information base on Norm2 model

    Scalar(): retrieve information base on Scalar model

    Cosine(): retrieve information base on Cosine model

    letQuery(): do the retrieval
    """

    def __init__(self, query, file_path):
        self.query = self.preprocessing_query(query)
        # self.model, self.idf_vector, self.words = self.load_model(file_path)
        self.post = []


    def preprocessing_query(self, word):
        """ 
        Preprocessing Query: normalize the word to the new type query
        
        Return:
        prew (str): new type of string like: W_W
        
        Example:
        -----
        Params: word = 'Ha Noi'
        
        Return prew = 'Ha_Noi'
        """
        
        dict_path = '../pro_dictionary.txt'
        stopword_dict = open(dict_path, "r", encoding="utf8")
        dict = stopword_dict.read()
        word = ViTokenizer.tokenize(word)
        prew = ''
        for w in word.lower().split():
            if w not in dict:
                prew += (w + ' ')
        return prew


    def load_model(self, file_path):
        """ 
        Load the model in file_path
        Models 're used to make the retrieve's speed faster.
        
        Params:
        -----
        file_path (list): list contain the path link to the models
        
        Return:
        -----
        model (list): list of dictionary contain texts
        
        words (list): contain words in texts
        
        idf_vector (list): list of idf per text
        """
        
        """ file_path = ["./weight/new_model.pkl",
                    "./weight/new_idf_vector.pkl", "./weight/new_word.pkl"] """
        # Load Model
        with open(file_path[0], 'rb') as f:
            model = pickle.load(f)
        # Load Idf_vector
        with open(file_path[1], 'rb') as f:
            idf_vector = pickle.load(f)
        # Load Word
        with open(file_path[2], 'rb') as f:
            word = pickle.load(f)

        return model, idf_vector, word


if __name__ == "__main__":
    """ model, idf_vector, words = load_model()
    query = "du lịch"
    print("QUERY: ", query)
    query = preprocessing_query(query)
    print("After processing", query)
    print("------------------------------------------------\n Kết quả tìm kiếm:") """
    que = Query('du lich', ["../weight/new_model.pkl",
                            "../weight/new_idf_vector.pkl", "../weight/new_word.pkl"])
    res = que.Cosine()
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
    print(que.letQuery()[0])
