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
            answerOne : false,
            answerTwo: false,
            answerThree: false,
        }
      } 
    
    output = this.props.navigation.getParam('output');


  render() {

      return (
        <ScrollView>
          <SafeAreaView>
            <View style={styles.questionArea}>
            <Text style={styles.questionTitle}>Vraag 1</Text>
                <Text style={styles.questionText}>
                Hoe oud kan een vuursalamander uiterlijk worden?
                </Text>
            </View>
            <View style={styles.topBar}>
                
            </View>
            <View style={styles.textBar}>
            <Text style={styles.title}>Antwoorden:</Text>
                <CheckBox
                    center
                    title='Antwoord 1'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    iconRight
                    checked={this.state.answerOne}
                    onPress={() => this.setState({answerOne: this.state.answerOne ? false : true}) }
                    />
                <CheckBox
                    center
                    title='Antwoord 2'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    iconRight
                    checked={this.state.answerTwo}
                    onPress={() => this.setState({answerTwo: this.state.answerTwo ? false : true}) }
                />
                <CheckBox
                    left
                    title='Antwoord 3'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    iconRight
                    te
                    checked={this.state.answerThree}
                    onPress={() => this.setState({answerThree: this.state.answerThree ? false : true}) }
                />
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