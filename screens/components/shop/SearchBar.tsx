import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/b523a3623bef9c011784f4e7362baec25e191a33212cb9d8e53d4099a34dc6e1?apiKey=e23fbbafd7764bd3b578c2664d446f9d&" }}
        style={styles.searchIcon}
      />
      
      <View style={styles.searchText}>
        <Text>Search for products</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderRadius: 32,
    borderColor: "rgba(64, 124, 226, 0.39)",
    borderStyle: "solid",
    borderWidth: 1,
    display: "flex",
    paddingHorizontal: 25,
    paddingVertical: 11,
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  searchIcon: {
    width: 18,
    aspectRatio: 1,
  },
  searchText: {
 
  },
});