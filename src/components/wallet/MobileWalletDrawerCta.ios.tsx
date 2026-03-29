import Ionicons from '@expo/vector-icons/Ionicons';
import { useMobileWallet } from '@wallet-ui/react-native-web3js';
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Pressable, Text, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { OutlineTextButton } from '../ui/OutlineTextButton';
import { walletDrawerCtaStyles as styles } from './mobileWalletDrawerCta.styles';

const COMING_SOON_TITLE = 'Coming soon';
const COMING_SOON_MESSAGE = 'Wallet connection on iOS is coming soon.';

export function MobileWalletDrawerCta() {
  const { theme } = useUnistyles();
  const { account, disconnect } = useMobileWallet();

  if (account) {
    return (
      <View style={styles.connectedBlock}>
        <Text style={styles.addressHint} numberOfLines={1} ellipsizeMode="middle">
          {account.publicKey.toBase58()}
        </Text>
        <OutlineTextButton
          title="Disconnect"
          accessibilityLabel="Disconnect wallet"
          onPress={() => {
            void disconnect();
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.block}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Connect wallet"
        onPress={() => {
          Alert.alert(COMING_SOON_TITLE, COMING_SOON_MESSAGE);
        }}
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
  );
}
