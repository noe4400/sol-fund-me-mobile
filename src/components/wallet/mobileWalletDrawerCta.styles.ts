import { type PressableStateCallbackType } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const walletDrawerCtaStyles = StyleSheet.create((theme) => ({
  block: {
    gap: theme.spacing.sm,
  },
  connectedBlock: {
    gap: theme.spacing.sm,
  },
  addressHint: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  walletCta: (state: PressableStateCallbackType) => ({
    borderRadius: theme.radii.sm,
    overflow: 'hidden',
    opacity: state.pressed ? 0.85 : 1,
  }),
  walletGradient: {
    minHeight: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
  },
  walletLabel: {
    ...theme.typography.button,
    color: theme.colors.onPrimary,
  },
}));
