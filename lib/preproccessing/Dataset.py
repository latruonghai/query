from pathlib import Path
from pyvi import ViTokenizer
from Preprocessing import processingPath, create_folder
import os
import re
from time import time


class Dataset:

    def __init__(self, pathToSrc):
        self.pathToTxt = processingPath(pathToSrc)
        self.stopword = stopWord(os.path.join(
            self.pathToTxt, 'pro_dictionary.txt'))
        self.dataset_path = processingPath('../Flask/dataset')

    def removeStopWord(self, text):
        for t in text.split():
            t = t.lower()
            if t not in self.stopword:
                yield t

    def removeCommas(self, text):
        pattern = r'([--:\w?@%&+~#=]*\.[a-z]{2,4}\/{0,2})((?:[?&](?:\w+)=(?:\w+))+|[--:\w?@%&+~#=]+)?|[^\w\_\s]|\d'
        new_string = re.sub(pattern, '', text)
        return new_string

    def tokenize(self):
        dem = 1
        len1, len2 = (0, 0)
        start = time()
        for folder, subfolder, file in os.walk(self.pathToTxt):
            if len(file) == 0:
                continue
            else:
                for fi in file:
                    new_path = os.path.join(folder, fi)
                    with open(new_path, 'r') as f:
                        content = f.read()
                        content = self.removeCommas(content)
                        len1 += len(content)
                        pos = ViTokenizer.tokenize(content)
                        new_text = self.removeStopWord(pos)
                        new_text = ' '.join(new_text)
                        len2 += len(new_text)
                    path_to_save = 'dataset' + str(dem) + '.txt'
                    path_to_dataset = os.path.join(
                        self.dataset_path, path_to_save)
                    with open(path_to_dataset, 'w+') as f:
                        f.write(new_text)
                    dem += 1
        end_time = time() - start
        print('Done in {}s, with {}% change' .format(end_time, (len2/len1)*100))


def stopWord(path):
    with open(path, 'r') as f:
        a = f.read()
        stopword = a.split()
    return stopword


if __name__ == "__main__":
    # path = processingPath('../data')
    # print(path)
    da = Dataset('../Flask/model/Raw_data')
    # with open('/home/lahai/new/query/lib/Flask/model/Raw_data/corpus_0007.txt', 'r') as f:
    #     content = f.read()
    #     content = da.removeCommas(content)
    #     pos = ViTokenizer.tokenize(content)
    #     print(len(pos))
    #     new_text = da.removeStopWord(pos)
    #     new_text = ' '.join(new_text)
    #     print(new_text)
    da.tokenize()
