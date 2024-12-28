import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const NewsDetailScreen = ({ route }: any) => {
  const { newsItem } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: newsItem.image }} style={styles.image} />
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.description}>{newsItem.description}</Text>
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
