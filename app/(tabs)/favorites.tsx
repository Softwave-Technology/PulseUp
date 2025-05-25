import { StatusBar, View, StyleSheet, SafeAreaView, Platform } from 'react-native';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}></SafeAreaView>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
