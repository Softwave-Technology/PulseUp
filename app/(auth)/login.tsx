import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/');
    } catch (error: any) {
      let message = 'Login failed. Please try again.';
      if (error.code === 'auth/user-not-found') message = 'User not found.';
      else if (error.code === 'auth/wrong-password') message = 'Incorrect password.';
      else if (error.code === 'auth/invalid-email') message = 'Invalid email address.';

      Alert.alert('Login Error', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 justify-center bg-white px-6"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View className="mb-10">
        <Text className="text-center text-3xl font-bold text-black">Welcome Back</Text>
        <Text className="mt-2 text-center text-gray-500">Login to your account</Text>
      </View>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        className="mb-4 rounded-xl border border-gray-300 bg-gray-100 p-4"
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mb-4 rounded-xl border border-gray-300 bg-gray-100 p-4"
        placeholderTextColor="#888"
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="mt-2 items-center rounded-xl bg-black py-4"
        disabled={loading}>
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-base font-semibold text-white">Login</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')} className="mt-6">
        <Text className="text-center text-sm text-gray-600">
          Do not have an account? <Text className="font-semibold text-black">Register</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
