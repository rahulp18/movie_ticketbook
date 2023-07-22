import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import SeatBookingScreen from './src/screens/SeatBookingScreen';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{animation: 'default'}}
          name="Tab"
          component={TabNavigator}
        />
        <Stack.Screen
          options={{animation: 'slide_from_right'}}
          name="MovieDetails"
          component={MovieDetailsScreen}
        />
        <Stack.Screen
          options={{animation: 'slide_from_bottom'}}
          name="SeatBooking"
          component={SeatBookingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
