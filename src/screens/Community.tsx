// src/screens/Community.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { colors, fonts } from '../styles/theme';
import { MaterialIcons } from '@expo/vector-icons';

const Community: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Comunidad Pawa</Text>
      
      {/* Sección de Foros */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="forum" size={24} color={colors.primary} />
          <Text style={styles.sectionTitle}>Foros</Text>
        </View>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Consejos de Entrenamiento</Text>
          <Text style={styles.cardDescription}>Aprende las mejores técnicas para entrenar a tu mascota.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Salud y Bienestar</Text>
          <Text style={styles.cardDescription}>Comparte y recibe consejos sobre la salud de tu mascota.</Text>
        </TouchableOpacity>
      </View>

      {/* Sección de Eventos */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <MaterialIcons name="event" size={24} color={colors.primary} />
          <Text style={styles.sectionTitle}>Eventos</Text>
        </View>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Feria de Mascotas</Text>
          <Text style={styles.cardDescription}>Únete a nuestra feria anual de mascotas este sábado.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Taller de Grooming</Text>
          <Text style={styles.cardDescription}>Aprende técnicas de grooming profesional.</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fonts.fontSizeLarge,
    fontWeight: fonts.fontWeightBold,
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: fonts.fontFamily,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: fonts.fontSizeMedium,
    fontWeight: fonts.fontWeightBold,
    color: colors.primary,
    marginLeft: 10,
    fontFamily: fonts.fontFamily,
  },
  card: {
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: fonts.fontSizeMedium,
    fontWeight: fonts.fontWeightBold,
    color: colors.textPrimary,
    marginBottom: 5,
    fontFamily: fonts.fontFamily,
  },
  cardDescription: {
    fontSize: fonts.fontSizeSmall,
    color: colors.textSecondary,
    fontFamily: fonts.fontFamily,
  },
});

export default Community;
