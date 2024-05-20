import { Button, Icons, Text, View } from '@components/native';
import { useState } from 'react';

export default function TabOneScreen() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);
  return (
    <View className='flex flex-1 items-center justify-center'>
      <View className='flex flex-row space-x-4 items-center justify-center'>
        <Text className='text-xl font-bold'>Tap{count > 0 && 's'}</Text>
        <Text className='text-2xl font-bold text-green-400'>{count}</Text>
      </View>
      <View className='flex flex-row space-x-4 mt-4 w-full justify-center'>
        <Button className='bg-blue-500 rounded-full p-5' onPress={increment}>
          <Icons name='plus' color='white' />
        </Button>
        <Button className='bg-red-500 rounded-full p-5' onPress={decrement}>
          <Icons name='minus' color='white' />
        </Button>
        <Button className='bg-gray-500 rounded-full p-5' onPress={reset}>
          <Icons name='refresh' color='white' />
        </Button>
      </View>
      <View className='w-7/12'>
        <Text className='text-lg font-bold mt-4'>
          To get started, edit
        </Text>
          <Text className='text-xl font-bold mt-4 text-blue-500 underline'>src/app/(tabs)/index.tsx</Text>
      </View>
    </View>
  );
}
