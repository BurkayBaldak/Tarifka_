import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';

import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';

import DetailCard from '../../components/DetailCard/DetailCard';

function Details({route}) {
  const {meals} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_DETAILS}${meals}`);

  const renderDetails = ({item}) => {
    return <DetailCard props={item} />;
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return <FlatList data={data.meals} renderItem={renderDetails} />;
}
export default Details;
