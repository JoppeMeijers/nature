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
        <ScrollView>
        <SafeAreaView>
           
          <View style={styles.cards}>
            <Text style={styles.title}>Eijsden-margraten</Text>
            <Text style={styles.undertitle}>4km - 5km 7km</Text>

          </View>
    
          
      </SafeAreaView>
    </ScrollView>
    

      );
    }
  }

  const styles = StyleSheet.create({
    cards:{
      backgroundColor: '#D1A96E',
      borderRadius: 10,
    },
    title:{
      fontSize: 17,
      color: '#fff',
      marginTop: 5,
      fontWeight: 800,
    },
    undertitle:{
      fontSize: 12,
      color: '#fff',
      fontWeight: 200,
    }
   
  });
  
  export default homeScreen;