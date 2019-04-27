import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';
import Home from '../home/App';
import Trivia from '../cap/App';
import Scramble from '../Scramble/App';
import EasyScramble from '../ScrambleSingle/App';
import HardScramble from '../ScrambleMulti/App';

import { w } from './api/Dimensions';


export default class FirebaseLogin extends Component<{}> {

  state = {
    currentScreen: 'login', // can be: 'login' or 'register' or 'forgot'
    email:'empty',
    triviaData: [],
    scrambleData: [],
  };

  changeScreen = screenName => () => {
    this.setState({ currentScreen: screenName });
  };

   userSuccessfullyLoggedIn = (emailAdd) => {
    this.setState({ currentScreen: 'home' });
    this.setState({ email: emailAdd });
  };

  triviaStat = (posts) => {
    this.setState({ currentScreen: 'home' });
    this.setState({ triviaData: posts});
  };

  wordStat = (posts) => {
    this.setState({ currentScreen: 'home' });
    this.setState({ scrambleData: posts});
  };

  render() {
    let screenToShow;

    switch(this.state.currentScreen) {
      case 'login':
        screenToShow = <Login change={this.changeScreen} success={this.userSuccessfullyLoggedIn}/>;
        break;
      case 'register':
        screenToShow = <Register change={this.changeScreen} />;
        break;
      case 'forgot':
        screenToShow = <ForgotPassword change={this.changeScreen}/>;
        break;
      case 'home':
        screenToShow = <Home wordStat={this.state.scrambleData} triviaStat={this.state.triviaData} type={this.state.email} change={this.changeScreen}/>;
        break;
      case 'trivia':
        screenToShow = <Trivia change={this.changeScreen} stat={this.triviaStat}/>;
        break;
      case 'scramble':
        screenToShow = <Scramble change={this.changeScreen} stat={this.wordStat}/>;
        break;
	  case 'easyScramble':
		screenToShow = <EasyScramble change={this.changeScreen} stat={this.wordStat}/>;
        break;
	  case 'hardScramble':
		screenToShow = <HardScramble change={this.changeScreen} stat={this.wordStat}/>;
        break;
    }

    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={-w(40)}
        style={styles.container}
      >
        <ImageBackground
          source={this.props.background}
          style={styles.background}
          resizeMode="stretch"
        >
          {screenToShow}
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

FirebaseLogin.propTypes = {
  login: PropTypes.func.isRequired,
};

FirebaseLogin.defaultProps = {
  background: null,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#555',
  },
  background: {
    width: '100%',
    height: '100%',
  }
});
