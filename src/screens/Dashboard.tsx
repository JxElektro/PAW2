import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootState } from '../store';
import { selectPet } from '../store/petSlice';

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
              <Text>{pet.perfil.nombre}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AIBitacora' as never)}
      >
        <Icon name="plus" size={20} color="white" />
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  petItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default Dashboard;