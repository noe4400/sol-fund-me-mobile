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

/** Primary CTA gradient — Figma node 3:1692 (e.g. “New Campaign”). */
const gradients = {
  primary: ['#AD46FF', '#F6339A'] as const,
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
