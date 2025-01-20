import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import HomeScreen from 'screens/components/home/HomeScreen';
import ProfileScreen from '../profile/ProfileScreen';
import PetsScreen from '../pets/PetsScreen';
import color from 'src/constant/color';
import CustomHeader from '../navigations/CustomHeader';
import contactScreen from '../contact/contactScreen';
import chatScreen from '../chat/chatScreen';
import { PharmacyScreen } from '../shop/PharmacyScreen';

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
          } else if (route.name === 'Contactos') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Shop') {
            // Cambiado a un icono válido para "Shop"
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return (
            <Animated.View style={[styles.iconContainer, focused && styles.iconFocused]}>
              <Ionicons name={iconName as string} size={size} color={color} />
            </Animated.View>
          );
        },
        tabBarLabel: ({ focused }) => (
          <CustomTabBarLabel focused={focused} title={route.name} />
        ),
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: color.primaryColor,
        tabBarInactiveTintColor: '#A9A9A9',
        header: ({ navigation, route, options }) => (
          <CustomHeader
            title={options.title || route.name}
            showBackButton={false}
            onBackPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pets" component={PetsScreen} />
      <Tab.Screen name="Contactos" component={contactScreen} />
      {/* <Tab.Screen name="Chat" component={chatScreen} /> */}
      <Tab.Screen name="Shop" component={PharmacyScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute', 
    bottom: 4,
    left: 30, 
    right: 30,
    backgroundColor: '#FFFFFFE5', 
    borderRadius: 20, 
    height: 65, 
    paddingBottom: 10, 
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 8, 
    borderWidth: 1, 
    borderColor: '#ECECEC', 
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  iconFocused: {
    backgroundColor: '#F3F2F2FF',
  },
  tabLabel: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  tabLabelFocused: {
    color: color.primaryColor,
    fontWeight: '600',
  },
  header: {
    backgroundColor: color.primaryColor,
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BottomTabNavigator;
