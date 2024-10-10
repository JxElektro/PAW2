// src/screens/EditPetProfile.tsx

import React, { useState } from 'react';
import { View, ScrollView, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updatePetProfile } from '../store/petSlice';

import BasicInfoForm from '../components/BasicInfoForm';
// Importa los demás componentes de formulario

const EditPetProfile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pets, selectedPetId } = useSelector((state: RootState) => state.pets);
  const pet = selectedPetId ? pets[selectedPetId] : null;

  const [profileData, setProfileData] = useState<PetProfile>(pet?.perfil || { basicInfo: {} as BasicInfo });

  const handleSave = () => {
    if (selectedPetId) {
      dispatch(updatePetProfile({ id: selectedPetId, profile: profileData }));
      // Navegar de regreso o mostrar confirmación
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

  return (
    <ScrollView>
      <BasicInfoForm basicInfo={profileData.basicInfo} onChange={handleBasicInfoChange} />
      {/* Agrega los demás formularios de secciones */}
      <Button title="Guardar" onPress={handleSave} />
    </ScrollView>
  );
};

export default EditPetProfile;
