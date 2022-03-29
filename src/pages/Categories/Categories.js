import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import LottieView from 'lottie-react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';

function Categorires({navigation}) {
  const {loading, data, error} = useFetch(Config.API_URL);

  function sendCategory(category) {
    navigation.navigate('MealsPage', {category});
  }

  const renderCategory = ({item}) => {
    return (
      <CategoryCard
        props={item}
        onSelect={() => sendCategory(item.strCategory)}
      />
    );
  };
  if (loading) {
    return <ActivityIndicator size={'large'} color="blue" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <FlatList
      style={{backgroundColor: 'orange'}}
      data={data.categories}
      renderItem={renderCategory}
    />
  );
}
export default Categorires;
