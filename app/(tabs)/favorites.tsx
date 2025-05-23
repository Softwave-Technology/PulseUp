import { StatusBar, View, StyleSheet } from 'react-native';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },
});
