import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type StatDensity = 'compact' | 'tall';

type StatCellProps = {
  value: string;
  label: string;
  compact?: boolean;
};

const styles = StyleSheet.create((theme) => ({
  card: (density: StatDensity) => ({
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: theme.spacing.md + 0.5,
    paddingTop: theme.spacing.md + 0.5,
    backgroundColor: theme.colors.statCardSurface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
    alignItems: 'center',
    ...(density === 'compact'
      ? { minHeight: 93, paddingBottom: theme.spacing.sm }
      : {
          minHeight: 129,
          paddingBottom: theme.spacing.sm,
          justifyContent: 'flex-start' as const,
        }),
  }),
  value: {
    ...theme.typography.statValue,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  label: {
    ...theme.typography.statLabel,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
}));

export function StatCell({ value, label, compact }: StatCellProps) {
  const density: StatDensity = compact ? 'compact' : 'tall';
  return (
    <View style={styles.card(density)}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
