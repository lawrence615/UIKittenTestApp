import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'screens/HomeScreen'
import DetailsScreen from 'screens/DetailsScreen'

const AppNavigator = () => {

  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator headerMode='none'>
        <Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Screen name='Details' component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator