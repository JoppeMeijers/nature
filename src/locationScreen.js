import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView, Alert} from 'react-native';
import RNShake from 'react-native-shake';
import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';


class locationScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      quoteText: 'What goes best with a cup of coffee? Another cup',
      person:'Henry Rollins',
    }
  }

  componentWillMount() {
    RNShake.addEventListener('ShakeEvent', () => {
      this.setState({quoteText:'My birthsone is a coffee bean.', person: 'Raoul Frissen'});
    });
  }
 
  componentWillUnmount() {
    RNShake.removeEventListener('ShakeEvent');
  }



  render() {
      return (
        <SafeAreaView>
        <ScrollView>
          
        <View style = {{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    marginTop: 300,
   }
  } >
  < View style = {styles.iconView}>
  < Icon style={styles.reviews} name="coffee" size={80} color="#696969"/>
  </View>
  < View style = {styles.quote} >
    <Text style={styles.quoteText}>{this.state.quoteText} </Text>
  </View>
  < View style = {styles.person} >
    <Text style = {styles.personText}>- {this.state.person}</Text>
  </View>
 </View>
      </ScrollView>
      </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      marginTop: 300,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 15,
    },
    column:{
      flexDirection: 'column-reverse',
    },
    iconView:{
      paddingLeft: 20,
    },
    quote:{
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 40,
    },
    quoteText:{
      fontSize: 40,
      fontWeight: '800'
    },
    person:{
      marginTop: 30,
      paddingLeft: 20,
    },
    personText:{
      fontStyle: 'italic',
      fontSize: 18
    }
  });
  
  export default locationScreen;