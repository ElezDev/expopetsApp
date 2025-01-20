import * as React from 'react';
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Product } from './ProductTypes';

interface ProductCardProps {
  products: Product[];
}

export const ProductList: React.FC<ProductCardProps> = ({ products }) => {
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productContainer}>
      <Image
        resizeMode="contain"
        source={{ uri: item.imageUrl }}
        style={styles.productImage}
      />
      <View style={styles.productName}>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.priceContainer}>
        <View style={styles.priceWrapper}>
          <Text style={styles.currentPrice}>${item.price}</Text>
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  productContainer: {
    borderRadius: 11,
    borderColor: "rgba(64, 124, 226, 0.12)",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: 10,
  },
  productImage: {
    alignSelf: "center",
    width: 74,
    aspectRatio: 1,
  },
  productName: {
    marginTop: 20,
    fontSize: 12,
    fontFamily: "Poppins, sans-serif",
  },
  priceContainer: {
    display: "flex",
    marginTop: 15,
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceWrapper: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  currentPrice: {
    fontSize: 14,
    color: "rgba(34, 31, 31, 1)",
  },
  oldPrice: {
    fontSize: 8,
    color: "rgba(34, 31, 31, 0.6)",
    textDecorationLine: "line-through",
  },
  addButton: {
    backgroundColor: "rgba(64, 124, 226, 1)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

