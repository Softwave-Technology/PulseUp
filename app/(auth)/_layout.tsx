import { router, Stack } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '~/context/AuthContext';

export default function AuthLayout() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.replace('/(tabs)');
    }
  }, [user, loading]);

  if (loading) {
    return <ActivityIndicator style={{ alignSelf: 'center', flex: 1 }} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
    </Stack>
  );
}
