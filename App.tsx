import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryDetailScreen from './screens/components/categories/CategoryDetailScreen';
import NewsDetailScreen from './screens/components/news/NewsDetailScreen';
import BottomTabNavigator from 'screens/components/utils/BottomTabNavigator';
import LoginScreen from 'screens/components/auth/LoginScreen';
import SplashScreen from 'screens/components/utils/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Main: undefined;
  CategoryDetail: { categoryName: string }; 
  NewsDetail: { Name: string };

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} options={{ title: 'Detalle de Categoría' }} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: 'Detalle de Noticia' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
