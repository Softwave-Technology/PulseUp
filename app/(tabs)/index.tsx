import {
  StatusBar,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  ScrollView,
} from 'react-native';
import ExerciseList from '~/components/ExerciseList';
// import Recommendations from '~/components/Recommendations';

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View style={styles.headerContainer}>
          <View style={{ gap: 5 }}>
            <Text style={styles.headerTitle}>Welcome Back!</Text>
            <Text style={styles.headerSubtitle}>It is time to challenge your limits.</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}>
          {/* Exercise list component */}
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyTitle}>Beginner Exercises</Text>
            <ExerciseList />
          </View>
          {/* Recommendations Compoennt */}
          {/*  <View style={styles.recommendations}>
            <Recommendations />
          </View>*/}
        </ScrollView>
      </SafeAreaView>
      <StatusBar barStyle="light-content" />
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
  bodyContainer: {
    padding: 10,
  },
  bodyTitle: {
    fontSize: 20,
    color: '#E2F163',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
