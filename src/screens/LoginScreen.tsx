import React from 'react'
import {
  View,
  Alert,
  StyleSheet,
  Button as ReactNativeButton,
} from 'react-native'
import { signInWithGoogle } from '../services/auth'
// import { Button } from '../components/Button'
import { COLORS } from '../constants/theme'

export const LoginScreen = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      Alert.alert('Ошибка входа', (error as Error).message)
    }
  }

  return (
    <View style={styles.container}>
      <ReactNativeButton
        title="Войти через Google (Стандартная)"
        onPress={handleGoogleLogin}
        color={COLORS.primary}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,
  },
  // button: {
  //   width: '100%',
  //   maxWidth: 300,
  // },
})
