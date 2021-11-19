import React from "react";
import {Text, Image, ScrollView} from 'react-native';
import {styles} from './styles';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { categories } from "../../Utils/categories";
import {Category} from '../Category'

type Props ={
  categorySelected: string;
}

export function CategorySelect({categorySelected} : Props){
    return(
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight:40}}
      >  
      {
        categories.map(category =>(
          <Category
            key={category.id}
            title={category.title}
            icon={category.icon}
            checked={category.id === categorySelected}
          />
        ))
      }
      </ScrollView>    
        
    );
};