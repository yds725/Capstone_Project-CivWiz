import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, Alert, Image,TouchableOpacity} from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';

export default class App extends Component<{}> {

  renderTriviaStat(){
    let arr = this.props.triviaStat;
    if(arr.length > 0){
        return (
        <View style={styles.sts}>
            {arr.map((item) => 
          <Text style={styles.stsText} key={item.id}>
            {item.title} : {item.number}
          </Text>
          )}
        </View>
        );
    }else{
      return (
        <View style={styles.sts}>
          <Text style={styles.stsText}>
            Total Question Correct : 0 
          </Text>
          <Text style={styles.stsText}>
            Total Question Done : 0 
          </Text>
          <Text style={styles.stsText}>
            Accuracy : 0 
          </Text>
           </View>
        );
    }
  }

  renderScrambleStat(){
    let arr = this.props.wordStat;
    if(arr.length > 0){
        return (
        <View style={styles.sts}>
            {arr.map((item) => 
          <Text style={styles.stsText} key={item.id}>
            {item.title} : {item.number}
          </Text>
          )}
        </View>
        );
    }else{
      return (
        <View style={styles.sts}>
          <Text style={styles.stsText}>
            Total Word Attempts: 0 
          </Text>
          <Text style={styles.stsText}>
            Total Words Correct: 0 
          </Text>
          <Text style={styles.stsText}>
            Accuracy : 0 
          </Text>
           </View>
        );
    }
  }



  render() {
    return (
      <View style={{flex:1}}>

        <View style={styles.top}>
          <ImageBackground
          source={require('./userprofile_bg.png')}
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignSelf: 'flex-start'
          }}>
          

          <View style={styles.topleftContainer}>
          <Image 
            source={require('./male.png')}
            style={{
              width: 100,
              height: 100,
              alignSelf: 'baseline',
              marginTop: 80,
              marginLeft: 25
              //flex: 1
            }}
            />

            <Text style={{
              color: '#d8bfd8',
              fontSize: 20,
              marginTop: 10,
              marginLeft: 45,
            }}>
            User: {this.props.type}
            </Text>
          
            </View>
          
            
            <View style={styles.topRightContainer}>
          <Text style={{
              color: '#f0f8ff',
              fontSize: 30,
              marginTop: 50,
              marginLeft: 20,
              marginRight: 10,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            Welcome to the CivWiz World{"\n"} 
            </Text>
            
           </View>
          
          </ImageBackground>
        </View>

        <View style={styles.bottom}>

          <View style={styles.bottomContainer1}>
		  <View style={{ flexDirection: 'row' }}>
          <View style={styles.small_button}>
           <TouchableOpacity style={styles.small_button} onPress={this.props.change('easyScramble')}>
             <Text style={styles.buttonText}>Easy Scramble</Text>
           </TouchableOpacity>  
          </View>
		  <View style={styles.small_button}>
           <TouchableOpacity style={styles.small_button} onPress={this.props.change('hardScramble')}>
             <Text style={styles.buttonText}>Hard Scramble</Text>
           </TouchableOpacity>  
          </View>
		  </View>
          {this.renderScrambleStat()}
          </View>

          <View style={styles.bottomContainer2}>
            <View style={styles.button}>
              <TouchableOpacity style={styles.button} onPress={this.props.change('trivia')}>
                <Text style={styles.buttonText}>Trivia</Text>
              </TouchableOpacity> 
            </View>
            
          {this.renderTriviaStat()}
         
        </View>

      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    flexDirection: 'column',
  },
  bottom: {
    flex: 2,
    backgroundColor: '#66cdaa',
  },
  bottomContainer1:{
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  bottomContainer2:{
    flex: 1,
    alignItems: 'center',
  },
  topRightContainer:{
    flex: 1,
    marginTop: 50,
    width: 100,
    alignItems: 'center',
  },
  topLeftContainer:{
    flex: 1,
    flexDirection: 'column',
  },
  button:{
        backgroundColor: '#afeeee',
        borderWidth: 4,
        borderColor: '#9370db',
        height: 50,
        width: 300,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 1, height: 10 }
  },
  buttonText:{
    fontSize: 26,
    color: '#ff69b4',
  },
  sts:{
      marginTop: 10,
        backgroundColor: '#e6e6fa',
        borderWidth: 4,
        borderColor: '#9370db',
        height: 150,
        width: 300,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 1, height: 10 }
  },
  stsText:{
    fontSize: 20,
    color: '#5f9ea0',

  },
  small_button:{
        backgroundColor: '#afeeee',
        borderWidth: 4,
        borderColor: '#9370db',
        height: 50,
        width: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowOffset: { width: 1, height: 10 }
  },
});