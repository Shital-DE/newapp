import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardTree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    // flex: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 10,
  },
  cardOne: {
    flex: 1,
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    flex: 2,
    backgroundColor: '#50DBB4',
  },
  cardTree: {
    flex: 3,
    backgroundColor: '#5DA3FA',
  },
});
