# -*- coding: utf-8 -*-
"""Text Classification

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1bu_cHa8LKI4Kd2de2cSExKqPh1FPkP4h
"""

!wget https://archive.ics.uci.edu/ml/machine-learning-databases/20newsgroups-mld/20_newsgroups.tar.gz

!tar -xf 20_newsgroups.tar.gz

import glob
import os
from random import random
import random
import nltk
import re

"""**Stop Word**"""

nltk.download('stopwords')
stop_words = nltk.corpus.stopwords.words('english')

"""**Eliminating stop word**"""

def content_fraction(text, stop_words):
    content = [w.lower() for w in text if w.lower() not in stop_words]
    #print(len(content) / len(text))
    return content

"""**Eliminate \<html\> code** **bold text**"""

pattern = '[^\w\s\@\.]+|\.(?!\w)'
def eliminate_tag(text):
  return re.sub(pattern, '', text)

import codecs
def read_text(path):
  with codecs.open(path, 'rb') as f:
    content = f.read()
    content = content.decode(encoding='utf-8', errors='ignore')
    content = eliminate_tag(content).split()
    #print(content)
    content = content_fraction(content, stop_words)
  return content

"""# Create File test and train"""

path = '/content/20_newsgroups/'
def split_folders(path):
  folder_train = {}
  folder_test = {}
  for folder in os.listdir(path):
    path_folder = os.path.join(path, folder)
    files_container = os.listdir(path_folder)
    max_len = len(files_container)
    #print(files_container)
    # print(len(files_container))
    files = []
    while True:
      max_len = len(files_container)
      #print("Max len ", max_len)
      if len(files) == 250:
        break
      rand_index = random.randint(0, max_len - 1 )
      #print('rand index ',rand_index)
      one_file = files_container[rand_index]
      #print(one_file)
      #path_file = os.path.join(path_folder, one_file )
      if one_file not in files:
        files.append(one_file)
        files_container.remove(one_file)
    folder_train[folder] = files_container
    folder_test[folder] = files
  return (folder_train, folder_test)

"""## Preprocessing Data

### Create train data
"""

def folder_split(folder):
  x, y = [], []
  for keys, values in folder.items():

    for value in values:
      y.append(keys)
      path_new = os.path.join(path, keys, value)
      content = read_text(path_new)
      x.append(" ".join(content))
  print(len(x), len(y))
  return (x, y)

def create_train_test(*folder):
  folder_train = folder[0]
  folder_test = folder[1]
  x_train, y_train = folder_split(folder_train)
  x_test, y_test = folder_split(folder_test)
  return (x_train, y_train, x_test, y_test)



"""## Train Data

```
# This is formatted as code
```

**Import module**
"""

from sklearn.preprocessing import LabelEncoder
import pickle
import time
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score

"""**Label encoder**"""

def Label(y_train, y_test):
  label_encoder = LabelEncoder()
  label_encoder.fit(y_train)
  print(list(label_encoder.classes_),'\n')
  y_train = label_encoder.transform(y_train)
  y_test = label_encoder.transform(y_test)
  return y_train, y_test

"""### Model Naive Bayes"""

def Train(x_train, y_train, n0=None):
  start_time = time.time()
  text_clf = Pipeline([('vect', CountVectorizer()), 
                      ('tfidf', TfidfTransformer()), 
                      ('clf', MultinomialNB())
                      ])
  try:
    text_clf = text_clf.fit(x_train[:n0], y_train[:n0])
  except IndexError:
    text_clf = text_clf.fit(x_train, y_train)
  train_time = time.time() - start_time
  print('Done training Naive Bayes in', train_time, 'seconds.')
  
  # Save model
  
  #print(text_clf)
  return text_clf

"""## Test data

### Predict
"""

def Predict(model,x_test, y_test):
  
  predict = model.predict(x_test)
  accuracy = accuracy_score(predict, y_test)
  #print(classification_report(predict, y_test))
  #print(confusion_matrix(predict, y_test))
  print(accuracy)
  return accuracy

"""## Choose n0 documents in train

### Display
"""

import matplotlib.pyplot as plt
import numpy as np
def display(x, y):
  print(x, y)
  plt.plot(x, y)
  plt.xlabel('Num of Documents')
  plt.ylabel('Accuracy')
  plt.show()
  plt.savefig(os.path.join('/content','naive_bayes_model.png'))

"""## Demo"""

def demo(path):
  n0, accuracies = [], []
  folder_train, folder_test = split_folders(path)
  # Create dataset
  x_train, y_train, x_test, y_test = create_train_test(folder_train, folder_test)
  y_train, y_test = Label(y_train, y_test)
  for n in range(1000, 15001, 2000):
    print('N: ', n)
    model = Train(x_train, y_train, n0=n)
    accuracy = Predict(model,x_test, y_test)
    n0.append(n)
    accuracies.append(accuracy)
  display(n0, accuracies)
  pickle.dump(model, open(os.path.join('/content', "naive_bayes.pkl"), 'wb'))

# Commented out IPython magic to ensure Python compatibility.
# %matplotlib inline
if __name__ =="__main__":
  path = '/content/20_newsgroups/' 
  demo(path)

