// src/components/BasicInfoForm.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, fonts } from '../styles/theme'; // Importar correctamente

interface BasicInfoFormProps {
  basicInfo: BasicInfo;
  onChange: (field: keyof BasicInfo, value: any) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ basicInfo, onChange }) => {
  const [errors, setErrors] = useState<{ [key in keyof BasicInfo]?: string }>({});

  const validateField = (field: keyof BasicInfo, value: any) => {
    let error = '';
    switch(field) {
      case 'nombre':
        if (!value) error = 'El nombre es requerido.';
        break;
      case 'especie':
        if (!value) error = 'La especie es requerida.';
        break;
      case 'edad':
        if (isNaN(value) || value <= 0) error = 'La edad debe ser un número positivo.';
        break;
      case 'sexo':
        if (!['Macho', 'Hembra'].includes(value)) error = 'El sexo debe ser Macho o Hembra.';
        break;
      case 'color':
        if (!value) error = 'El color es requerido.';
        break;
      // Añade más validaciones según sea necesario
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof BasicInfo, value: any) => {
    onChange(field, value);
    validateField(field, value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.nombre}
        onChangeText={(text) => handleChange('nombre', text)}
        placeholder="Ej. Firulais"
        placeholderTextColor="#888"
      />
      {errors.nombre && <Text style={styles.errorText}>{errors.nombre}</Text>}

      <Text style={styles.label}>Especie:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.especie}
        onChangeText={(text) => handleChange('especie', text)}
        placeholder="Ej. Perro"
        placeholderTextColor="#888"
      />
      {errors.especie && <Text style={styles.errorText}>{errors.especie}</Text>}

      <Text style={styles.label}>Raza:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.raza}
        onChangeText={(text) => handleChange('raza', text)}
        placeholder="Ej. Labrador Retriever"
        placeholderTextColor="#888"
      />
      {errors.raza && <Text style={styles.errorText}>{errors.raza}</Text>}

      <Text style={styles.label}>Edad:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.edad.toString()}
        onChangeText={(text) => handleChange('edad', Number(text))}
        placeholder="Ej. 5"
        keyboardType="numeric"
        placeholderTextColor="#888"
      />
      {errors.edad && <Text style={styles.errorText}>{errors.edad}</Text>}

      <Text style={styles.label}>Sexo:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.sexo}
        onChangeText={(text) => handleChange('sexo', text)}
        placeholder="Macho/Hembra"
        placeholderTextColor="#888"
      />
      {errors.sexo && <Text style={styles.errorText}>{errors.sexo}</Text>}

      <Text style={styles.label}>Color:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.color}
        onChangeText={(text) => handleChange('color', text)}
        placeholder="Ej. Amarillo"
        placeholderTextColor="#888"
      />
      {errors.color && <Text style={styles.errorText}>{errors.color}</Text>}

      <Text style={styles.label}>Marcas Identificativas:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.marcasIdentificativas}
        onChangeText={(text) => handleChange('marcasIdentificativas', text)}
        placeholder="Ej. Mancha blanca en la pata derecha"
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Número de Microchip:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.microchipNumero}
        onChangeText={(text) => handleChange('microchipNumero', text)}
        placeholder="Ej. 1234567890"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  label: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 5,
    fontFamily: fonts.bold,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.muted,
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    fontFamily: fonts.regular,
    backgroundColor: colors.surface,
    color: colors.text,
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.regular,
  },
});

export default BasicInfoForm;
