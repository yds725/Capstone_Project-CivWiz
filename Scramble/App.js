/**
 * CivWiz Capstone Project
 * Word Scramble Game Module 
 **/

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, ActivityIndicator, TextInput, Button, Alert, ImageBackground,TouchableOpacity, Image} from 'react-native';
import colors from './components/Colors.js'
import GameData from './components/root.js'
import PropTypes from 'prop-types';

export default class Scrambled extends Component {
  constructor(props) {
    super(props)
    this.gameData = new GameData()

    this.state = {
      currentWord: null, scrambledWord: null,
      answerCorrect: false,
      text: '',
      definition: null,
      correctCount: 0,
      playCount: 1,
    }
  }

  componentDidMount() {
    this.newWord()
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  newWord() {
    const { gameData: g } = this

    const num = g.getSize()
    const i = Math.floor(Math.random() * num)
    const currentWord = g.getWord(i)
    const currentDef = g.getDefinition(i) //Get new def when getting new word
    const scrambledWord = g.scramble(currentWord)
    if(currentWord != scrambledWord){
      this.setState({
        currentWord,
        scrambledWord,
        currentDef
      })
    } else {
      this.newWord()
    }
  }

  handleSubmit(event) {

    const { text, currentWord } = this.state
    let playCount = this.state.playCount;
    let newplayCount = playCount + 1;
    this.setState({playCount : newplayCount});
    

    if (text.toLowerCase() === currentWord.toLowerCase()) {
      this.setState({
        text: '',
        scrambledWord: null,
        answerCorrect: true,
      });
      let cCount = this.state.correctCount;
      let newcorrectCount = cCount + 1;
      this.setState({correctCount : newcorrectCount});
    } else {
      this.setState({ text: '' })
      Alert.alert('Try Again')
    }
  }

  goHomePage(){
    let playCount= this.state.playCount;
    let correctCount= this.state.correctCount;
    let accuracy = (correctCount / playCount).toFixed(3);
    const arr = [ {id:0, title: 'Total Words Correct', number:correctCount},
      {id:1, title: 'Total Word Attempts', number:playCount},
      {id:2, title: 'Accuracy', number:accuracy}
      ];
      console.log(arr);

      this.props.stat(arr);

  }

  render() {
    const { currentWord, scrambledWord, text, currentDef } = this.state
    if (currentWord == null) return (<View />)
    return (
      <View style={{flex:1}}>
        <View style={styles.top}>

          <ImageBackground 
            source={require('./assets/userprofile_bg.png')} 
            style={{
              width: '100%',
              height: '100%',
              alignSelf: 'flex-start',
              //flexDirection: 'row',
              //alignItems: 'center'
            }}>
            
            <TouchableOpacity onPress={() => this.goHomePage()}>
                      <Image 
                        source={require('./assets/scramble_menu_default.png')}
                        style={{
                          marginTop:'8%',
                          marginLeft: '5%',
                        }}/>
            </TouchableOpacity>

            <View style={styles.pageContainer}>
              <Text style={styles.scrambledContainer}>
                {scrambledWord || currentWord.toUpperCase()}
              </Text>

              <TextInput
                placeholder={'Answer'}
                autoCapitalize={"characters"}
                style={styles.inputContainer}
                maxLength={currentWord.length}
                onChangeText={text => this.setState({ text })}
                value={text}
                autoCorrect={false}
                returnKeyType="go"
                onSubmitEditing={e => this.handleSubmit(e)}/>

                {scrambledWord == null ? 
                  <Button title="Correct!" 
                          color='dodgerblue' 
                          onPress={e => this.newWord()} /> : null}
                <View style={styles.box}>
              <Text style={styles.definitionContainer}>
                {currentDef}
              </Text>
              </View>
            </View>

          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top:{
    /*flex: 1,
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    height:300*/
  },
  pageContainer:{
    /*//alignContent: 'center',
    flex: 1,
    flexDirection: 'row',*/
    flex: 1,
    alignItems: 'center',
  },
  scrambledContainer: {
    flex: 1,
    /*marginTop: '40%',
    color: colors.floralwhite,
    fontSize: 35,
    fontFamily: 'sans-serif-medium',
    textAlign: 'center'*/
    fontSize: 35,
    //fontFamily: 'sans-serif-medium',
    color: 'white',
    marginTop: 15
  },
  inputContainer: {
    //flex: 2,
   
    backgroundColor: 'grey',
    borderColor: 'white',
    borderWidth: 3,
    color: 'white',
    fontSize: 25,
    //fontFamily: 'sans-serif-medium',
    textAlign: 'center',

    width: '75%',
    height: '10%',
    borderRadius: 10
  },
  box:{
    marginTop:30,
    marginBottom: 100,
    backgroundColor: '#20b2aa',
        borderWidth: 3,
        borderColor: '#f4bc42',
        height: 300,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 1, height: 10 }
  },
  definitionContainer:{
    flex: 3,
    color: 'pink',
    fontSize: 23,
  },
});

AppRegistry.registerComponent('Scrambled', () => Scrambled);