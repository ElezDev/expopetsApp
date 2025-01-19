import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from "react-native-deck-swiper";
import axios from "axios";
import BASE_URL from "src/Config/config";
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const PetsScreen = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPets = async () => {
    try {
      const response = await axios.get(`${BASE_URL}all_pets`);
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleSwipeAll = () => {
    setLoading(true);
    fetchPets();
  };

  const renderCard = (item:any) => (
    <LinearGradient
      colors={["#553B9C", "#FF9B55"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <Image source={{ uri: item.images[0]?.image_url }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.petName}>{item.name}, {item.age}</Text>
        <Text style={styles.petBreed}>{item.breed}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={20} color="#F6F4FB" />
          <Text style={styles.petLocation}>{item.location}</Text>
        </View>
        <Text style={styles.owner}>Publicado por: {item.user.name}</Text>
      </View>
    </LinearGradient>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF9B55" />
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#150339", "#553B9C"]}
      style={styles.container}
    >
      <Text style={styles.title}>Mascotas Disponibles</Text>
      {pets.length > 0 ? (
        <Swiper
          cards={pets}
          renderCard={renderCard}
          backgroundColor="transparent"
          stackSize={3}
          onSwipedAll={handleSwipeAll}  
        />
      ) : (
        <Text style={styles.noMoreText}>No hay más publicaciones disponibles</Text>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    backgroundColor: "#150339",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#F6F4FB",
    textAlign: "center",
    marginVertical: 15,
    fontFamily: 'Poppins',
  },
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 8,
    width: width * 0.9,
    height: height * 0.7,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 20,
  },
  cardContent: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  petName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F6F4FB",
    fontFamily: 'Poppins',
  },
  petBreed: {
    fontSize: 18,
    color: "#F6F4FB",
    marginVertical: 5,
    fontFamily: 'Poppins',
  },
  petLocation: {
    fontSize: 16,
    color: "#FF9B55",
    marginLeft: 8,
    fontFamily: 'Poppins',
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  owner: {
    fontSize: 14,
    color: "#F6F4FB",
    marginTop: 5,
    fontFamily: 'Poppins',
  },
  noMoreText: {
    fontSize: 18,
    color: "#F6F4FB",
    textAlign: "center",
    marginTop: 20,
    fontFamily: 'Poppins',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#150339",
  },
});

export default PetsScreen;
