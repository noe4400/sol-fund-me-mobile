import { NavigationContainer } from '@react-navigation/native';
import { useAppFonts } from './src/hooks/useAppFonts';
import { RootDrawer } from './src/navigation/RootDrawer';

export default function App() {
  const { ready } = useAppFonts();

  if (!ready) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
}
