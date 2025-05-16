import { router, Tabs } from 'expo-router';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from '~/context/AuthContext';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

export default function TabLayout() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/(auth)/onboarding');
    }
  }, [user, loading]);

  if (loading) {
    return <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} />;
  }

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
