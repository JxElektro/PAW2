// src/components/BehaviorSummary.tsx

import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
//import { BehaviorContext } from '../context/BehaviorContext';
import { generateBehaviorSummary } from '../utils/ai';
import { colors, fonts } from '../styles/theme';
import { globalStyles } from '../styles/globalStyles';

const BehaviorSummary: React.FC = () => {
  //const { behaviors } = useContext(BehaviorContext);
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const behaviors = [
    { comportamiento: 'Comportamiento 1' },
    { comportamiento: 'Comportamiento 2' },
    { comportamiento: 'Comportamiento 3' },
  ];

  useEffect(() => {
    const fetchSummary = async () => {
      if (behaviors.length > 0) {
        setLoading(true);
        try {
          const generatedSummary = await generateBehaviorSummary(behaviors);
          setSummary(generatedSummary);
        } catch (error) {
          console.error(error);
          Alert.alert('Error', 'Hubo un problema al generar el resumen de comportamiento.');
        }
        setLoading(false);
      }
    };
    fetchSummary();
  }, [behaviors]);

  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.text}>Resumen de Comportamiento:</Text>
      {loading ? (
        <ActivityIndicator size="small" color={colors.primary} />
      ) : (
        <Text style={styles.summaryText}>{summary || 'No hay datos para generar un resumen.'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  summaryText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.text,
    fontFamily: fonts.regular,
  },
});

export default BehaviorSummary;
