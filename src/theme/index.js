import { extendTheme } from "native-base";
import { LinearGradient } from "react-native-svg";




export const customTheme = extendTheme({
    colors: {
      bgColorPrimary:{
        900:"#00205F",
      },
      bgColorSecondary:{
        100:"#B75B83",
        900:"#B75B83",
       
      },
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: '#007AB8',
        700: '#006BA1',
        800: '#005885',
        900: '#003F5E',
      },
      amber: {
        400: '#d97706',
      },
    },

  });

  export const config = {
    dependencies: {
        'linear-gradient': LinearGradient
      }
}