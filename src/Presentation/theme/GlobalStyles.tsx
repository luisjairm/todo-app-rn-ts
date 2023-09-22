import { StyleSheet } from 'react-native'
import { ThemeApp } from './AppTheme'

const GlobalStyles = StyleSheet.create({
  containerScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: ThemeApp.BRIGHT_BLUE
  }
})

export default GlobalStyles

interface GenerateShadowProps {
  shadowColor?: `#${string}`
}
export const generateShadow = ({ shadowColor }: GenerateShadowProps) => {
  const styles = StyleSheet.create({
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,

      elevation: 5
    }
  })

  return styles.shadow
}
