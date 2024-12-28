import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'; // Importar hook para navegación
import color from "../../src/constant/color";

const Category = () => {
  const navigation = useNavigation(); // Inicializar hook de navegación

  // Función para manejar la navegación a la pantalla de detalle
  const handleCategoryPress = (categoryName: string) => {
    navigation.navigate('CategoryDetail' , { categoryName }); 
    // Navegar a la pantalla de detalle
  };

  return (
    <View style={{ marginTop: 25 }}>
      <Text style={styles.title}>Explorar</Text>
      <View style={styles.row}>
        <Button
          image={require("../../src/asset/category/aves.png")}
          label="Aves"
          onPress={() => handleCategoryPress("Aves")} // Pasar la categoría seleccionada
        />
        <Button
          image={require("../../src/asset/category/dog.png")}
          label="Perros"
          onPress={() => handleCategoryPress("Perros")}
        />
        <Button
          image={require("../../src/asset/category/cat.png")}
          label="Gatos"
          onPress={() => handleCategoryPress("Gatos")}
        />
        <Button
          image={require("../../src/asset/category/chameleon.png")}
          label="Reptiles"
          onPress={() => handleCategoryPress("Reptiles")}
        />
      </View>
      <View style={styles.row}>
        <Button
          image={require("../../src/asset/category/fish.png")}
          label="Peces"
          onPress={() => handleCategoryPress("Peces")}
        />
        <Button
          image={require("../../src/asset/category/rat.png")}
          label="Roedores"
          onPress={() => handleCategoryPress("Roedores")}
        />
        <Button
          image={require("../../src/asset/category/1.png")}
          label="Otros"
          onPress={() => handleCategoryPress("Otros")}
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
  onPress: () => void;  // Añadir propiedad onPress para manejar la navegación
}

const Button = ({ image, label, onPress }: ButtonProps) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        onPress={onPress} // Llamar la función onPress cuando se haga clic
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
