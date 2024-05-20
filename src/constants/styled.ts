import { styled } from 'nativewind';
import * as Default from 'react-native';

const TINT_COLOR_LIGHT = '#2f95dc';
const TINT_COLOR_DARK = '#fff';

export const COLORS = {
  light: {
    text: '#000',
    background: '#fff',
    tint: TINT_COLOR_LIGHT,
    tabIconDefault: '#ccc',
    tabIconSelected: TINT_COLOR_DARK,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: TINT_COLOR_LIGHT,
    tabIconDefault: '#ccc',
    tabIconSelected: TINT_COLOR_DARK,
  },
};

export const Text = styled(Default.Text);
export const View = styled(Default.View);
export const SafeAreaView = styled(Default.SafeAreaView);
export const Button = styled(Default.Pressable);
export const StatusBar = styled(Default.StatusBar);
export const ActivityIndicator = styled(Default.ActivityIndicator);
export const Image = styled(Default.Image);
export const ScrollView = styled(Default.ScrollView);
export const FlatList = styled(Default.FlatList);
export const SectionList = styled(Default.SectionList);
export const TextInput = styled(Default.TextInput);
export const Modal = styled(Default.Modal);
export const Switch = styled(Default.Switch);

