import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, type PressableStateCallbackType, Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import type { RootDrawerParamList } from '../../navigation/types';
import { DrawerNavItem } from './DrawerNavItem';

const NAV_ITEMS: { key: keyof RootDrawerParamList; label: string }[] = [
  { key: 'Explore', label: 'Explore' },
  { key: 'StartCampaign', label: 'Start Campaign' },
  { key: 'MyCampaigns', label: 'My Campaigns' },
];

export function SolFundDrawerContent(props: DrawerContentComponentProps) {
  const { theme } = useUnistyles();
  const activeRouteName = props.state.routes[props.state.index]?.name as keyof RootDrawerParamList;

  const navigateTo = (name: keyof RootDrawerParamList) => {
    props.navigation.navigate(name);
    props.navigation.closeDrawer();
  };

  return (
    <View style={styles.wrapper}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.navBlock}>
          {NAV_ITEMS.map((item) => (
            <DrawerNavItem
              key={item.key}
              focused={activeRouteName === item.key}
              label={item.label}
              onPress={() => navigateTo(item.key)}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Connect wallet"
            onPress={() => {}}
            style={styles.walletCta}
          >
            <LinearGradient
              colors={[...theme.gradients.primary]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.walletGradient}
            >
              <Ionicons
                name="wallet-outline"
                size={16}
                color={theme.colors.onPrimary}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
              />
              <Text style={styles.walletLabel}>Connect Wallet</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </DrawerContentScrollView>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Close menu"
        onPress={() => props.navigation.closeDrawer()}
        style={styles.closeBtn}
        hitSlop={8}
      >
        <Text style={styles.closeGlyph}>×</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.drawerBackground,
  },
  scroll: {
    backgroundColor: 'transparent',
  },
  scrollContent: {
    paddingTop: rt.insets.top + theme.spacing.xxl + theme.spacing.md,
    paddingHorizontal: 0,
    paddingBottom: rt.insets.bottom + theme.spacing.md,
    flexGrow: 1,
  },
  navBlock: {
    gap: theme.spacing.sm,
    paddingHorizontal: 0,
    paddingRight: theme.spacing.xl,
  },
  footer: {
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.md + 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: theme.colors.drawerBorder,
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
  closeBtn: (state: PressableStateCallbackType) => ({
    position: 'absolute',
    top: rt.insets.top + theme.spacing.md,
    right: theme.spacing.md,
    zIndex: 2,
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: state.pressed ? 0.85 : 0.7,
  }),
  closeGlyph: {
    color: theme.colors.textSecondary,
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '300',
  },
}));
