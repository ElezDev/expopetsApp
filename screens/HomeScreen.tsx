import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import BASE_URL from '../src/Config/config';

type Persona = {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: string;
  email: string;
  biography: string;
  image_url: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  persona: Persona[];
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}user_data`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data.user);
      } catch (error) {
        Alert.alert('Error', 'No se pudo obtener la información del usuario');
        navigation.replace('Login');
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.replace('Login');
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando datos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      {userData ? (
        <View style={styles.card}>
          <Text style={styles.infoText}>Nombre: {userData.name}</Text>
          <Text style={styles.infoText}>Email: {userData.email}</Text>
          {userData.persona.length > 0 && (
            <View>
              <Text style={styles.infoText}>
                Nombre Completo: {userData.persona[0].first_name} {userData.persona[0].last_name}
              </Text>
              <Text style={styles.infoText}>Teléfono: {userData.persona[0].phone_number}</Text>
              <Text style={styles.infoText}>Dirección: {userData.persona[0].address}</Text>
              <Text style={styles.infoText}>Biografía: {userData.persona[0].biography}</Text>
            </View>
          )}
        </View>
      ) : (
        <Text>No se encontraron datos del usuario.</Text>
      )}
      <Button title="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomeScreen;
