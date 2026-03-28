import { StyleSheet } from 'react-native-unistyles';

import { breakpoints, themes } from './src/theme/solfundme';

StyleSheet.configure({
  themes,
  breakpoints,
  settings: {
    initialTheme: 'dark',
  },
});

declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    light: (typeof themes)['light'];
    dark: (typeof themes)['dark'];
  }
  export interface UnistylesBreakpoints {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }
}
