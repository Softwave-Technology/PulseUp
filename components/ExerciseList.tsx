import { View, StyleSheet, Text, Pressable } from 'react-native';
import { LegendList } from '@legendapp/list';
import exercises from '~/assets/data/exercises.json';
import { useEffect, useState } from 'react';
import { Exercise } from '~/types/Exercise';

export default function ExerciseList() {
  const [groupedExercises, setGroupedExercises] = useState<Record<string, Exercise[]>>({});

  useEffect(() => {
    const data: Exercise[] = exercises;

    // Filter to show only beginner-level exercises
    const filtered = data.filter((exercise) => exercise.level === 'beginner');

    const grouped = filtered.reduce(
      (acc, exercise) => {
        const category = exercise.category;
        if (!acc[category]) acc[category] = [];
        acc[category].push(exercise);
        return acc;
      },
      {} as Record<string, Exercise[]>
    );

    setGroupedExercises(grouped);
  }, []);

  return (
    <View style={styles.container}>
      <LegendList
        data={Object.entries(groupedExercises)}
        renderItem={({ item: [category, exercises] }) => (
          <View style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{category.toUpperCase()}</Text>
            {exercises.slice(0, 10).map((exercise) => (
              <Pressable key={exercise.id} style={styles.exerciseCard}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
              </Pressable>
            ))}
          </View>
        )}
        keyExtractor={([category]) => category}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categorySection: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#E2F163',
  },
  exerciseCard: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  exerciseName: {
    fontSize: 16,
  },
});
