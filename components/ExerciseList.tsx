import { View, StyleSheet } from 'react-native';
import { LegendList } from '@legendapp/list';
import exercises from '~/assets/data/exercises.json';

export default function ExerciseList() {
  return (
    <View style={styles.container}>
      <LegendList
        data={exercises}
        renderItem={({ item }) => <View style={styles.exerciseContainer}></View>}
        keyExtractor={(item) => item.id}
        recycleItems
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  exerciseContainer: {},
  imageTitle: {},
  image: {},
});
