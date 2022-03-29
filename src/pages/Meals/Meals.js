import React from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import axios from 'axios';
import styles from './Meals.style';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

function Meal({route, navigation}) {
  const {category} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_MEALS}${category}`);

  function sendMeals(meals) {
    navigation.navigate('DetailsPage', {meals});
  }

  const renderMeals = ({item}) => {
    return <MealCard props={item} onSelect={() => sendMeals(item.idMeal)} />;
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return <FlatList data={data.meals} renderItem={renderMeals} />;
}
export default Meal;
