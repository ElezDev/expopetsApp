import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import color from "../../src/constant/color";

const Category = () => {
  return (
    <View style={{ marginTop: 25 }}>
      <Text style={styles.title}>Explorar</Text>
      <View style={styles.row}>
        <Button
          image={require("../../src/asset/category/aves.png")}
          label="Aves"
        />
        <Button
          image={require("../../src/asset/category/dog.png")}
          label="Perros"
        />
        <Button
          image={require("../../src/asset/category/cat.png")}
          label="Gatos"
        />
        <Button
          image={require("../../src/asset/category/chameleon.png")}
          label="Reptiles"
        />
      </View>
      <View style={styles.row}>
        <Button
          image={require("../../src/asset/category/fish.png")}
          label="Peces"
        />
        <Button
          image={require("../../src/asset/category/rat.png")}
          label="Roedores"
        />
        <Button
          image={require("../../src/asset/category/1.png")}
          label="Otros"
        />
        <Button2 />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  title: {
    color: color.primaryColor,
    fontSize: 20,
    fontWeight: "700",
  },
  row: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 18,
  },
  buttonLabel: {
    marginTop: 8,
    fontSize: 12,
    color: color.primaryColor,
    textAlign: "center",
  },
});

interface ButtonProps {
  image: any;
  label: string;
}

const Button = ({ image, label }: ButtonProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { height: 0.2, width: 0.2 },
          elevation: 1,
          padding: 12,
          borderRadius: 20,
          backgroundColor: color.white,
          height: 60,
          width: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={image}
          style={{
            width: 35,
            height: 35,
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
};

const Button2 = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={{
          borderRadius: 20,
          backgroundColor: color.secondaryColor,
          height: 60,
          width: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: color.white, fontSize: 14 }}>Ver todas</Text>
      </TouchableOpacity>
      <Text style={styles.buttonLabel}>Ver todas</Text>
    </View>
  );
};
