import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { CheckBox } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get("window").width;



class questionScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
            question:{
                title: 'Hoe oud kan een vuursalamander uiterlijk worden?',
                correctAnswer: 2,
            },
            answers:{
                answerOne : {
                    checkbox: false,
                    title: '6 Jaar',
                },
                answerTwo: {
                    checkbox: false,
                    title: '12 Jaar',
                },
                answerThree: {
                    checkbox: false,
                    title: '4 Jaar',
                },
            },
            checkBoxOne: false,
            checkBoxTwo: false,
            checkBoxThree: false,

        }
      } 
    
    output = this.props.navigation.getParam('output');

    givenAnswerCheck = (answer) => {
        if (this.state.checkBoxOne == true){
           return answer = 1;
            
        } else if (this.state.checkBoxTwo == true){
            return  answer = 2;
        }
        else if (this.state.checkBoxThree == true){
            return  answer = 3;
        }
    }


  render() {


      return (
        <ScrollView>
          <SafeAreaView>
            <View style={styles.questionArea}>
            <Text style={styles.questionTitle}>Vraag 1</Text>
                <Text style={styles.questionText}>
                {this.state.question.title}
                </Text>
            </View>
            <View style={styles.topBar}>
                
            </View>
            <View style={styles.textBar}>
            <Text style={styles.title}>Antwoorden:</Text>
            <View style={styles.answerBlock}>
                    <Text style={styles.answerTitle}>{this.state.answers.answerOne.title}</Text>
                    <CheckBox
                        style={styles.answerBox}
                        right
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        iconRight
                        checked={this.state.checkBoxOne}
                        onPress={() => this.props.navigation.navigate('Control', {result: 1})}
                    />
                </View>
                <View style={styles.answerBlock}>
                    <Text style={styles.answerTitle}>{this.state.answers.answerTwo.title}</Text>
                    <CheckBox
                        style={styles.answerBox}
                        right
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        iconRight
                        checked={this.state.checkBoxTwo}
                        onPress={() => this.props.navigation.navigate('Control', {result: 2})}
                    />
                </View>
                <View style={styles.answerBlock}>
                    <Text style={styles.answerTitle}>{this.state.answers.answerThree.title}</Text>
                    <CheckBox
                        style={styles.answerBox}
                        right
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        iconRight
                        checked={this.state.checkBoxThree}
                        onPress={() => this.props.navigation.navigate('Control', {result: 3})}
                    />
                </View>


            </View>
        </SafeAreaView>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    welcome:{
      marginTop: 15,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionArea:{
        width: Dimensions.get('window').width,
        resizeMode: "cover",
        backgroundColor: '#A87451',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        height: 200,
        
    },
    questionTitle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    questionText:{
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
    },
    answerBlock:{
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F2F2F2', marginTop: 10
    },
    answerTitle:{
        flex: 1, paddingLeft: 10, paddingTop: 17,
    },
    answerBox:{
        flex: 1, paddingLeft: 10,
    },

    topImage:{
        width: Dimensions.get('window').width,
        resizeMode: "cover",
        height: 211,
    },
    topBar:{
        padding: 32,
        backgroundColor: 'white',
        position: 'absolute',
        width: Dimensions.get('window').width,
        marginTop: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textBar:{
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22,
    },
    subtitle:{
        fontWeight: '400',
        marginBottom: 10,
    },
    greyButton:{
        backgroundColor: '#3F494B',
        marginTop: 50,
    }

  });
  
  export default questionScreen;