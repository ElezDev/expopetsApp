import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './ProfileScreen';
import PetsScreen from './PetsScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

interface CustomTabBarLabelProps {
  focused: boolean;
  title: string;
}

const CustomTabBarLabel: React.FC<CustomTabBarLabelProps> = ({ focused, title }) => (
  <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
    {title}
  </Text>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Pets') {
            iconName = focused ? 'paw' : 'paw-outline';
          }

          return <Ionicons name={iconName as string} size={size} color={color} />;
        },
        tabBarLabel: ({ focused }) => (
          <CustomTabBarLabel focused={focused} title={route.name} />
        ),
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#553B9C',
        tabBarInactiveTintColor: 'gray',
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Pets" component={PetsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    height: 70,
    paddingBottom: 10,
  },
  tabLabel: {
    fontSize: 12,
    color: 'gray',
  },
  tabLabelFocused: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#553B9C',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default BottomTabNavigator;
