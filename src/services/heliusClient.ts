import axios from 'axios';

const DEFAULT_HELIUS_BASE_URL = 'https://mainnet.helius-rpc.com';

const baseURL = process.env.EXPO_PUBLIC_HELIUS_BASE_URL?.trim() || DEFAULT_HELIUS_BASE_URL;
const apiKey = process.env.EXPO_PUBLIC_HELIUS_API_KEY?.trim() ?? '';

if (__DEV__ && !apiKey) {
  console.warn(
    '[helius] EXPO_PUBLIC_HELIUS_API_KEY is missing. Set it in .env (see .env.example).',
  );
}

/**
 * Shared Axios client for Helius HTTP APIs (JSON-RPC and DAS).
 * Query `api-key` is applied on every request, matching Helius URL auth.
 */
export const heliusClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  ...(apiKey ? { params: { 'api-key': apiKey } } : {}),
  timeout: 30_000,
});
