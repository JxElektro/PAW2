// src/screens/EditPetProfile.tsx

import React, { useState } from 'react';
import { ScrollView, Button, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updatePetProfile } from '../store/petSlice';
import BasicInfoForm from '../components/BasicInfoForm';
import SleepInfoForm from '../components/SleepInfoForm';
import BehaviorForm from '../components/BehaviorForm';
import BehaviorSummary from '../components/BehaviorSummary';
import { BehaviorProvider } from '../context/BehaviorContext';
import { colors, fonts } from '../styles/theme'; // Importar correctamente

const EditPetProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pets, selectedPetId } = useSelector((state: RootState) => state.pets);
  const pet = selectedPetId ? pets[selectedPetId] : null;

  const [profileData, setProfileData] = useState<PetProfile>(pet?.perfil || { basicInfo: {} as BasicInfo });

  const handleSave = () => {
    if (selectedPetId) {
      dispatch(updatePetProfile({ id: selectedPetId, profile: profileData }));
      // Navegar de regreso o mostrar confirmación
      // Por ejemplo: navigation.goBack();
    }
  };

  const handleBasicInfoChange = (field: keyof BasicInfo, value: any) => {
    setProfileData({
      ...profileData,
      basicInfo: {
        ...profileData.basicInfo,
        [field]: value,
      },
    });
  };

  const handleSleepInfoChange = (field: keyof SleepInfo, value: any) => {
    setProfileData({
      ...profileData,
      sleepInfo: {
        ...profileData.sleepInfo,
        [field]: value,
      },
    });
  };

  const handleBehaviorChange = (field: keyof BehaviorProfile, value: any) => {
    setProfileData({
      ...profileData,
      behaviorProfile: {
        ...profileData.behaviorProfile,
        [field]: value,
      },
    });
  };

  return (
    <BehaviorProvider>
      <ScrollView style={styles.container}>
        <Text style={styles.headerTitle}>Editar Perfil de Mascota</Text>
        <BasicInfoForm basicInfo={profileData.basicInfo} onChange={handleBasicInfoChange} />
        <SleepInfoForm sleepInfo={profileData.sleepInfo} onChange={handleSleepInfoChange} />
        <BehaviorForm />
        <BehaviorSummary />
        {/* Agrega los demás formularios de secciones */}
        <View style={styles.buttonContainer}>
          <Button title="Guardar" color={colors.primary} onPress={handleSave} />
        </View>
      </ScrollView>
    </BehaviorProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default EditPetProfile;
