import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function MyCampaignsScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>My Campaigns</Text>
      <Text style={styles.sub}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },
  title: {
    ...theme.typography.cardTitle,
    color: theme.colors.text,
  },
  sub: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
}));
