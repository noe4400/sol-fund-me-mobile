import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, Text, type PressableProps, type PressableStateCallbackType } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

type PrimaryGradientButtonProps = Pick<PressableProps, 'onPress' | 'accessibilityLabel' | 'disabled'> & {
  title: string;
  /** Unistyles `size` variant on the gradient container. */
  size?: 'md' | 'sm';
};

const styles = StyleSheet.create((theme) => ({
  pressable: (state: PressableStateCallbackType) => ({
    alignSelf: 'stretch',
    borderRadius: theme.radii.sm,
    overflow: 'hidden',
    opacity: state.pressed ? 0.88 : 1,
  }),
  gradient: {
    alignItems: 'center',
    justifyContent: 'center',
    variants: {
      size: {
        md: {
          minHeight: 40,
          paddingVertical: 10,
          paddingHorizontal: theme.spacing.xl,
        },
        sm: {
          minHeight: 36,
          paddingVertical: 8,
          paddingHorizontal: theme.spacing.lg,
        },
      },
    },
  },
  label: {
    ...theme.typography.button,
    color: theme.colors.onPrimary,
  },
}));

export function PrimaryGradientButton({
  title,
  size = 'md',
  onPress,
  accessibilityLabel,
  disabled,
}: PrimaryGradientButtonProps) {
  styles.useVariants({ size });
  const { theme } = useUnistyles();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      accessibilityLabel={accessibilityLabel ?? title}
      disabled={disabled}
      onPress={onPress}
      style={styles.pressable}
    >
      <LinearGradient
        colors={[...theme.gradients.primary]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradient}
      >
        <Text style={styles.label}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}
