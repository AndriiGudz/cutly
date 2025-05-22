// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'
import { Alert } from 'react-native'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL или ключ не определены!');
  const errorMessage =
    'Supabase URL или Anon Key не найдены. Убедитесь, что переменные EXPO_PUBLIC_SUPABASE_URL и EXPO_PUBLIC_SUPABASE_ANON_KEY установлены в .env файле и вы перезапустили сборщик.'
  console.error(errorMessage)
  Alert.alert('Ошибка конфигурации', errorMessage)
  // Можно бросить ошибку, чтобы остановить инициализацию, если это предпочтительнее
  // throw new Error(errorMessage)
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
