import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';

import styles from './Detail.style';

const DetailCard = ({props}) => {
  console.log(props);
  return (
    <View>
      <Image style={styles.image} source={{uri: props.strMealThumb}} />
      <Text style={styles.title}>{props.strMeal}</Text>
      <Text style={styles.text}>{props.strArea}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.instructions}>{props.strInstructions}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(props.strYoutube);
        }}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );
};
export default DetailCard;
