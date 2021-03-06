import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppAuth, AppLoading} from 'expo'
import {useFonts, Anton_400Regular, Fondamento_400Regular,Vidaloka_400Regular } from "@expo-google-fonts/dev"

import Routes from './src/router'

export default function App() {

  let [fontsLoaded] = useFonts({
    Anton_400Regular, 
    Fondamento_400Regular,
    Vidaloka_400Regular
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