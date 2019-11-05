import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button,ImageBackground, StatusBar, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Spots, { spots } from './spots/spots';


class homeScreen extends Component {


    render() {
      const width = {
       width: (Dimensions.get('window').width / 2),
      };
      return (
      
        <ImageBackground source={require('./assets/images/all/background-app.jpg')} style={styles.container}>
             <ScrollView >
      
        <View style={styles.homeHead}>
          <ImageBackground source={require('./assets/images/header/home-coffee.jpg')} style={styles.headers}>
               <View style={styles.overlayHeaderColor}>
                  <Text style={styles.headerText}>Trek in een bakkie?</Text>
               </View>
           </ImageBackground>
        </View>
        <View style={styles.buttons}>
          <View style={[styles.buttonLeft, width]}>
              <Image source={require('./assets/images/all/discount-icon.png')} style={styles.icons} />
              <Text style={styles.buttonText}>Aanbiedingen</Text>
          </View>
          <View style={[styles.buttonRight, width]}>
          <Image source={require('./assets/images/all/thumb-up-icon.png')} style={styles.icons} />
            <Text style={styles.buttonText}>Best beoordeeld</Text>
          </View>
        </View>

        <View>  
          <Text style={styles.headText}>SCROLL DOWN</Text>
        </View>
      
        <View style={styles.snipes}>
          {
            spots.map((l,i) =>(
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Snipe',{key: i,name: l.name, location: l.location, img: l.img_url})} key={i}>  
            <ImageBackground source={l.img_url}  style={[styles.snipe, width]} >
                <View  style={styles.snipeOverlay} key={i}>
                  <Text style={styles.snipeText}>{l.name}</Text>
                  <Text style={styles.snipeText}>{l.location}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>   
           
           ))
           }  
          </View>
          
        </ScrollView>
      </ImageBackground>
    

      );
    }
  }

  const styles = StyleSheet.create({
    contentContainer:{
      flex: 1
  },
    container: {
      marginTop: Platform.OS === 'ios' ? 0 : - 30,
      backgroundColor: '#F5FCFF',
    },
    headerAll:{
      backgroundColor: '#7E4338',
    },
    homeHead:{
      height: 180,
      width: '100%',
    },
    headers:{
      flex: 1,
    
    },
    homeButtons:{
      backgroundColor: '#fff',
      height: 100,
      width:'50%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      bottom: 0,
    },  
    homeText:{
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    overlayHeaderColor:{
      backgroundColor: 'rgba(126,67,56,0.6)',
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlayColor:{
      backgroundColor: 'rgba(0,0,0,0.6)',
      height: '100%',
      
      justifyContent: 'center',
      alignItems: 'center',
    },
   headerText:{
      color: '#fff',  
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: '200',
      fontStyle: 'italic',
  
    },

    snipes:{
   
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    snipe:{
      height: Platform.OS === 'android' ? 180 : 190,

    },  
    snipeOverlay:{
      backgroundColor: 'rgba(0,0,0,0.6)',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    snipeText:{
      color: '#fff',  
      textAlign: 'center',
    },

    buttons:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1
    },
    buttonLeft:{
      height: 100,
      backgroundColor: 'white',
      borderColor: '#707070',
      borderStyle:'solid',
      borderWidth: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 30,
  
    },
    buttonRight:{
      height: 100,
      backgroundColor: 'white',
      borderColor: '#707070',
      borderStyle:'solid',
      borderWidth: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 30,
  
    },
    buttonText:{
      fontSize: 13,
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 30,
    },
    headText:{
      fontSize: 13,
      textAlign: 'center',
      fontWeight: '800',
      marginTop: 35,
      marginBottom: 35,
    },
    icons:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      marginTop: 50,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 15,
    },
    button: {
  
    }
  });
  
  export default homeScreen;