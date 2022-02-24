import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-expo-pie-chart';

const App = () => (
  <View style={styles.container}>
    <PieChart
      data={[
        {
          key: 'correctCount',
          count: 15,
          color: 'red',
        },
        {
          key: 'incorrectCount',
          count: 20,
          color: 'yellow',
        },
        {
          key: 'answersShownCount',
          count: 30,
          color: 'purple',
        },
        {
          key: 'skippedCount',
          count: 10,
          color: 'green',
        },
      ]}
      length={200}
    />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
