import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet, Text, Pressable } from 'react-native';

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Recommendations</Text>
        <Pressable style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Text style={styles.subHeader}>See all</Text>
          <FontAwesome name="arrow-right" color={'#e2f163'} size={20} />
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    color: '#E2F163',
    fontWeight: 'bold',
  },
  subHeader: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
