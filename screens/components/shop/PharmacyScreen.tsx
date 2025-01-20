import * as React from "react";
import { View, Image, Text, StyleSheet, FlatList } from "react-native";
import { Product } from "./ProductTypes";
import { SearchBar } from "./SearchBar";
import { ProductList } from "./ProductCard";

const popularProducts: Product[] = [
    {
        id: "1",
        name: "Panadol",
        price: 15.99,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/804605e31adc45205668c9a30cec2b795a6afc29d473ad3a07c6acda0918af3b?apiKey=e23fbbafd7764bd3b578c2664d446f9d&"
      },
      {
        id: "2",
        name: "OBH Combi",
        price: 9.99,
        oldPrice: 10.99,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/36c5d418cae8ee3a3c2abc489b97079519023f8fa62809ab534f02328600d33a?apiKey=e23fbbafd7764bd3b578c2664d446f9d&"
      },
      {
        id: "3",
        name: "Bodrex Herbal",
        price: 7.99,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c2bc3ddb146d30f57fcf1db68ade68d110e052d253be60bad4c38dbef2c4b52?apiKey=e23fbbafd7764bd3b578c2664d446f9d&"
      },
      {
        id: "4",
        name: "Konidin",
        price: 5.99,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/86dc33835301d17ede17caa8e24998f5c36d3296ef26c30fbfbccb7d99b98359?apiKey=e23fbbafd7764bd3b578c2664d446f9d&"
      },
      {
        id: "5",
        name: "Betadine",
        price: 6.99,
        oldPrice: 8.99,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c2bc3ddb146d30f57fcf1db68ade68d110e052d253be60bad4c38dbef2c4b52?apiKey=e23fbbafd7764bd3b578c2664d446f9d&"
      },
      {
        id: "6",
        name: "Bodrexin",
        price: 7.99,
        oldPrice: 8.99,
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/86dc33835301d17ede17caa8e24998f5c36d3296ef26c30fbfbccb7d99b98359?apiKey=e23fbbafd7764bd3b578c2664d446f9d&"
      }

];

export const PharmacyScreen: React.FC = () => {
  const renderHeader = () => (
    <>
      <SearchBar />
      <View style={styles.prescriptionBanner}>
        <View style={styles.prescriptionContent}>
          <Text style={styles.prescriptionTitle}>
            Order quickly with Prescription
          </Text>
          <Text style={styles.prescriptionButton}>Upload Prescription</Text>
        </View>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a05df07ecfcff01ac47158abef955370be8188a4629122bae62b32839eb86aee?apiKey=e23fbbafd7764bd3b578c2664d446f9d&" }}
          style={styles.prescriptionImage}
        />
      </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Product</Text>
        <Text style={styles.seeAllLink}>See all</Text>
      </View>
    </>
  );

  return (
    <FlatList
      data={popularProducts}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.productsGrid}
      renderItem={({ item }) => (
        <View style={styles.productWrapper}>
          <ProductList products={[item]} />
        </View>
      )}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingTop: 12,
    paddingBottom: 27,
  },
  prescriptionBanner: {
    borderRadius: 10,
    marginTop: 25,
    paddingLeft: 25,
    flexDirection: "row",
    backgroundColor: "rgba(64, 124, 226, 1)",
  },
  prescriptionContent: {
    flex: 1,
    justifyContent: "center",
  },
  prescriptionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 25,
  },
  prescriptionButton: {
    color: "white",
    fontSize: 12,
    marginTop: 21,
  },
  prescriptionImage: {
    width: 146,
    aspectRatio: 1.08,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(34, 31, 31, 1)",
  },
  seeAllLink: {
    fontSize: 12,
    color: "rgba(64, 124, 226, 1)",
  },
  productsGrid: {
    justifyContent: "space-between",
  },
  productWrapper: {
    width: "48%",
    marginBottom: 16,
  },
});
