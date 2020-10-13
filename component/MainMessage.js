import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class MainMessage extends Component {
  render() {
    return (
      <Text style={styles.baseText}>
        We are soliU We are soliU We are soliU We are soliU We are soliU We are
        soliU
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  baseText: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: '10%',
  },
});
