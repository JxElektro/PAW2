// src/screens/Dashboard.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../styles/theme'; // Importar correctamente
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { selectPet } from '../store/petSlice';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { pets, selectedPetId } = useSelector((state: RootState) => state.pets);

  const handlePetSelect = (id: string) => {
    dispatch(selectPet(id));
    navigation.navigate('PetProfile' as never);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Bienvenido a Pawa</Text>
      
      {Object.keys(pets).length === 0 ? (
        <Text style={styles.message}>Aún no tienes mascotas registradas. ¡Vamos a agregar tu primera mascota!</Text>
      ) : (
        <View>
          <Text style={styles.subtitle}>Tus mascotas:</Text>
          {Object.entries(pets).map(([id, pet]) => (
            <TouchableOpacity key={id} style={styles.petItem} onPress={() => handlePetSelect(id)}>
              <Text style={styles.petName}>{pet.perfil.basicInfo.nombre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AIBitacora' as never)}
      >
        <MaterialIcons name="add" size={20} color="white" />
        <Text style={styles.addButtonText}>
          Agregar {Object.keys(pets).length === 0 ? 'tu primera mascota' : 'nueva mascota'}
        </Text>
      </TouchableOpacity>

      {/* Add more dashboard content here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  message: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 10,
    fontFamily: fonts.bold,
  },
  petItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.muted,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: colors.surface,
  },
  petName: {
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.regular,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
    fontFamily: fonts.bold,
  },
});

export default Dashboard;
