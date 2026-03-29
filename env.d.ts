/// <reference types="expo/types" />

declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_HELIUS_BASE_URL?: string;
    EXPO_PUBLIC_HELIUS_API_KEY?: string;
  }
}
