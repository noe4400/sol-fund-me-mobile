import { useAppFonts } from './src/hooks/useAppFonts';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function App() {
  const { ready } = useAppFonts();

  if (!ready) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.wordmark}>SolFundMe</Text>
      <Text style={styles.body}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  wordmark: {
    ...theme.typography.wordmark,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  body: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
}));
