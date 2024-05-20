import { Link, Stack } from 'expo-router';

import { Text, View } from '@/app/components/native';
export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className='flex items-center justify-center p-5'>
        <Text className='text-2xl font-bold'>This screen doesn't exist.</Text>

        <Link href='/' className='mt-4 py-4'>
          <p className='text-base text-blue-700'>Go to home screen!</p>
        </Link>
      </View>
    </>
  );
}
