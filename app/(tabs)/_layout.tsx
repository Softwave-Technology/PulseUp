import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#B3A0FF' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <TabBarIcon name="home" color={'white'} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: () => <TabBarIcon name="save" color={'white'} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: () => <TabBarIcon name="star" color={'white'} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <TabBarIcon name="user" color={'white'} />,
        }}
      />
    </Tabs>
  );
}
