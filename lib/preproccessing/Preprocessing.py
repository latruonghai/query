import time
import csv
import pandas as pd
import numpy as np
import glob
import os
from pathlib import Path


class Preprocessing():

    def __init__(self, pathCSV='', pathText=''):
        self.pathCSV = pathCSV
        self.pathText = pathText

        path_new_csvFolder = processingPath('../Flask')
        path_new_txtFolder = '../src/newTEXT'
        create_folder(path_new_csvFolder)
        create_folder(path_new_txtFolder)
        self.new_csv_file = os.path.join(path_new_csvFolder,
                                         'new_CSV.csv')
        self.new_txt_file = os.path.join(path_new_txtFolder,
                                         'order.txt')

    def combineCSV(self):
        """ 
        To combine CSV files with the only CSV file include information:

        Title:  Paper's title names
        -----
        Source: Paper's sources
        ------
        Return:
        ------
        A new CSV file after combined
        """
        # print(self.pathCSV)
        new_title = np.array([])
        new_source = np.array([])
        names = []

        for folder, subFolder, file in os.walk(self.pathCSV):
            if len(file) == 0:
                continue
            for f in file:
                if f.split('.')[-1] != 'csv':
                    continue
                print(f)
                path_csv = os.path.join(folder, f)
                print(path_csv)
                #name = f.split('/')[-1].split('.')[0]
                # print(name)
                names.append(f)
                df = pd.read_csv(path_csv)
                cur_title = np.array(df['Titles'])
                cur_Source = np.array(df['Sources'])
                new_title = np.append(new_title, cur_title, axis=0)
                new_source = np.append(new_source, cur_Source, axis=0)

        # Save files
        with open(self.new_txt_file, 'w+') as fi:
            fi.write(", ".join(names))
        # print(new_title)
        # print(new_source)
        df_new = pd.DataFrame({'Titles': new_title, 'Sources': new_source})
        df_new.to_csv(self.new_csv_file, header=True, index=None)
        #self.pathCSV = new_csv_file
        # return (new_csv_file, new_txt_file)

    def editCSV(self):
        df = pd.read_csv(self.new_csv_file)
        print(self.new_csv_file)
        titles = np.array(df['Titles'])
        print(df)
        name = [""] * len(df['Titles'])
        #name = np.array(['']*len(df['Titles']))
        folder_txt = glob.glob(self.pathText)
        
        for file_txt in folder_txt:
            
            with open(file_txt, 'r') as f:
                
                name_file = file_txt.split('/')[-1]
                # print(name_file)
                content = f.readlines()
                #print(file_txt)
                title = content[1].replace('\n', '').strip()
                # print(title)
                # print(title)
                try:
                    ind = df[titles == title].index[0]
                except:
                    continue
                name[ind] = name_file
                
        # print(len(name))
        new_df = pd.DataFrame(
            {'Files name': name, 'Titles': titles, 'Sources': df['Sources']})
        new_df.to_csv(self.new_csv_file, header=True, index=None)
        
        print('Done, Your File have been saved in {}'.format(self.new_csv_file))


def create_folder(path):
    try:
        os.mkdir(path)
    except FileExistsError:
        pass


def processingPath(path):
    base_path = Path(__file__).parent
    file_path = (base_path / path).resolve()
    return file_path


if __name__ == "__main__":
    # path_txt = '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/raw_dataset1/*.txt'
    # # path_txt = processingPath('../Flask/')
    # pre = Preprocessing('../data/CSV', pathText=path_txt)
    # #pre.combineCSV()
    # pre.editCSV()
    # #print(pathCSV, pathText)
    # #print(csv_file, txt_file)
    # """ file_path = processingPath('../data')
    # print(file_path) """
    pass
