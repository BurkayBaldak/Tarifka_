import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({props, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.strCategoryThumb}} />
        <Text style={styles.title}>{props.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CategoryCard;
