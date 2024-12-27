import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PetsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mascotas</Text>
      {/* Aquí puedes agregar la información sobre mascotas */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PetsScreen;
