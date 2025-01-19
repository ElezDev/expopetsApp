import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from 'src/Config/config';
import PetUserScreen from './pestUserScreen';

interface Persona {
  first_name: string;
  last_name: string;
  biography: string;
  image_url: string;
}

interface UserProfile {
  user: {
    name: string;
    email: string;
    persona: Persona[];
  };
}

const ProfileScreen = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}user_data`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancelado'),
          style: 'cancel',
        },
        {
          text: 'Cerrar sesión',
          onPress: async () => {
            await AsyncStorage.removeItem('token');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' as never }],
            });
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (loading) return <Loader />;
  if (!userData) return <ErrorDisplay message="No se pudieron cargar los datos del usuario." />;

  const { name, email, persona } = userData.user;
  const profile = persona[0];

  return (
    <FlatList
      data={[]}
      renderItem={null}
      ListHeaderComponent={
        <ProfileHeader profile={profile} email={email} onLogout={handleLogout} />
      }
      contentContainerStyle={styles.container}
    />
  );
};

const Loader = () => (
  <View style={styles.centeredContainer}>
    <ActivityIndicator size="large" color="#6a1b9a" />
  </View>
);

const ErrorDisplay = ({ message }: { message: string }) => (
  <View style={styles.centeredContainer}>
    <Text style={styles.errorText}>{message}</Text>
  </View>
);

const ProfileHeader = ({
  profile,
  email,
  onLogout,
}: {
  profile: Persona;
  email: string;
  onLogout: () => void;
}) => (
  <View style={styles.profileContainer}>
    <Image source={{ uri: `${profile.image_url}` }} style={styles.profileImage} />
    <Text style={styles.name}>{`${profile.first_name} ${profile.last_name}`}</Text>
    <Text style={styles.email}>{email}</Text>
    <Text style={styles.bio}>{profile.biography}</Text>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Editar Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
    <PetUserScreen />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f5',
    paddingBottom: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 5,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#6a1b9a',
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#6a1b9a',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  editButton: {
    flex: 1,
    backgroundColor: '#ff4081',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 30,
    alignItems: 'center',
  },
  logoutButton: {
    flex: 1,
    backgroundColor: '#00796b',
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
  },
});

export default ProfileScreen;
