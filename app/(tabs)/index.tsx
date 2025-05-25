import { FontAwesome } from '@expo/vector-icons';
import { StatusBar, View, StyleSheet, SafeAreaView, Text, Platform } from 'react-native';
import Recommendations from '~/components/Recommendations';

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View style={styles.headerContainer}>
          <View style={{ gap: 5 }}>
            <Text style={styles.headerTitle}>Welcome Back!</Text>
            <Text style={styles.headerSubtitle}>It is time to challenge your limits.</Text>
          </View>
          <FontAwesome name="user" color={'#896CFE'} size={25} />
        </View>
        <View style={styles.recommendations}>
          <Recommendations />
        </View>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },
  headerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#896CFE',
  },
  headerTitle: {
    fontSize: 24,
    color: '#896CFE',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  recommendations: {
    padding: 10,
  },
});
