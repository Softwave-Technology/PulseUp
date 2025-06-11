import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { LegendList } from '@legendapp/list';
import exercises from '~/assets/data/exercises.json';
import { useEffect, useState } from 'react';
import { Exercise } from '~/types/Exercise';

export default function ExerciseList() {
  const [groupedExercises, setGroupedExercises] = useState<Record<string, Exercise[]>>({});

  // filtering exercises based on their categories
  useEffect(() => {
    const data: Exercise[] = exercises;
    const grouped = data.reduce(
      (acc, exercise) => {
        const category = exercise.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(exercise);
        return acc;
      },
      {} as Record<string, Exercise[]>
    );

    setGroupedExercises(grouped);
  }, []);

  // Displaying groups of exercises
  return (
    <View style={styles.container}>
      <LegendList
        style={{ flex: 1 }}
        data={Object.entries(groupedExercises)}
        renderItem={({ item: [category, exercise] }) => (
          <View style={styles.exerciseContainer}></View>
        )}
        keyExtractor={([category]) => category}
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
