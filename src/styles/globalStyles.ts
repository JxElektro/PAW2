// src/styles/globalStyles.ts

import { StyleSheet } from 'react-native';
import { colors, fonts } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary,
    marginLeft: 10,
    fontFamily: fonts.bold,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  mutedText: {
    color: colors.muted,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
});
