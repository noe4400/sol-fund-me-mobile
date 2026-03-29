// Tokens aligned with Figma MCP export — file VHqfCXoOjFj42qnY6o9H7a, node 3:1692 (My Campaigns Screen).

/** PostScript names must match keys in `figmaFontSources` (hooks/useAppFonts.ts). */
export const fontFamilies = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
  /** Figma lists Noto Sans next to Inter for the ◎ glyph (header mark). */
  notoRegular: 'NotoSans_400Regular',
} as const;

const f = fontFamilies;

const radii = {
  xs: 6,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

/** Primary CTA gradient — Figma (My Campaigns / Home CTAs). */
const gradients = {
  primary: ['#AD46FF', '#F6339A'] as const,
  /** Home hero H1 — node 3:672 / 3:936 */
  headlineText: ['#FFFFFF', '#E9D4FF', '#FCCEE8'] as const,
  /** Header wordmark — node 3:971 */
  brandText: ['#C27AFF', '#FB64B6'] as const,
  /** Hero section ambience — node 3:928 */
  heroBackdrop: ['rgba(89, 22, 139, 0.2)', 'rgba(3, 7, 18, 0)', 'rgba(134, 16, 67, 0.2)'] as const,
} as const;

const category = {
  medical: '#EC4899',
  business: '#F97316',
  education: '#A855F7',
  community: '#3B82F6',
  emergency: '#C4B5FD',
} as const;

/** Typography sizes/weights from the same Figma export (Tailwind → RN). */
const figmaTypography = {
  hero: {
    fontFamily: f.bold,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0.4,
  },
  subtitle: {
    fontFamily: f.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.31,
  },
  wordmark: {
    fontFamily: f.bold,
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: -0.45,
  },
  symbol: {
    fontFamily: f.notoRegular,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: -0.44,
  },
  cardTitle: {
    fontFamily: f.semiBold,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: -0.44,
  },
  body: {
    fontFamily: f.regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.15,
  },
  emphasis: {
    fontFamily: f.semiBold,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.15,
  },
  tab: {
    fontFamily: f.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.15,
  },
  badge: {
    fontFamily: f.medium,
    fontSize: 12,
    lineHeight: 16,
  },
  caption: {
    fontFamily: f.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    fontFamily: f.medium,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.15,
  },
  /** Home marketing — node 3:672 */
  marketingHeadline: {
    fontFamily: f.bold,
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0.37,
  },
  marketingBody: {
    fontFamily: f.regular,
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: -0.44,
  },
  statValue: {
    fontFamily: f.bold,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0.4,
  },
  statLabel: {
    fontFamily: f.regular,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.15,
  },
  drawerNav: {
    fontFamily: f.regular,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.31,
  },
} as const;

export const darkTheme = {
  colors: {
    background: '#030712',
    surface: 'rgba(30, 41, 57, 0.5)',
    surfaceElevated: '#1C2128',
    border: 'rgba(173, 70, 255, 0.1)',
    borderSubtle: '#21262D',
    text: '#FAFAFA',
    textSecondary: '#99A1AF',
    textMuted: '#6A7282',
    primary: '#C27AFF',
    primaryStrong: '#AD46FF',
    onPrimary: '#171717',
    progressTrack: 'rgba(250, 250, 250, 0.2)',
    progressFill: '#FAFAFA',
    chipActiveBg: 'rgba(173, 70, 255, 0.2)',
    chipInactiveBg: 'transparent',
    chipInactiveBorder: '#30363D',
    headerBar: 'rgba(16, 24, 40, 0.8)',
    headerBarBorder: '#000000',
    heroSectionBorder: 'rgba(173, 70, 255, 0.2)',
    poweredBadgeBg: 'rgba(173, 70, 255, 0.1)',
    poweredBadgeBorder: 'rgba(173, 70, 255, 0.2)',
    statCardSurface: 'rgba(30, 41, 57, 0.3)',
    secondaryCtaSurface: '#0A0A0A',
    secondaryCtaBorder: 'rgba(173, 70, 255, 0.3)',
    /** Drawer — Figma node 19:2216 */
    drawerBackground: '#101828',
    drawerBorder: 'rgba(173, 70, 255, 0.2)',
    drawerItemInactive: '#D1D5DC',
    drawerOverlay: 'rgba(0, 0, 0, 0.5)',
    overlay: 'rgba(0,0,0,0.45)',
    danger: '#EF4444',
    success: '#22C55E',
    category,
  },
  gradients,
  radii,
  spacing,
  fonts: fontFamilies,
  typography: figmaTypography,
} as const;

export const lightTheme = {
  colors: {
    background: '#F4F6F8',
    surface: '#FFFFFF',
    surfaceElevated: '#FFFFFF',
    border: '#E5E7EB',
    borderSubtle: '#F3F4F6',
    text: '#111827',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',
    primary: '#9333EA',
    primaryStrong: '#C026D3',
    onPrimary: '#FFFFFF',
    progressTrack: '#E5E7EB',
    progressFill: '#9333EA',
    chipActiveBg: '#9333EA',
    chipInactiveBg: '#FFFFFF',
    chipInactiveBorder: '#E5E7EB',
    headerBar: 'rgba(255, 255, 255, 0.92)',
    headerBarBorder: '#E5E7EB',
    heroSectionBorder: 'rgba(147, 51, 234, 0.2)',
    poweredBadgeBg: 'rgba(147, 51, 234, 0.08)',
    poweredBadgeBorder: 'rgba(147, 51, 234, 0.25)',
    statCardSurface: 'rgba(243, 244, 246, 0.95)',
    secondaryCtaSurface: '#FFFFFF',
    secondaryCtaBorder: 'rgba(147, 51, 234, 0.35)',
    drawerBackground: '#FFFFFF',
    drawerBorder: 'rgba(147, 51, 234, 0.2)',
    drawerItemInactive: '#4B5563',
    drawerOverlay: 'rgba(17, 24, 39, 0.4)',
    overlay: 'rgba(17,24,39,0.35)',
    danger: '#DC2626',
    success: '#16A34A',
    category,
  },
  gradients,
  radii,
  spacing,
  fonts: fontFamilies,
  typography: figmaTypography,
} as const;

export const themes = { light: lightTheme, dark: darkTheme } as const;

export const breakpoints = {
  xs: 0,
  sm: 390,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;
