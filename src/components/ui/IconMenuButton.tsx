import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, type PressableProps, type PressableStateCallbackType } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

type IconMenuButtonProps = Pick<PressableProps, 'onPress' | 'accessibilityLabel'>;

const styles = StyleSheet.create((theme) => ({
  pressable: (state: PressableStateCallbackType) => ({
    width: 36,
    height: 36,
    borderRadius: theme.radii.sm,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: state.pressed ? 0.88 : 1,
  }),
}));

export function IconMenuButton({ onPress, accessibilityLabel }: IconMenuButtonProps) {
  const { theme } = useUnistyles();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? 'Open menu'}
      onPress={onPress}
      style={styles.pressable}
    >
      <Ionicons
        name="menu-outline"
        size={20}
        color={theme.colors.textSecondary}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      />
    </Pressable>
  );
}
