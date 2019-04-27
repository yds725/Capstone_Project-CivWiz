/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';

import FirebaseLogin from "./FirebaseLogin";

export default class App extends Component<{}> {
  render() {
    return (
      <FirebaseLogin login={user => console.warn(user)}/>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
