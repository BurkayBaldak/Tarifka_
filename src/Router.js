import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categorires from './pages/Categories/Categories';
import Meal from './pages/Meals/Meals';
import Details from './pages/Details/Detail';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categorires}
          options={{title: 'Categories', headerTintColor: 'orange'}}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meal}
          options={{title: 'Meals', headerTintColor: 'orange'}}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Details}
          options={{title: 'Details', headerTintColor: 'orange'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
