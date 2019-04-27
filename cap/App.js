import React, { Component } from 'react';
import { Easing, Animated, ImageBackground, Text, View, StyleSheet, Button, Alert, Image, TouchableOpacity} from 'react-native';
import { Constants } from 'expo';
import { Vibration} from 'react-native'
import Questions from './Questions';
import TimerCountdown from "react-native-timer-countdown";
import PropTypes from 'prop-types';


//import * as QuestionsData from './Questions';
const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];


export default class App extends Component {

    constructor() {
        super();
        this.stopAnimation= false;
        this.animatedValue = new Animated.Value(0);
        this.state = {
              questions:[
              {
                  Question: "The assumed broader desires and needs of the public, in whose name policy is made, is commonly referred to as:",
                  A: "Classic Liberalism",
                  B: "Representative Bureaucracy",
                  C: "Public Interest",
                  D: "Social Science",
                  Answer: "C"
                },
                {
                  Question: "Brown v. Board of Education is an example of public policy formed by:",
                  A: "Constitutional Provision",
                  B: "Statute Law",
                  C: "Case Law",
                  D: "Executive Order",
                  Answer: "C"
                },
                {
                  Question: "The legislative practice of trading commitments to vote for members'preferred policies is referred to as:",
                  A: "Venue Shopping",
                  B: "Logrolling",
                  C: "Mobilization",
                  D: "Lobbying",
                  Answer: "B"
                },
                {
                  Question: "The Thirteenth Amendment, which abolished slavery and involuntary servitude, is an example of public policy formed by",
                  A: "Constitutional Provision",
                  B: "Statue Law",
                  C: "Case Law",
                  D: "Executive Order",
                  Answer: "A"
                },
                {
                  Question: "A city mandate renaming a park to honor a historical figure is an example of:",
                  A: "Material Policy",
                  B: "Procedural Policy",
                  C: "Symbolic Policy",
                  D: "Statutory Policy",
                  Answer: "C"
                },
                {
                  Question: "In the context of public policy, the process of defining problems and selling a broad population on the definition is reffered to as:",
                  A: "Social Construction",
                  B: "Causal Stories",
                  C: "Policy Monopoly",
                  D: "Windows of Opportunity",
                  Answer: "A"
                },
                {
                  Question: "The process in which groups identify and pick a branch or agency of government that is most likely to give their concerns a sympathetic hearing is referred to as:",
                  A: "Mobilization",
                  B: "Logrolling",
                  C: "Venue Shopping",
                  D: "Social MOvement",
                  Answer: "C"
                }
              ],
              currentQuestion: " ",
              questionCount: 0,
              correctAnswerCount: 0,
              wrongAnswer: '',
              questionfront: 0,

          }
    }

   
    componentWillMount() {
      this.generateQuestions();
    }

    generateQuestions() {
       qs = this.state.questions;
        console.log(qs[0]);
        this.setState({ currentQuestion: qs[0].Question });
        this.setState({ questionCount: 0 });
        if(qs[0].Question.length > 45){
          this.setState({ questionfront: 20 });
        }else{
          this.setState({ questionfront: 40 });
        }
    } 

    answerQuestion(choice) {
        this.setState({ 'correctAnswer': this.state.questions[this.state.questionCount].Answer });
        
        if (choice === this.state.questions[this.state.questionCount].Answer) {
            Alert.alert('Correct!');
            let correctAnswerCount = this.state.correctAnswerCount;
            let newCorrectAnswerCount = correctAnswerCount + 1;
            this.setState({ 'correctAnswerCount': newCorrectAnswerCount });
        }else if(choice ===" "){
            Alert.alert('Time out!!!');
        }else {
            Alert.alert('That is Wrong:(');
            this.setState({ 'wrongAnswer': choice });
        }

        let questionCount = this.state.questionCount;
        questionCount++;
        this.setState({ 'questionCount': questionCount });
        setTimeout(() => {
                this.setState({ 'currentQuestion': this.state.questions[questionCount].Question });
                this.setState({ 'wrongAnswer': '' });
                this.setState({ 'correctAnswer': '' });
                if(this.state.questions[questionCount].Question.length > 45){
                  this.setState({ questionfront: 30 });
                }else{
                  this.setState({ questionfront: 40 });
                }
                this.stopVibration();
                this.stopAnimation= true;
                
        }, 500);
        
    }

