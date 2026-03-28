import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { NotoSans_400Regular } from '@expo-google-fonts/noto-sans';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

/**
 * Font map from Figma MCP `get_design_context` — node 3:1692 (My Campaigns Screen).
 * Family: Inter (Bold / Semi Bold / Medium / Regular). Noto Sans Regular is a Figma fallback for the ◎ mark.
 */
const figmaFontSources = {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  NotoSans_400Regular,
};

export function useAppFonts() {
  const [fontsLoaded, fontError] = useFonts(figmaFontSources);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      void SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const ready = fontsLoaded || fontError != null;

  return { fontsLoaded, fontError, ready };
}

export { figmaFontSources };
