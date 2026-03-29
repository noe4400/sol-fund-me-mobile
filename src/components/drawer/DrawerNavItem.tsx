import { Pressable, type PressableStateCallbackType, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export type DrawerNavItemProps = {
  focused: boolean;
  label: string;
  onPress: () => void;
};

export function DrawerNavItem({ focused, label, onPress }: DrawerNavItemProps) {
  styles.useVariants({ navState: focused ? 'active' : 'idle' });

  return (
    <View style={styles.navRowTrack}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{ selected: focused }}
        onPress={onPress}
        style={styles.navRowPressable}
      >
        <Text style={styles.navRowLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  navRowTrack: {
    minHeight: 40,
    borderRadius: 10,
    overflow: 'hidden',
    variants: {
      navState: {
        active: {
          backgroundColor: theme.colors.chipActiveBg,
        },
        idle: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
  navRowPressable: (state: PressableStateCallbackType) => ({
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    paddingLeft: theme.spacing.md - 4,
    paddingVertical: theme.spacing.sm,
    opacity: state.pressed ? 0.85 : 1,
  }),
  navRowLabel: {
    ...theme.typography.drawerNav,
    variants: {
      navState: {
        active: {
          color: theme.colors.primary,
        },
        idle: {
          color: theme.colors.drawerItemInactive,
        },
      },
    },
  },
}));
