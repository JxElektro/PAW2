// src/components/BasicInfoForm.tsx

import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface BasicInfoFormProps {
  basicInfo: BasicInfo;
  onChange: (field: keyof BasicInfo, value: any) => void;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ basicInfo, onChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={basicInfo.nombre}
        onChangeText={(text) => onChange('nombre', text)}
      />
      {/* Repite para los demás campos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 5,
  },
});

export default BasicInfoForm;
