import glob
import pandas as pd
import os
import openpyxl
i=0
os.chdir("11")
all_filenames = [i for i in glob.glob('*.{}'.format('xlsm'))]
for filename in all_filenames:
    data = pd.read_excel(filename, index_col=0, header=0)
    data.insert(9,'label',i)
    i = i+1
    df = pd.DataFrame(data)
    df.to_csv('combined.csv', mode='a',header=None)