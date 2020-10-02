
# coding: utf-8

# In[31]:


import glob
import numpy as np
import re
import os


# In[32]:


# Buoc 1: Doc File text trong thu muc 'Data'
# va xay dung tap tu dien
# Lay danh sach file text trong thu muc data
file_paths = glob.glob('data/*.txt')


# In[33]:


file_paths


# In[34]:


# Doc noi dung cua tung file text
# tach tung tu trong file text
# Xay dung tap 'dictionary' chua danh sach cac tu
lst_contents = []
dictionary = set()

for path in file_paths:
    with open(path,'r') as file:
        string = file.read()
        # Loai bo ki tu dac biet
        content = set(re.sub('[^\w\s\/]','',string).split())
        lst_contents.append(content)
        dictionary.update(content)
dictionary = list(dictionary)


# In[56]:


# Buoc 2: xay dung ma tran Term-Document
termDoc = np.zeros((len(dictionary),len(file_paths)))
for index1, content1 in enumerate(dictionary):
    for index2, content2 in enumerate(lst_contents):
        if content1 in content2:
            #print('Word: {} in text: {}'.format(content1,index2+1))
            termDoc[index1,index2] = 1
termDoc = termDoc.astype('uint8').astype('str')


# In[74]:


# Buoc 3: Xac dinh cau truy van
truyVan = "'Trump' and 'Biden' and 'Trump'"
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
        index = dictionary.index(term)
        query = termDoc[index,:]
        clauses.append(query)
        #print(query)
    except:
        print(f'Error! The Word \'{term}\' is not in the query')
        clauses.append(np.zeros((1,len(lst_contents))).astype('uint8').astype('str')[0])
#print(clauses)


# In[76]:


# Buoc 4: Xay Dung Luan Ly
default = clauses[0]
index = 1
iLog = 0
stop = len(clauses)
length = len(default)
dic = {'A': 'and', 'O': 'or', 'X': '^' ,'N': 'not'}
while True:
    if index == stop:
        break
    else:
        try:
            front = logic[iLog+1]
        except:
            pass
        logi = dic[logic[iLog]]
        term = clauses[index]
        for i in range(length):
            if front == 'N':
                string = default[i] + " "+ logi+" not " + term[i]
            else:
                string = default[i] + " "+ logi+" " + term[i]
            default[i] = int(eval(string))
        index+=1
        iLog+=1
#print(default)
for i in range(len(default)):
    if (default[i] == '1'):
        with open(file_paths[i],'r') as f:
            string = f.read()
            print(f'Văn bản {i+1}: \n{string}')


# In[ ]:




