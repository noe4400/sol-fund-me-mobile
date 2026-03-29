import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';

import { SolFundDrawerContent } from '../components/drawer/SolFundDrawerContent';
import HomeScreen from '../screens/HomeScreen';
import MyCampaignsScreen from '../screens/MyCampaignsScreen';
import StartCampaignScreen from '../screens/StartCampaignScreen';
import type { RootDrawerParamList } from './types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export function RootDrawer() {
  const { theme } = useUnistyles();

  return (
    <Drawer.Navigator
      initialRouteName="Explore"
      drawerContent={(props) => <SolFundDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        // Overlays the scene (modal-like); does not translate the main content — see drawerType in RN docs.
        drawerType: 'front',
        swipeEnabled: true,
        overlayColor: theme.colors.drawerOverlay,
        drawerStyle: {
          width: 280,
          backgroundColor: theme.colors.drawerBackground,
          borderLeftWidth: StyleSheet.hairlineWidth * 2,
          borderLeftColor: theme.colors.drawerBorder,
        },
        sceneStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Drawer.Screen name="Explore" component={HomeScreen} />
      <Drawer.Screen name="StartCampaign" component={StartCampaignScreen} />
      <Drawer.Screen name="MyCampaigns" component={MyCampaignsScreen} />
    </Drawer.Navigator>
  );
}
