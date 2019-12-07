import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const SCREEN_WIDTH = Dimensions.get("window").width;



class controlScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
            correct: {
                image: require('../assets/images/all/check.png'),
                title: 'Goed gedaan!',
                text: 'De vuursalamander is een landbewonende salamander die behoort tot de familie echte salamanders (Salamandridae).',
                buttonText: 'Volgende',
                backgroundColor: '#32A067',
            },
            fail: {
                image: require('../assets/images/all/fail.png'),
                title: 'Helaas, probeer nog eens!',
                text: 'De vuursalamander is een landbewonende salamander die behoort tot de familie echte salamanders (Salamandridae).',
                buttonText: 'Opnieuw',
                backgroundColor: '#9D7453',
            },
            result: false,

        }
      } 

      good = 2;  

      componentWillMount(){
        result = this.props.navigation.getParam('result');
        if(this.good === result){
          this.setState({result: true});
        }
      }
    
    
   
    





  render() {

    const backgroundColorCorrect = {
        backgroundColor: this.state.correct.backgroundColor,
    };
    const backgroundColorFail = {
        backgroundColor: this.state.fail.backgroundColor,
    };

    this.result = this.checkAnswer;



      return (
        <ScrollView>
          <SafeAreaView>
              <View style={[styles.container, this.state.result ? backgroundColorCorrect : backgroundColorFail]}>
                <Image source={this.state.result ? this.state.correct.image : this.state.fail.image} />
                <Text style={styles.title}>{this.state.result ? this.state.correct.title : this.state.fail.title}</Text>
                <Text style={styles.text}>{this.state.result ? this.state.correct.text : this.state.fail.text}</Text>
                <Button buttonStyle={{
                    backgroundColor: '#D1A96E',
                    marginTop: 50,
                    borderRadius: 50,
                    paddingLeft:20,
                    paddingRight: 20,
                    textAlign: 'center',
                    marginBottom: 100,
                }} title={this.state.result ? this.state.correct.buttonText : this.state.fail.buttonText}
                onPress={() => this.props.navigation.navigate('Correct', {})}
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
        paddingTop: 40,
    },
    title:{
        color: '#fff',
        fontSize: 18,
        fontWeight: "800",
        marginTop: 70,
    },
    text:{
        color: '#fff',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center",
    } 
    
  });
  
  export default controlScreen;