import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppAuth, AppLoading} from 'expo'
import {useFonts, Anton_400Regular} from "@expo-google-fonts/anton"
// import {useFonts, nomedaminhafont} from "@expo-google-fonts/(Nomedafont)"

import Routes from './src/router'

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular, 
    // (nomedaminhafont)
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar style="light" backgroundColor='#000' />
      <Routes/>
    </>
  );
}