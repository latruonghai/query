""" ''' from model.query import Query
from app import Todo
from app import db
if __name__ =="__main__":
    print(Todo.query.all())
    query = "du lịch"
    path = ["./model/weight/new_model.pkl",
        "./model/weight/new_idf_vector.pkl", "./model/weight/new_word.pkl"]
    que = Query(query, path)
    re = que.letQuery()
            
    new_post = Todo(ids=re[0]['id'], title=re[0]['title'], content=re[0]['content'], keyword="du lich")
    db.session.commit()
    a = Todo.query.filter_by(ids=3).first()
    print(a.ids, a.title)
    a = new_post
    db.session.commit()
    print(a.ids, a.title) '''
import glob
import time


def processing(path):
    path_file = glob.glob(path)
    print(len(path_file))
    start = time.time()
    for file in path_file:
        #print(file)
        with open(file, mode='r') as f:
            content = f.readlines()
            #print(content)
            try:
                if content[0] != '\n':
                    content = ['\n'] + content
            except IndexError:
                pass
            
        with open(file, 'w+') as fi:
            fi.write("".join(content))
                
    print("Done in {}".format(time.time() - start))


if __name__ == "__main__":
    path = "/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/CS336 Multimedia Information Retrieval/Raw_data/*.txt"
    processing(path)    
 """
""" import csv
with open('/media/lahai/DATA/Study/DAI_HOC/NamBa/query/data/CSV/vnexpress/du-lich/NZdM.csv') as file:
    read = csv.DictReader(file)
    print(list(read)) """
import pandas as pd
import glob
import numpy as np
path = glob.glob('/media/lahai/DATA/Study/DAI_HOC/NamBa/query/src/CSV/data_update_17_12_2020/*.csv')
print(path)
new_title = np.array([])
new_source = np.array([])
names = []
for p in path:
    name = p.split('/')[-1].split('.')[0]
    print(name)
    names.append(name)
    df = pd.read_csv(p)
    cur_title = np.array(df['Titles'])
    cur_Source = np.array(df['Sources'])
    new_title = np.append(new_title, cur_title, axis=0)
    new_source = np.append(new_source, cur_Source, axis=0)
with open('order.txt', 'w+') as f:
    f.write(", ".join(names))
df_new = pd.DataFrame({'Titles': new_title, 'Sources': new_source})
df_new.to_csv('new_CSV.csv', header=True, index=None)
