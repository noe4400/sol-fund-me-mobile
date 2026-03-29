import { Pressable, Text, View, type PressableProps, type PressableStateCallbackType } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type OutlineTextButtonProps = Pick<PressableProps, 'onPress' | 'accessibilityLabel' | 'disabled'> & {
  title: string;
  size?: 'md' | 'sm';
};

const styles = StyleSheet.create((theme) => ({
  pressable: (state: PressableStateCallbackType) => ({
    alignSelf: 'stretch',
    borderRadius: theme.radii.sm,
    backgroundColor: theme.colors.secondaryCtaSurface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.secondaryCtaBorder,
    opacity: state.pressed ? 0.88 : 1,
  }),
  inner: {
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
    color: theme.colors.primary,
  },
}));

export function OutlineTextButton({
  title,
  size = 'md',
  onPress,
  accessibilityLabel,
  disabled,
}: OutlineTextButtonProps) {
  styles.useVariants({ size });

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: !!disabled }}
      accessibilityLabel={accessibilityLabel ?? title}
      disabled={disabled}
      onPress={onPress}
      style={styles.pressable}
    >
      <View style={styles.inner}>
        <Text style={styles.label}>{title}</Text>
      </View>
    </Pressable>
  );
}
