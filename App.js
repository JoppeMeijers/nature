import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './src/homeScreen';
import LocationScreen from './src/locationScreen';
import CoffeeScreen from './src/coffeeloversScreen';
import ProfileScreen from './src/profileSceen';
import ReviewScreen from './src/reviewScreen';
import ScanScreen from './src/qrScreen';

import IconHome from './src/assets/images/home.png'
import IconLocation from './src/assets/images/location.png'

import Logotitle from './src/components/logo';
import Logo from './src/assets/images/header/logo-coffeesnipe.png';


import Icon from 'react-native-vector-icons/FontAwesome';


import {getUser} from './src/api/usersApi';


console.log(getUser);

const HomeStack = createStackNavigator({

    Home: {
      screen:ScanScreen,
      navigationOptions: {
        headerTitle: <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#7E4338',
  
        },
    
       
       
        //header: null //this will hide the header
      },
    },
    Snipe: {
      screen: CoffeeScreen,
      navigationOptions:{
          headerTitle: <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#7E4338',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    }
  });

  const ProfileStack = createStackNavigator({

    User: {
        screen: ProfileScreen,
        navigationOptions: {
          headerTitle: <Image source={Logo} />,
          headerStyle: {
            backgroundColor: '#7E4338',
    
          },
      
         
         
          //header: null //this will hide the header
        },
      },
    Review: {
          screen: ReviewScreen,
          navigationOptions:{
              headerTitle: <Image source={Logo} />,
            headerStyle: {
              backgroundColor: '#7E4338',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }
        }

    });
  
  const AppNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeStack,
      navigationOptions:({navigation})=>({
          tabBarLabel:"Home",
          tabBarIcon: ({ tintColor }) => (
              < Icon  name="home" size={22} color="#000"/>
             )
      }),
      header: null //this will hide the header
  
    },
    Location: {
      screen: LocationScreen,
      navigationOptions:({navigation})=>({
         tabBarLabel:"Locaties",
          tabBarIcon: ({ tintColor }) => (
          < Icon  name="map-marker" size={22} color="#000"/>
          )
      ,
        headerTitle: <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#7E4338',
  
        },
      })
    },
    Scan: {
        screen: ScanScreen,
        navigationOptions:({navigation})=>({
           tabBarLabel:"Locaties",
            tabBarIcon: ({ tintColor }) => (
            < Icon  name="map-marker" size={22} color="#000"/>
            )
        ,
          headerTitle: <Image source={Logo} />,
          headerStyle: {
            backgroundColor: '#7E4338',
    
          },
        })
      },
    Profile: {
        screen: ProfileStack ,
        navigationOptions:{
          tabBarLabel:"Profiel",
          tabBarIcon: ({ tintColor }) => (
            <Icon  name="user" size={22} color="#000"/>
          )
        }
      },
  },{
    initialRouteName: 'Home'
  });


  export default createAppContainer(AppNavigator);