import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PetProfile {
  nombre: string;
  especie: string;
  raza: string;
  edad: string;
  sexo: string;
  color: string;
}

interface PetState {
  perfil: PetProfile;
}

interface PetsState {
  pets: Record<string, PetState>;
  selectedPetId: string | null;
}

const initialState: PetsState = {
  pets: {},
  selectedPetId: null
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
        state.pets[action.payload.id].perfil = { ...state.pets[action.payload.id].perfil, ...action.payload.profile };
      }
    },
    selectPet: (state, action: PayloadAction<string>) => {
      state.selectedPetId = action.payload;
    },
  },
});

export const { addPet, updatePetProfile, selectPet } = petsSlice.actions;

export default petsSlice.reducer;