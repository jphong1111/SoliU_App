import React, { Component } from 'react';
import { Image } from 'react-native';
export default class LogoImage extends Component {
  render() {
    return (
      <Image
        source={require('../assets/logo.png')}
        style={{ width: '100%', height: '60%' }}
      />
    );
  }
}
