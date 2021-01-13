
# import glob
# import time


# def processing(path):
#     path_file = glob.glob(path)
#     print(len(path_file))
#     start = time.time()
#     for file in path_file:
#         #print(file)
#         with open(file, mode='r') as f:
#             content = f.readlines()
#             #print(content)
#             try:
#                 if content[0] != '\n':
#                     content = ['\n'] + content
#             except IndexError:
#                 pass
            
#         with open(file, 'w+') as fi:
#             fi.write("".join(content))
                
#     print("Done in {}".format(time.time() - start))

# def checkBreak(path):
#     path_files = glob.glob(path)
#     for path in path_files:
#         with open(path, 'r') as f:
#             content = f.readlines()
#             print(path)
#             try:
#                 if content[0] != '\n':
#                     return False
#             except IndexError:
#                 continue
#     return True
# if __name__ == "__main__":
#     path = "/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/raw_dataset1/*.txt"
#     processing(path)
#     print('File dat chuan' if checkBreak(path) else 'File khong dat yeu cau')
# """ 
# Ghep CSV
# """
# """ import pandas as pd
# import glob
# import numpy as np
# path = 'new_CSV.csv'
# print(path)
# new_title = np.array([])
# new_source = np.array([])

# names = []
# for p in path:
#     name = p.split('/')[-1].split('.')[0]
#     print(name)
#     names.append(name)
#     df = pd.read_csv(p)
#     cur_title = np.array(df['Titles'])
#     cur_Source = np.array(df['Sources'])
#     new_title = np.append(new_title, cur_title, axis=0)
#     new_source = np.append(new_source, cur_Source, axis=0)
# with open('order.txt', 'w+') as f:
#     f.write(", ".join(names))
# df_new = pd.DataFrame({'Titles': new_title, 'Sources': new_source, 'File_name': new_fileName})
# df_new.to_csv('new_CSV.csv', header=True, index=None) """

# """ 
# Edit CSV
# """
# import pandas as pd
# import glob
# import numpy as np

# def strip(str):
#     new = str.split()
#     #print(new)
#     return " ".join(new)

# def editCSV(path_csv, path_txt):
#     df = pd.read_csv(path_csv)
#     #titles = np.array(list(map(strip,df['Titles'])))
#     print(df)
#     name = [""] * len(df['Titles'])
#     #name = np.array(['']*len(df['Titles']))
#     folder_txt = glob.glob(path_txt)
#     for file_txt in folder_txt:
#         with open(file_txt,'r') as f:
#             name_file = file_txt.split('/')[-1]
#             #print(name_file)
#             content = f.readlines()
#             print(file_txt)
#             title = content[1].replace('\n','').strip()
#             #print(title)
#             #print(title)
#             try:
#                 index = df[titles == title].index[0]
#             except:
#                 continue
#             name[index] = name_file
#     #print(len(name))
#     new_df = pd.DataFrame({'Files name': name, 'Titles': titles, 'Sources': df['Sources']})
#     new_df.to_csv('Source_new.csv', header=True, index=None)
#     print('Done')
    
# if __name__ == '__main__':
#     path_csv = 'new_CSV.csv'
#     path_txt = '/media/lahai/DATA/Study/DAI_HOC/NamBa/query/lib/Flask/model/raw_dataset1/*.txt'
#     editCSV(path_csv, path_txt)