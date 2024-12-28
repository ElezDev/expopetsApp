import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";

const NewsDetailScreen = ({ route }: any) => {
  const { newsItem } = route.params;

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: newsItem.image }}
        style={styles.image}
        entering={FadeInUp.duration(800)}
      />
      <Animated.Text style={styles.title} entering={FadeIn.duration(1000)}>
        {newsItem.title}
      </Animated.Text>
      <Animated.Text
        style={styles.description}
        entering={FadeIn.delay(300).duration(1200)}
      >
        {newsItem.description}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
});

export default NewsDetailScreen;
