import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions} from 'react-native';
import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAI7R4Pc5HLymCAM210vfwIJpjbHpUycBk",
  authDomain: "localization-26a20.firebaseapp.com",
  databaseURL: "https://localization-26a20-default-rtdb.firebaseio.com",
  projectId: "localization-26a20",
  storageBucket: "localization-26a20.appspot.com",
  messagingSenderId: "995184331129",
  appId: "1:995184331129:web:ed4d25f5ac938fdc7b87a8",
  measurementId: "G-18XB5HZXHS"
};

initializeApp(firebaseConfig);

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
export default function App() {
  const coordinates = [{x:170, y:200}, {x:250, y:200},{x:260, y:255}, {x:170, y:500}, {x:70, y:470}, {x:30, y:520}]
  const [place, setPlace] = useState([])
  useEffect(() => {
    const fun = () => {
      const db = getDatabase();
      const reference = ref(db, "label");
      onValue(reference, (snapshot) => {
        const label = snapshot.val();
        console.log(label);
        if (label == 6)
        {
          setPlace(coordinates[0])
        }
        else if (label == 0) 
        {
          setPlace(coordinates[1])
        }
      });
    };

    fun();
  }, []);
  return (
    <View>
			<View style={{position:'relative'}}>
				<Image 
				style={{width: width, height: height, position:'absolute'}}
				source={require('./assets/SBME1.jpeg')}
				/>
					<View style={{borderRadius:10,width:14,height:14,backgroundColor:'red',top: place.y, left: place.x, position:'absolute'}}>
					</View>
        		</View>
		</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
