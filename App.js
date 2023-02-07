import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';
import Home from './src/screens/home';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmtSsUtN_JsJDsOc5CWPfWMWbO_3auuzM",
  authDomain: "dream-house-6089b.firebaseapp.com",
  projectId: "dream-house-6089b",
  storageBucket: "dream-house-6089b.appspot.com",
  messagingSenderId: "799331207340",
  appId: "1:799331207340:web:64e80a455153e4b8613709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

const Stack= createNativeStackNavigator();
const AppTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:'#fff'
  }
}


export default function App() {
  const [user, setUser]=useState(null);


  useEffect(()=>{
    const authSubcription=onAuthStateChanged(auth, (user)=>{
      if(user)
      {
        setUser(user);
      
      }
      else
      {
        setUser(null);
   
      }

    })
    return authSubcription;
  }, [])
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
      {
          user ? (
            <>
              <Stack.Screen name="Home" options={{headerShown:false}}>
                {(props)=> <Home {...props} user={user}/>}
              </Stack.Screen>
              
              {/* <Stack.Screen name="Create" options={{headerShown:false}}>
              {(props)=> <Create {...props} user={user}/>}
              </Stack.Screen>
              <Stack.Screen name="Edit" component={Edit} options={{headerShown:false}}/> */}
            </>

          ):(
            <>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>

            </>
          )
        }
        
             


      </Stack.Navigator>
   
    </NavigationContainer>
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
