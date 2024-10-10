import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Community: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community</Text>
      {/* Add community features here */}
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

export default Community;