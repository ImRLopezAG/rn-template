import { StatusBar } from 'expo-status-bar';

import { Text, View } from '@components/native';

export default function ModalScreen() {
  return (
    <View className='flex flex-1 items-center justify-center'>
      <Text className='text-lg font-bold'>Modal</Text>
      <StatusBar  animated/>
    </View>
  );
}
