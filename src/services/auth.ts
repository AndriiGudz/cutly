import { supabase } from '../lib/supabase'
import * as WebBrowser from 'expo-web-browser'

// Укажи корректный redirectTo (для анонимного аккаунта)
const redirectTo = 'https://auth.expo.io/@andriigudz/cutly'

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })

  if (error) {
    console.error('Ошибка входа через Google:', error.message)
    throw error
  }

  if (data?.url) {
    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo)
    console.log('OAuth result:', result)
  }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error) throw error
  return user
}
