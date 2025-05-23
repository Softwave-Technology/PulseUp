import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useState } from 'react';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../utils/firebase';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_AUTH_CLIENT_ID,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInWithGoogle = async () => {
    setError(null);
    setLoading(true);

    try {
      const result = await promptAsync();
      if (result.type !== 'success') {
        setError('Authentication was cancelled or failed.');
        setLoading(false);
        return;
      }

      const id_token = result.authentication?.idToken;
      if (!id_token) {
        setError('Missing ID token from Google.');
        setLoading(false);
        return;
      }

      const credential = GoogleAuthProvider.credential(id_token);
      await signInWithCredential(auth, credential);
    } catch (err: any) {
      console.error('Google Sign-In Error:', err);
      setError(err.message || 'Something went wrong during Google Sign-In.');
    } finally {
      setLoading(false);
    }
  };

  return {
    signInWithGoogle,
    loading,
    error,
    request,
  };
};
