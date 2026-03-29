import { GradientText } from '../components/home/GradientText';
import { IconMenuButton } from '../components/ui/IconMenuButton';
import { OutlineTextButton } from '../components/ui/OutlineTextButton';
import { PrimaryGradientButton } from '../components/ui/PrimaryGradientButton';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  type PressableStateCallbackType,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

import type { RootDrawerParamList } from '../navigation/types';

const HEADER_BASE_H = 64;

export default function StartCampaignScreen() {
  const { theme } = useUnistyles();
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back to home"
          onPress={() => navigation.navigate('Explore')}
          style={styles.backLink}
        >
          <Ionicons name="chevron-back" size={16} color={theme.colors.primary} />
          <Text style={styles.backLinkText}>Back to home</Text>
        </Pressable>

        <View style={styles.hero}>
          <LinearGradient
            colors={[...theme.gradients.primary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroIconCircle}
          >
            <Ionicons name="rocket-outline" size={28} color="#FFFFFF" />
          </LinearGradient>
          <Text style={styles.heroTitle}>Start Your Campaign</Text>
          <Text style={styles.heroSubtitle}>
            Launch your fundraising campaign on Solana blockchain
          </Text>
        </View>

        <View style={styles.formCard}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Campaign Title *</Text>
            <TextInput
              style={styles.input}
              placeholder="Give your campaign a clear, concise title"
              placeholderTextColor={theme.colors.inputPlaceholder}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Short Description *</Text>
            <TextInput
              style={styles.input}
              placeholder="Brief description of your campaign (1-2 sentences)"
              placeholderTextColor={theme.colors.inputPlaceholder}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Category *</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Select category"
              onPress={() => {}}
              style={styles.selectTrigger}
            >
              <Text style={styles.selectPlaceholder}>Select a category</Text>
              <Ionicons name="chevron-down" size={16} color={theme.colors.textSecondary} />
            </Pressable>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Funding Goal (SOL) *</Text>
            <TextInput
              style={styles.input}
              placeholder="100"
              placeholderTextColor={theme.colors.inputPlaceholder}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Campaign Duration (days) *</Text>
            <TextInput
              style={styles.input}
              placeholder="30"
              placeholderTextColor={theme.colors.inputPlaceholder}
            />
            <Text style={styles.fieldHint}>Maximum 90 days</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Campaign Story *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Tell your story. Why are you raising funds? How will the money be used? What impact will it have?"
              placeholderTextColor={theme.colors.inputPlaceholder}
              multiline
              textAlignVertical="top"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Campaign Image</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Upload campaign image"
              onPress={() => {}}
              style={styles.uploadZone}
            >
              <Ionicons name="cloud-upload-outline" size={48} color={theme.colors.textSecondary} />
              <Text style={styles.uploadPrimary}>Click to upload or drag and drop</Text>
              <Text style={styles.uploadSecondary}>PNG, JPG up to 10MB</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>🔒 Blockchain Transparency</Text>
          <Text style={styles.infoBody}>
            Your campaign will be deployed to the Solana blockchain. All donations are transparent and
            traceable. Platform fees: 2.5% + blockchain transaction costs.
          </Text>
        </View>

        <View style={styles.actions}>
          <PrimaryGradientButton
            title="Launch Campaign"
            iconName="rocket-outline"
            accessibilityLabel="Launch campaign"
            onPress={() => {}}
          />
          <OutlineTextButton
            title="Cancel"
            accessibilityLabel="Cancel and go back"
            onPress={() => navigation.navigate('Explore')}
          />
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
    paddingTop: HEADER_BASE_H + rt.insets.top + theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    paddingBottom: rt.insets.bottom + theme.spacing.xxl,
    gap: theme.spacing.xl,
  },
  backLink: (state: PressableStateCallbackType) => ({
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    alignSelf: 'flex-start',
    opacity: state.pressed ? 0.75 : 1,
  }),
  backLinkText: {
    ...theme.typography.subtitle,
    color: theme.colors.primary,
  },
  hero: {
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  heroIconCircle: {
    width: 64,
    height: 64,
    borderRadius: theme.radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    ...theme.typography.hero,
    color: theme.colors.text,
    textAlign: 'center',
  },
  heroSubtitle: {
    ...theme.typography.subtitle,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    maxWidth: 340,
  },
  formCard: {
    backgroundColor: theme.colors.surface,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
    borderRadius: 14,
    padding: theme.spacing.lg + 1,
    gap: theme.spacing.lg,
  },
  field: {
    gap: theme.spacing.xs,
  },
  fieldLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.15,
    color: theme.colors.drawerItemInactive,
  },
  input: {
    minHeight: 36,
    borderRadius: theme.radii.sm,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.formInputBorder,
    backgroundColor: theme.colors.formInputBackground,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    ...theme.typography.subtitle,
    color: theme.colors.text,
  },
  textArea: {
    minHeight: 200,
    paddingTop: theme.spacing.sm,
  },
  fieldHint: {
    ...theme.typography.caption,
    color: theme.colors.textMuted,
    marginTop: theme.spacing.xxs,
  },
  selectTrigger: (state: PressableStateCallbackType) => ({
    minHeight: 36,
    borderRadius: theme.radii.sm,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.formInputBorder,
    backgroundColor: theme.colors.formInputBackground,
    paddingHorizontal: theme.spacing.sm + 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: state.pressed ? 0.88 : 1,
  }),
  selectPlaceholder: {
    ...theme.typography.button,
    color: theme.colors.inputPlaceholder,
  },
  uploadZone: (state: PressableStateCallbackType) => ({
    minHeight: 195,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: theme.colors.formInputBorder,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.xl,
    gap: theme.spacing.sm,
    opacity: state.pressed ? 0.88 : 1,
  }),
  uploadPrimary: {
    ...theme.typography.subtitle,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  uploadSecondary: {
    ...theme.typography.caption,
    color: theme.colors.textMuted,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: theme.colors.poweredBadgeBg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.poweredBadgeBorder,
    borderRadius: 14,
    padding: theme.spacing.lg + 1,
    gap: theme.spacing.xs,
  },
  infoTitle: {
    ...theme.typography.cardTitle,
    color: theme.colors.text,
  },
  infoBody: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    maxWidth: 320,
  },
  actions: {
    gap: theme.spacing.md,
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
