import React from 'react';
import { StatusBar } from 'react-native';
import {useFonts} from 'expo-font';

import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {

  const [fontsLoaded] = useFonts({ 
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor = "transparent"
        translucent
      />
      <Routes/>
    </Background> 
  
  );
}

