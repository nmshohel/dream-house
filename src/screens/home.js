import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'; 
import { signOut } from 'firebase/auth';
import { auth } from '../../App';

export default function Home() {
    const logout=()=>{
        signOut(auth);
    }
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <AntDesign onPress={logout} name="logout" size={24} color="black" />
    </SafeAreaView>
  )
}