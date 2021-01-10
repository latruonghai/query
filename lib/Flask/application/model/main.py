import pickle
from pyvi import ViTokenizer, ViPosTagger
import numpy as np
def load_model():
    file_path = ["./weight/new_model.pkl", "./weight/new_idf_vector.pkl", "./weight/new_word.pkl"]
    ### Load Model
    with open(file_path[0], 'rb') as f:
        model = pickle.load(f)
    ### Load Idf_vector
    with open(file_path[1], 'rb') as f:
        idf_vector = pickle.load(f)
    ### Load Word
    with open(file_path[2], 'rb') as f:
        word = pickle.load(f)
    
    return model, idf_vector, word

def preprocessing_query(word):
    dict_path = './pro_dictionary.txt'
    stopword_dict = open(dict_path, "r", encoding="utf8")
    dict = stopword_dict.read()
    word = ViTokenizer.tokenize(word)
    prew = ''
    for w in word.lower().split():
        if w not in dict:
            prew += ( w + ' ')
    return prew
def Norm2(model,words, idf_vector,query):
    content_query=query.split()
    words_query=list(set(content_query))
    vector_query=[]
    res=[]
    try:
        for i in words_query:
            tf=content_query.count(i)/len(content_query)
            idf=idf_vector[words.index(i)]
            vector_query.append(tf*idf)
        vector_query=np.array(vector_query)

        docs_set=set()
        for i in words_query:
            docs_set.update(model[i].keys())
        docs_set=list(docs_set)
        for i in docs_set:
            vt=list()
            for j in words_query:
                vt.append(model[j].setdefault(i,0))
            vt=np.array(vt)
            res.append((i,np.linalg.norm(vt-vector_query))) #
        res.sort(key=lambda x: x[1])
        return res[:10]
    except:
        return None
#Scalar
def Scalar(model,words, idf_vector,query):
    content_query=query.split()
    words_query=list(set(content_query))
    vector_query=[]
    res=[]
    try:
        for i in words_query:
            tf=content_query.count(i)/len(content_query)
            idf=idf_vector[words.index(i)]
            vector_query.append(tf*idf)
        vector_query=np.array(vector_query)

        docs_set=set()
        for i in words_query:
            docs_set.update(model[i].keys())
        docs_set=list(docs_set)
        for i in docs_set:
            vt=list()
            for j in words_query:
                vt.append(model[j].setdefault(i,0))
            vt=np.array(vt)
            SProduct=vt@vector_query
            res.append((i,SProduct))
        res.sort(reverse=True,key=lambda x: x[1])
        return res[:5]
    except:
        return None
#Cosine
def Cosine(model,words, idf_vector,query):
    content_query=query.split()
    words_query=list(set(content_query))
    vector_query=[]
    res=[]
    try:
        for i in words_query:
            tf=content_query.count(i)/len(content_query)
            idf=idf_vector[words.index(i)]
            vector_query.append(tf*idf)
        vector_query=np.array(vector_query)

        docs_set=set()
        for i in words_query:
            docs_set.update(model[i].keys())
        docs_set=list(docs_set)
        for i in docs_set:
            vt=list()
            for j in words_query:
                vt.append(model[j].setdefault(i,0))
            vt=np.array(vt)
            cos=(vt@vector_query)/(np.linalg.norm(vt)*np.linalg.norm(vector_query))
            res.append((i,cos))
        res.sort(reverse=True,key=lambda x: x[1])
        """ print(res) """
        return res[:10]
    except:
        return None


model, idf_vector, words = load_model()
query = "du lịch"
print("QUERY: ", query )
query = preprocessing_query(query)
print("After processing", query)
print("------------------------------------------------\n Kết quả tìm kiếm:")
res = Cosine(model,words,idf_vector,query)
print(res)
for doc in res:
    #print(doc[0])
    id = ''
    if doc[0] < 10:
        id = '000' + str(doc[0])
    elif doc[0] < 100:
        id = '00' + str(doc[0])
    elif doc[0] < 1000:
        id = '0' + str(doc[0])
    else:
        id = str(doc[0])
    #print(id)

    ori_doc_path = "./Raw_data/corpus_"+id+'.txt'
    #print(path)
    
    with open(ori_doc_path, 'r', encoding="utf8") as f:
        full_doc = f.read()
    print(full_doc[:200] + '...')
    print("...................................................")