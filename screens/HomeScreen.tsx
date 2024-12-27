import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import HeadLine from "./components/HeadLine";
import Category from "./components/Category";
import Doctor from "./components/Doctor";

const Home = () => {
  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
        paddingTop: 10,
        marginTop: Platform.OS === "ios" ? 0 : 30,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Search />
      <HeadLine />
      <Category />
      <Doctor />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});