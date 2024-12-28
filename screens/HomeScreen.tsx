import React, { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/Header";
import Search from "./components/Search";
import HeadLine from "./components/HeadLine";
import Category from "./components/Category";
import Doctor from "./components/Doctor";

const Home = () => {
  // Animated values for each component
  const headerAnim = useRef(new Animated.Value(0)).current;
  const searchAnim = useRef(new Animated.Value(0)).current;
  const headlineAnim = useRef(new Animated.Value(0)).current;
  const categoryAnim = useRef(new Animated.Value(0)).current;
  const doctorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(headerAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(searchAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(headlineAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(categoryAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(doctorAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={{
          opacity: headerAnim,
          transform: [
            {
              translateY: headerAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0], // Slide from bottom
              }),
            },
          ],
        }}
      >
        <Header />
      </Animated.View>

      <Animated.View
        style={{
          opacity: searchAnim,
          transform: [
            {
              translateY: searchAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Search />
      </Animated.View>

      <Animated.View
        style={{
          opacity: headlineAnim,
          transform: [
            {
              translateY: headlineAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <HeadLine />
      </Animated.View>

      <Animated.View
        style={{
          opacity: categoryAnim,
          transform: [
            {
              translateY: categoryAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Category />
      </Animated.View>

      <Animated.View
        style={{
          opacity: doctorAnim,
          transform: [
            {
              translateY: doctorAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Doctor />
      </Animated.View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: Platform.OS === "ios" ? 0 : 30,
  },
});
