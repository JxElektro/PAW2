// src/screens/PetProfile.tsx

import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updatePetProfileWithAI } from '../store/petSlice';
import { globalStyles } from '../styles/globalStyles';
import { colors, fonts } from '../styles/theme'; // Importar correctamente

const PetProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pets, selectedPetId } = useSelector((state: RootState) => state.pets);
  const pet = selectedPetId ? pets[selectedPetId] : null;

  // Simulación de uso de IA
  const handleAIUpdate = () => {
    const aiGeneratedProfile = {
      nombre: 'Fluffy',  // Ejemplo de perfil generado por IA
      especie: 'Perro',
      raza: 'Golden Retriever',
      edad: 3,
      sexo: 'Macho',
      color: 'Dorado',
      // Puedes agregar más campos según sea necesario
    };
    
    if (selectedPetId) {
      dispatch(updatePetProfileWithAI({ id: selectedPetId, aiGeneratedProfile }));
    }
  };

  if (!pet) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>No pet selected</Text>
      </View>
    );
  }

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>{pet.perfil.basicInfo.nombre}'s Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={globalStyles.text}>Species: {pet.perfil.basicInfo.especie}</Text>
        <Text style={globalStyles.text}>Breed: {pet.perfil.basicInfo.raza}</Text>
        <Text style={globalStyles.text}>Age: {pet.perfil.basicInfo.edad}</Text>
        <Text style={globalStyles.text}>Sex: {pet.perfil.basicInfo.sexo}</Text>
        <Text style={globalStyles.text}>Color: {pet.perfil.basicInfo.color}</Text>
        {/* Puedes agregar más campos aquí */}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Actualizar con IA" onPress={handleAIUpdate} color={colors.primary} />
        <Button title="Editar Perfil Manualmente" onPress={() => {/* Lógica para editar manualmente */}} color={colors.primary} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 100,
  },
});

export default PetProfile;
