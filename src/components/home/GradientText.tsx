import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, type ColorValue, type StyleProp, type TextStyle } from 'react-native';

type GradientTextProps = {
  children: string;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  style: StyleProp<TextStyle>;
};

export function GradientText({ children, colors, style }: GradientTextProps) {
  return (
    <MaskedView
      style={{ alignSelf: 'stretch' }}
      maskElement={
        <View style={{ backgroundColor: 'transparent', alignItems: 'stretch' }}>
          <Text style={style}>{children}</Text>
        </View>
      }
    >
      <LinearGradient colors={colors} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
        <Text style={[style, { opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}
