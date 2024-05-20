import { Tabs } from 'expo-router';
import { Icons } from '@components/native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icons color={color}/>,
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <Icons name='user' color={color} />,
        }}
      />
    </Tabs>
  );
}
