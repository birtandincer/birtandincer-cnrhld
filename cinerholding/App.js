import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/index.js';
import CarouselScreen from './src/screens/Carousel/index.js';
import VideoReklamScreen from './src/screens/Video/index.js';
import AssetsScreen from './src/screens/Assets/index.js';
import WebviewScreen from './src/screens/Webview/index.js';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CAROUSEL_AUTO_HEIGHT" component={CarouselScreen} />
        <Stack.Screen name="WEBVIEW_AUTO_HEIGHT" component={WebviewScreen} />
        <Stack.Screen name="VIDEO_REKLAM" component={VideoReklamScreen} />
        <Stack.Screen name="ASSETS" component={AssetsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
