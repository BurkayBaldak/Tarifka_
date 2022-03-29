import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({props, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onSelect}>
        <ImageBackground
          borderRadius={15}
          style={styles.image}
          source={{uri: props.strMealThumb}}>
          <Text numberOfLines={1} style={styles.title}>
            {props.strMeal}
          </Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default MealCard;
