import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updatePetProfileWithAI } from '../store/petSlice';
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
      edad: '3 años',
      sexo: 'Macho',
      color: 'Dorado',
    };
    
    if (selectedPetId) {
      dispatch(updatePetProfileWithAI({ id: selectedPetId, aiGeneratedProfile }));
    }
  };

  if (!pet) {
    return (
      <View style={styles.container}>
        <Text>No pet selected</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{pet.perfil.nombre}'s Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoItem}>Species: {pet.perfil.especie}</Text>
        <Text style={styles.infoItem}>Breed: {pet.perfil.raza}</Text>
        <Text style={styles.infoItem}>Age: {pet.perfil.edad}</Text>
        <Text style={styles.infoItem}>Sex: {pet.perfil.sexo}</Text>
        <Text style={styles.infoItem}>Color: {pet.perfil.color}</Text>
      </View>
      <Button title="Actualizar con IA" onPress={handleAIUpdate} />
      <Button title="Editar Perfil Manualmente" onPress={() => {/* Lógica para editar manualmente */}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PetProfile;