    skipQuestion() {
        this.setState({ 'correctAnswer': this.state.questions[this.state.questionCount].Answer });
        let questionCount = this.state.questionCount;
        questionCount++;
        this.setState({ 'questionCount': questionCount });
        setTimeout(() => {
                this.setState({ 'currentQuestion': this.state.questions[questionCount].Question });
                this.setState({ 'wrongAnswer': '' });
                this.setState({ 'correctAnswer': '' });
                if(this.state.questions[questionCount].Question.length > 45){
                  this.setState({ questionfront: 30 });
                }else{
                  this.setState({ questionfront: 40 });
                }
                this.stopVibration();
                this.stopAnimation= true;
                
        }, 500);
        
    }

    startShaking(){
      this.stopAnimation= false;
    }


    startVibration(){
      // Device Will Vibrate for 10 seconds.
      Vibration.vibrate(PATTERN) ;
    }

    stopVibration(){
      // Stop Vibration.
      Vibration.cancel();
    }

    handleAnimation(){
        console.log(this.stopAnimation);
        // Animation consists of a sequence of steps
        Animated.sequence([
          // start rotation in one direction (only half the time is needed)
          Animated.timing(this.animatedValue, {toValue: 1.0, duration: 150, easing: Easing.bounce, useNativeDriver: true}),
          // rotate in other direction, to minimum value (= twice the duration of above)
          Animated.timing(this.animatedValue, {toValue: -1.0, duration: 300, easing: Easing.bounce, useNativeDriver: true}),
          // return to begin position
          Animated.timing(this.animatedValue, {toValue: 0.0, duration: 150, easing: Easing.bounce, useNativeDriver: true})
        ]).start(() => {
        if(this.stopAnimation === false) {

          this.handleAnimation();
        }
      }); 
    }

    goHomePage(){
      let correctAnswerCount = this.state.correctAnswerCount;
      let questionCount = this.state.questionCount;
      let accuracy = (correctAnswerCount / questionCount).toFixed(3);
      const arr = [ {id:0, title: 'Total Question Correct', number:correctAnswerCount},
      {id:1, title: 'Total Question Done', number:questionCount},
      {id:2, title: 'Accuracy', number:accuracy}
      ];
      console.log(arr);

      this.props.stat(arr);
    }



    render() {
    return (
      <View style={{flex:1}}>
        <View style={styles.top}>
          <ImageBackground
          source={require('./trivia_pc/userprofile_bg.png')}
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignSelf: 'flex-start'
          }}>

