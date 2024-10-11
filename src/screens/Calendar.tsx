// src/screens/Calendar.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../styles/theme';
import { Calendar } from 'react-native-calendars';

const CalendarScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendario</Text>
      <Calendar
        // Configuración básica del calendario
        style={styles.calendar}
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.surface,
          textSectionTitleColor: colors.primary,
          selectedDayBackgroundColor: colors.secondary,
          selectedDayTextColor: '#ffffff',
          todayTextColor: colors.primary,
          dayTextColor: colors.primary,
          textDisabledColor: colors.secondary,
          arrowColor: colors.primary,
          monthTextColor: colors.primary,
          indicatorColor: colors.secondary,
          textDayFontFamily: fonts.regular, // Corregido el uso de la fuente
          textMonthFontFamily: fonts.bold, // Corregido el uso de la fuente
          textDayHeaderFontFamily: fonts.regular,
          textDayFontWeight: '400', // Valor correcto para fontWeight
          textMonthFontWeight: '700', // Valor correcto para fontWeight
          textDayHeaderFontWeight: '400', // Valor correcto para fontWeight
          textDayFontSize: fonts.fontSizeSmall,
          textMonthFontSize: fonts.fontSizeMedium,
          textDayHeaderFontSize: fonts.fontSizeSmall,
        }}
      />
      {/* Agrega funcionalidades adicionales como marcar eventos */}
    </View>
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
    fontWeight: '700', // Cambié el valor a una cadena válida
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: fonts.bold, // Corregido el uso de la fuente
  },
  calendar: {
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
});

export default CalendarScreen;
