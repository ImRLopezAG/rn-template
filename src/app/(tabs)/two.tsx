import { Text, View } from '@components/native';

export default function TabTwoScreen() {
  return (
    <View className='flex flex-1 items-center justify-center'>
      <Text className='text-xl font-bold'>Tab Two</Text>
      <View className='w-64 h-64 rounded-full bg-blue-400 mt-4' />
    </View>
  );
}
