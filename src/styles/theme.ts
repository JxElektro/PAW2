// src/styles/theme.ts

import { processFontFamily } from "expo-font";

export const colors = {
  primary: '#4A90E2', // Azul moderno
  secondary: '#50E3C2', // Verde suave
  background: '#F5F7FA', // Fondo claro
  surface: '#FFFFFF', // Superficies
  error: '#E94F37', // Rojo para errores
  text: '#333333', // Texto principal
  muted: '#888888', // Texto secundario
};

export const fonts = {
  regular: 'Roboto_400Regular',
  bold: 'Roboto_700Bold',
  fontSizeSmall: 14,
  fontSizeMedium: 16,
  fontSizeLarge: 24,
  fontWeightRegular: '400',
  fontWeightBold: '700',
  processFontFamily: processFontFamily,
  fontFamily: 'Roboto',
  
};
