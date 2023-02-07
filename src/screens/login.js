import { View, Text, Image, TextInput, StyleSheet, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/button';
import Input from '../components/input';
import {signInWithEmailAndPassword}  from "firebase/auth";
import { auth } from '../../App';
// import {signInWithEmailAndPassword}  from "firebase/auth";
// import { auth } from '../../App';
// import { auth } from './backup';


export default function Login({navigation}) {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")


  const login=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(res=>{
        console.log("login success-------------------------------")
        console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })

  }
  return (
      <SafeAreaView style={{flex:1}}>
          <Image source={require("../../assets/login.png")}
          style={{alignSelf:'center'}}
          />
          <Text style={{fontSize:18, fontWeight:'bold', textAlign:'center'}}>
            Never forget your Password.
          </Text>
          <View style={{paddingHorizontal:16, paddingVertical:25}}>
              <Input placeholder='Email Addres' autoCapitalize={"none"} onChangeText={(text)=>setEmail(text)}/>
              <Input placeholder='Fassword' secureTextEntry onChangeText={(text)=>setPassword(text)}/>
                <Button onPress={login} title={"Login"} customStyles={{alignSelf:"center", marginTop:60, width:'100%'}}/>
                
          </View>
      </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  input:{
    height:48,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
    marginBottom:25
  }
})