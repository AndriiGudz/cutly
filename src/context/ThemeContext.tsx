import React, { createContext, useContext, useState } from 'react'
import { COLORS } from '../constants/theme'

interface ThemeContextType {
  isDarkMode: boolean
  toggleTheme: () => void
  colors: typeof COLORS
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const colors = {
    ...COLORS,
    background: isDarkMode ? '#000000' : COLORS.background,
    text: isDarkMode ? '#FFFFFF' : COLORS.text,
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
