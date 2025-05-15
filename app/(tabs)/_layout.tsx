import { Tabs } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';

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
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={30} color={focused ? '#E2F163' : 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="save" size={30} color={focused ? '#E2F163' : 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="star" size={30} color={focused ? '#E2F163' : 'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="user" size={30} color={focused ? '#E2F163' : 'white'} />
          ),
        }}
      />
    </Tabs>
  );
}
