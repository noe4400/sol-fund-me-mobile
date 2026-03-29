import type { AppIdentity } from '@wallet-ui/react-native-web3js';
import { clusterApiUrl } from '@solana/web3.js';

/** MWA chain id — see https://docs.solanamobile.com/get-started/react-native/setup */
export const SOLANA_MWA_CHAIN = 'solana:devnet' as const;

export const SOLANA_RPC_ENDPOINT = clusterApiUrl('devnet');

/** Shown in the wallet authorization sheet (icon path is relative to `uri`). */
export const APP_WALLET_IDENTITY: AppIdentity = {
  name: 'SolFundMe',
  uri: 'https://solfund.me',
  icon: 'icon.png',
};
