import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hello Shital 👋</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default App;
