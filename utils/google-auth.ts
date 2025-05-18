import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const auth = getAuth();

export async function signInWithGoogleAsync() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '<your-expo-client-id>.apps.googleusercontent.com',
    iosClientId: '<your-ios-client-id>.apps.googleusercontent.com',
    androidClientId: '<your-android-client-id>.apps.googleusercontent.com',
  });

  if (!request) throw new Error('Google Auth request not ready.');

  const result = await promptAsync();

  if (result.type === 'success') {
    const { id_token } = result.params;
    const credential = GoogleAuthProvider.credential(id_token);
    await signInWithCredential(auth, credential);
  } else {
    throw new Error('Google Sign-In canceled.');
  }
}
