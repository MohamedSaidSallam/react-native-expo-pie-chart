import React from 'react';
import { StyleSheet, View } from 'react-native';
import PieChart from 'react-native-expo-pie-chart';

const App = () => (
  <View style={styles.container}>
    <PieChart
      data={[
        {
          key: 'First Data',
          count: 20,
          color: 'blue',
        },
        {
          key: 'Second Data',
          count: 25,
          color: 'yellow',
        },
        {
          key: 'Third Data',
          count: 40,
          color: 'green',
        },
        {
          key: 'Forth Data',
          count: 35,
          color: 'orange',
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
