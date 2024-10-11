// src/slices/petsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PetsState, PetState, PetProfile } from '../types/PetProfile';

const initialState: PetsState = {
  pets: {},
  selectedPetId: null,
};

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    addPet: (state, action: PayloadAction<{ id: string; pet: PetState }>) => {
      state.pets[action.payload.id] = action.payload.pet;
      if (!state.selectedPetId) {
        state.selectedPetId = action.payload.id;
      }
    },
    updatePetProfile: (state, action: PayloadAction<{ id: string; profile: Partial<PetProfile> }>) => {
      if (state.pets[action.payload.id]) {
        state.pets[action.payload.id].perfil = {
          ...state.pets[action.payload.id].perfil,
          ...action.payload.profile,
        };
      }
    },
    updatePetProfileWithAI: (state, action: PayloadAction<{ id: string; aiGeneratedProfile: Partial<PetProfile> }>) => {
      if (state.pets[action.payload.id]) {
        state.pets[action.payload.id].perfil = {
          ...state.pets[action.payload.id].perfil,
          ...action.payload.aiGeneratedProfile,
        };
      }
    },
    selectPet: (state, action: PayloadAction<string>) => {
      state.selectedPetId = action.payload;
    },
  },
});

export const { addPet, updatePetProfile, updatePetProfileWithAI, selectPet } = petsSlice.actions;

export default petsSlice.reducer;
