import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Calendar: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      {/* Add calendar functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Calendar;