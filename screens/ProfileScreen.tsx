import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from '../src/Config/config';

interface UserProfile {
  user: {
    name: string;
    email: string;
    persona: {
      first_name: string;
      last_name: string;
      biography: string;
      image_url: string;
    }[];
  };
}

const ProfileScreen = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}user_data`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No se pudieron cargar los datos del usuario.</Text>
      </View>
    );
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    // navigation.replace('Login');
  };

  const { name, email, persona } = userData.user;
  const profile = persona[0];

  const pets = [
    { id: 1, name: 'Firulais', breed: 'Labrador', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Michi', breed: 'Siames', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <View style={styles.container}>
      {/* Información del Perfil */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: `http://192.168.101.10:8000${profile.image_url}` }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{`${profile.first_name} ${profile.last_name}`}</Text>
        <Text style={styles.email}>{email}</Text>
        <Text style={styles.bio}>{profile.biography}</Text>

        {/* Botones de Interacción */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text onPress={handleLogout}
             style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Publicaciones de Mascotas */}
      <View style={styles.petsContainer}>
        <Text style={styles.sectionTitle}>Mis Mascotas Publicadas</Text>
        <FlatList
          data={pets}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.petCard}>
              <Image source={{ uri: item.image }} style={styles.petImage} />
              <View style={styles.petDetails}>
                <Text style={styles.petName}>{item.name}</Text>
                <Text style={styles.petBreed}>{item.breed}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 25,
    elevation: 3, // Sombra
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 }, // Sombra
    shadowOpacity: 0.1, // Sombra
    shadowRadius: 5, // Sombra
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#4e73df',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  followButton: {
    backgroundColor: '#1cc88a',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  petsContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  petImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  petDetails: {
    flex: 1,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  petBreed: {
    fontSize: 14,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default ProfileScreen;
