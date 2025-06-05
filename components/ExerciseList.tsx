import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { LegendList } from '@legendapp/list';
import exercises from '~/assets/data/exercises.json';
import { useState } from 'react';
import { Exercise } from '~/types/Exercise';

export default function ExerciseList() {
  {
    /*const [searchInput, setSearchInput] = useState('');
  const [filtered, setFiltered] = useState<Exercise[] | any>(exercises);
  const handleSearch = (input: string) => {
    setSearchInput(input);
    const filteredData = exercises.filter((exercise: Exercise) =>
      exercise.name.toLowerCase().includes(input.toLowerCase())
    );
    setFiltered(filteredData);
  };*/
  }

  return (
    <View style={styles.container}>
      <LegendList
        style={{ flex: 1 }}
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
