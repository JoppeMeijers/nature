import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button,ImageBackground, StatusBar, ScrollView, Dimensions, TouchableOpacity} from 'react-native';

import Logo from '../assets/images/header/logo-coffeesnipe.png';


class LogoTitle extends Component {


    render() {
      return (
        <Image source={Logo} style={styles.logo} />
      );
    }
  }

  const styles = StyleSheet.create({
    logo:{
        resizeMode:'contain',
        flex: 1,
        width: 60, 
        height:30,
        marginLeft: Platform.OS === 'android' ? 20 : 0,
        marginTop: Platform.OS === 'android' ? 5 : 0,
    },
  });

  
  export default LogoTitle;