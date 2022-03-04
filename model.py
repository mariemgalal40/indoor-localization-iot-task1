from firebase import firebase
from time import sleep as s 
import numpy as np
import pandas as pd
from sklearn.svm import SVC

firebase = firebase.FirebaseApplication("hhttps://localization-26a20-default-rtdb.firebaseio.com/", None)
data = pd.read_csv("combined.csv",header=0)

X = np.array(data.iloc[:, 1:10])
Y = np.array(data.iloc[:, 10])

classifier = SVC()
classifier.fit(X, Y)

## e=[[-58 ,-68 ,-00 ,-65 ,-35 ,-64 ,-92 ,-78 ,-73 ]] #for test
while True:
    try:
        result= firebase.get('/RSSI/',None)

        data_firebase= np.array(result.split()).astype('int')
        test=[[0,0,0,0,0,0,0,0,0]]
            
        for x in range(len(data_firebase)):
            test[0][x]=data_firebase[x]

            

        predict =(np.array(classifier.predict(test))).tolist()
        label=predict[0]
        firebase.put('','label',label)

        print(label)
        s(3)
    except:
      pass