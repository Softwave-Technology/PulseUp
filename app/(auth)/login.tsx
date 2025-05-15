import { View, TextInput, Button, Text } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View className="flex-1 justify-center bg-white p-4">
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="mb-3 rounded border p-3"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-3 rounded border p-3"
      />
      <Button title="Login" onPress={handleLogin} />
      {error && <Text className="mt-2 text-red-500">{error}</Text>}
    </View>
  );
}
