import React ,{useState} from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';


export  function SignIn() {

  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home');
  }

  return (
    <View style ={styles.container}>
       
      <Image source={IllustrationImg} style={styles.image } resizeMode="stretch"/> 

      <View style= {styles.content}>
          <Text style= {styles.title}>
               Conecte-se{'\n'}
              e organize suas{'\n'}
              jogatinas
          </Text>

          <Text style= {styles.subtitle} >
              Crie grupos para jogar seus games {'\n'}
              favoritos com seus amigos
          </Text>

            <ButtonIcon 
              title = "Entrar Com Discord"
              activeOpacity={0.7}
              onPress={handleSignIn}
           />
        </View>
    </View>
  );
}
/*
import React ,{useState } from "react";
import {View, Text,TextInput,Image} from 'react-native';
import {styles} from './styles';
import IllustrationImg from '../../assets/illustration.png';

export function SignIn(){
  const [text,setText] = useState('');
  return(
    <View style = {styles.container}>
      
        <Image source={IllustrationImg} style={styles.mage }/>

        <View style= {styles.content}>
          <Text style= {styles.title}>
              Organize {'\n'}
              suas jogatinas{'\n'}
              facilmente
          </Text>

          <text style= {styles.subtitle} >
              Crie grupos para jogar seus games {'\n'}
              favoritos com seus amigos
          </text>
        </View>

    </View>
  )

}
*/