          <View style={styles.topCenterContainer}>

          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.goHomePage()}>
                  <Image 
                    source={require('./trivia_pc/scramble_menu_default.png')}
                    style={{
                      marginTop:'40%',
                      marginLeft: '20%', 
                    }}/>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => this.skipQuestion()}>
                  <Image 
                    source={require('./trivia_pc/skip.png')}
                    style={{
                      marginLeft: '60%',
                      marginTop: 50,
                      width: 63, 
                      height: 63
                    }}/>
           </TouchableOpacity>
           </View>
          
            <Animated.Text style={{
              marginLeft: '7%',
              marginRight: '7%',
              marginBottom: '5%',
              fontSize: this.state.questionfront,
              color: 'white',
              transform: [{
                translateY: this.animatedValue.interpolate({
                  inputRange: [-2, 0],
                  outputRange: [-10, 0]
                })
              }]
            }}>
            
              {this.state.currentQuestion}
            </Animated.Text>

           


            <View style={styles.middleContainer}>

            <TimerCountdown
              initialMilliseconds={1000 * 30}
              onExpire={() => this.answerQuestion(" ")}
              formatMilliseconds={(milliseconds) => {
                const remainingSec = Math.round(milliseconds / 1000);
                const seconds = parseInt((remainingSec % 60).toString(), 10);
                const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                
                const s = seconds < 10 ? '0' + seconds : seconds;
                const m = minutes < 10 ? '0' + minutes : minutes;
                return m + ':' + s;
              }}
              allowFontScaling={true}
              style={{ fontSize: 28,
                color: '#ffa500',
              }}
            />
            
             </View>
            

            <View style={styles.lowerContainer}>

           <TouchableOpacity style={styles.qpJokerView} onPress={() => this.answerQuestion("A")}>
                  <Text style={{
                  width: '80%',
                  marginLeft: '10%',
                  fontSize: 24,
                  color: 'pink',
                }}>
                  A. {this.state.questions[this.state.questionCount].A}
                </Text>
           </TouchableOpacity>

           <Text style={{
                  marginTop: '5%',
                }}>
            </Text>

           <TouchableOpacity style={styles.qpJokerView} onPress={() => this.answerQuestion("B")}>
           <Text style={{
                  width: '80%',
                  marginLeft: '10%',
                  fontSize: 24,
                  color: 'pink',
                }}>
                  B. {this.state.questions[this.state.questionCount].B}
                </Text>
           </TouchableOpacity>

           <Text style={{
                  marginTop: '5%',
                }}>
            </Text>

           <TouchableOpacity style={styles.qpJokerView} onPress={() => this.answerQuestion("C")}>
                  <Text style={{
                  width: '80%',
                  marginLeft: '10%',
                  fontSize: 24,
                  color: 'pink',
                }}>
                  C. {this.state.questions[this.state.questionCount].C}
                </Text>
           </TouchableOpacity>

           <Text style={{
                  marginTop: '5%',
                }}>
            </Text>
          

           <TouchableOpacity style={styles.qpJokerView} onPress={() => this.answerQuestion("D")}>
                  <Text style={{
                  width: '80%',
                  marginLeft: '10%',
                  fontSize: 24,
                  color: 'pink',
                }}>
                  D. {this.state.questions[this.state.questionCount].D}
                </Text>
           </TouchableOpacity>

           <Text style={{
                  marginBottom: '5%',
                }}>

            </Text>

            
           </View>
          </View>

          </ImageBackground>

          <TimerCountdown
              initialMilliseconds={1000 * 20}
              onExpire={() => this.startVibration()}
              formatMilliseconds={(milliseconds) => {
                const remainingSec = Math.round(milliseconds / 1000);
                const seconds = parseInt((remainingSec % 60).toString(), 10);
                const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                
                const s = seconds < 10 ? '0' + seconds : seconds;
                const m = minutes < 10 ? '0' + minutes : minutes;
                return m + ':' + s;
              }}
              allowFontScaling={true}
              style={{ fontSize: 28,
                color: '#ffa500',
              }}
            />

            <TimerCountdown
              initialMilliseconds={1000 * 20}
              onExpire={() => this.handleAnimation()}
              formatMilliseconds={(milliseconds) => {
                const remainingSec = Math.round(milliseconds / 1000);
                const seconds = parseInt((remainingSec % 60).toString(), 10);
                const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                
                const s = seconds < 10 ? '0' + seconds : seconds;
                const m = minutes < 10 ? '0' + minutes : minutes;
                return m + ':' + s;
              }}
              allowFontScaling={true}
              style={{ fontSize: 28,
                color: '#ffa500',
              }}
            />

            <TimerCountdown
              initialMilliseconds={1000 * 19}
              onExpire={() => this.startShaking()}
              formatMilliseconds={(milliseconds) => {
                const remainingSec = Math.round(milliseconds / 1000);
                const seconds = parseInt((remainingSec % 60).toString(), 10);
                const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                
                const s = seconds < 10 ? '0' + seconds : seconds;
                const m = minutes < 10 ? '0' + minutes : minutes;
                return m + ':' + s;
              }}
              allowFontScaling={true}
              style={{ fontSize: 28,
                color: '#ffa500',
              }}
            />


      </View>

        </View>

    );
  }

}


const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    height:300
  },
  topCenterContainer:{
    flex: 1,
  },
  lowerContainer:{
    flex: 1,
    marginBottom:'15%',
    alignItems: 'center',
    justifyContent: 'center',
    height:400,
  },
  middleContainer:{
    flex: 1,
    marginLeft:'7%',
    flexDirection: 'row',

  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    height: 200,
  },
  qpJokerView: {
        backgroundColor: '#20b2aa',
        borderWidth: 3,
        borderColor: '#f4bc42',
        height: 50,
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

});



