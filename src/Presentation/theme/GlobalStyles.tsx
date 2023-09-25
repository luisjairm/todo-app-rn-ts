import { StyleSheet } from 'react-native'
import { ThemeApp } from './AppTheme'

const GlobalStyles = StyleSheet.create({
  containerScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: ThemeApp.BRIGHT_BLUE
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  label: {
    color: ThemeApp.WHITE,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5
  }
})

export default GlobalStyles
