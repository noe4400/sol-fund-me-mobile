import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import type { ComponentProps } from 'react';
import { Pressable, Text, type PressableProps, type PressableStateCallbackType, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

type PrimaryGradientButtonProps = Pick<PressableProps, 'onPress' | 'accessibilityLabel' | 'disabled'> & {
  title: string;
  /** Unistyles `size` variant on the gradient container. */
  size?: 'md' | 'sm';
  /** Optional leading icon (e.g. `rocket-outline` on Launch Campaign). */
  iconName?: ComponentProps<typeof Ionicons>['name'];
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
      layout: {
        labelOnly: {},
        withIcon: {
          flexDirection: 'row',
          gap: theme.spacing.sm,
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
  iconName,
  onPress,
  accessibilityLabel,
  disabled,
}: PrimaryGradientButtonProps) {
  styles.useVariants({ size, layout: iconName ? 'withIcon' : 'labelOnly' });
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
        {iconName ? (
          <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <Ionicons name={iconName} size={16} color={theme.colors.onPrimary} />
          </View>
        ) : null}
        <Text style={styles.label}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}
