import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в Cutly</Text>
      <Text style={styles.subtitle}>
        Ваш персональный AI-помощник по питанию
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
})
