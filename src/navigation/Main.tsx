import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  { DetailsRacer, Racers, Races } from '../screens';

const MainStackNav = createStackNavigator();

const MainStack = () => {
  return (
    <MainStackNav.Navigator
      initialRouteName="Racers"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF'
        },
      }}>
      <MainStackNav.Screen
        name="Races"
        options={{
          headerShown: false,
        }}
        component={Races}
      />
      <MainStackNav.Screen
        name="DetailsRacer"
        options={{
          headerShown: false,
        }}
        component={DetailsRacer}
      />
      <MainStackNav.Screen
        name="Racers"
        options={{
          headerShown: false,
        }}
        component={Racers}
      />

    </MainStackNav.Navigator>
  );
};

export default MainStack;