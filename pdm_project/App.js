import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Lista from './src/screens/TaskList';
import Cadastro from './src/screens/Register';
import Video from './src/screens/Video';

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lista" component={Lista} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Video" component={Video} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}