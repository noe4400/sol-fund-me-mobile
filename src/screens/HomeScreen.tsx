import { GradientText } from '../components/home/GradientText';
import { HOME_ASSETS } from '../components/home/homeAssets';
import { IconMenuButton } from '../components/ui/IconMenuButton';
import { OutlineTextButton } from '../components/ui/OutlineTextButton';
import { PrimaryGradientButton } from '../components/ui/PrimaryGradientButton';
import { StatCell } from '../components/ui/StatCell';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import type { RootDrawerParamList } from '../navigation/types';

const HEADER_BASE_H = 64;

export default function HomeScreen() {
  const { theme } = useUnistyles();
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <LinearGradient
            colors={[...theme.gradients.heroBackdrop]}
            locations={[0, 0.5, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroBackdrop}
          />
          <View style={styles.heroInner}>
            <View style={styles.poweredBadge}>
              <Image
                source={{ uri: HOME_ASSETS.solanaBadgeIcon }}
                style={styles.poweredIcon}
                accessibilityIgnoresInvertColors
              />
              <Text style={styles.poweredLabel}>Powered by Solana Blockchain</Text>
            </View>

            <GradientText
              style={styles.marketingTitle}
              colors={theme.gradients.headlineText}
            >
              Crowdfunding for the Web3 Era
            </GradientText>

            <Text style={styles.marketingSubtitle}>
              Fast, transparent, and borderless fundraising. Start your campaign or support causes
              that matter - all powered by Solana.
            </Text>

            <View style={styles.ctaRow}>
              <PrimaryGradientButton title="Start a Campaign" />
              <OutlineTextButton title="Explore Campaigns" />
            </View>

            <View style={styles.statGrid}>
              <View style={styles.statRow}>
                <StatCell value="2,547" label="Campaigns Funded" compact />
                <StatCell value="45.8K" label="Total Backers" compact />
              </View>
              <View style={styles.statRow}>
                <StatCell value="156K SOL" label="Raised" />
                <StatCell value="<1s" label="Avg Transaction" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <View style={styles.brandRow}>
            <LinearGradient
              colors={[...theme.gradients.primary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.logoMark}
            >
              <Text style={styles.logoGlyph}>◎</Text>
            </LinearGradient>
            <GradientText style={styles.brandWordmark} colors={theme.gradients.brandText}>
              SolFundMe
            </GradientText>
          </View>
          <IconMenuButton onPress={() => navigation.openDrawer()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: HEADER_BASE_H + rt.insets.top,
    paddingBottom: theme.spacing.xxl,
  },
  heroSection: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.heroSectionBorder,
    overflow: 'hidden',
  },
  heroBackdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  heroInner: {
    paddingTop: theme.spacing.xxl,
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.xl,
    gap: theme.spacing.xxl,
  },
  poweredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.radii.pill,
    backgroundColor: theme.colors.poweredBadgeBg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.poweredBadgeBorder,
  },
  poweredIcon: {
    width: 16,
    height: 16,
  },
  poweredLabel: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.15,
    color: theme.colors.primary,
  },
  marketingTitle: {
    ...theme.typography.marketingHeadline,
    textAlign: 'center',
    color: theme.colors.text,
  },
  marketingSubtitle: {
    ...theme.typography.marketingBody,
    textAlign: 'center',
    color: theme.colors.textSecondary,
  },
  ctaRow: {
    gap: theme.spacing.md,
  },
  statGrid: {
    gap: theme.spacing.lg,
  },
  statRow: {
    flexDirection: 'row',
    gap: theme.spacing.lg,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    paddingTop: rt.insets.top,
    backgroundColor: theme.colors.headerBar,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.headerBarBorder,
  },
  headerInner: {
    minHeight: HEADER_BASE_H,
    paddingHorizontal: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  logoMark: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoGlyph: {
    ...theme.typography.symbol,
    color: theme.colors.text,
  },
  brandWordmark: {
    ...theme.typography.wordmark,
  },
}));
