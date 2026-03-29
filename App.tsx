import { MobileWalletProvider } from '@wallet-ui/react-native-web3js';
import { NavigationContainer } from '@react-navigation/native';

import { useAppFonts } from './src/hooks/useAppFonts';
import { RootDrawer } from './src/navigation/RootDrawer';
import {
  APP_WALLET_IDENTITY,
  SOLANA_MWA_CHAIN,
  SOLANA_RPC_ENDPOINT,
} from './src/solana/mobileWalletConfig';

export default function App() {
  const { ready } = useAppFonts();

  if (!ready) {
    return null;
  }

  return (
    <MobileWalletProvider
      chain={SOLANA_MWA_CHAIN}
      endpoint={SOLANA_RPC_ENDPOINT}
      identity={APP_WALLET_IDENTITY}
    >
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>
    </MobileWalletProvider>
  );
}
