import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';



class informationScreen extends Component {


    constructor(props){
        super(props);
      } 
    
    output = this.props.navigation.getParam('output');


  render() {

      return (
        <ScrollView>
          <SafeAreaView>
            <Text>{this.output}</Text>
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

  });
  
  export default informationScreen;