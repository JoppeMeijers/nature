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
import informationScreen from './src/qrflow/infomationScreen';

import Logo from './src/assets/images/header/logo-coffeesnipe.png';


import Icon from 'react-native-vector-icons/FontAwesome';


import {getUser} from './src/api/usersApi';
import questionScreen from './src/qrflow/questionScreen';
import controlScreen from './src/qrflow/controlScreen';
import homeScreen from './src/homeScreen';


console.log(getUser);

const HomeStack = createStackNavigator({

    Home: {
      screen: homeScreen,
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

  const QrStack = createStackNavigator({

    Scan: {
        screen: ScanScreen,
        navigationOptions: {
          headerTitle: <Image source={Logo} />,
          headerStyle: {
            backgroundColor: '#7E4338',
    
          },
      
         
         
          //header: null //this will hide the header
        },
      },
    Information: {
        screen: informationScreen,
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
      },
    Question: {
          screen: questionScreen,
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
        },
          Control: {
                screen: controlScreen,
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
              },
      
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
          tabBarLabel:"Overzicht",
          tabBarIcon: ({ tintColor }) => (
              < Icon  name="home" size={22} color="#000"/>
             )
      }),
      header: null //this will hide the header
  
    },
    Location: {
      screen: LocationScreen,
      navigationOptions:({navigation})=>({
         tabBarLabel:"Routes",
          tabBarIcon: ({ tintColor }) => (
          < Icon  name="map" size={22} color="#000"/>
          )
      ,
        headerTitle: <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#7E4338',
  
        },
      })
    },
    Scan: {
        screen: QrStack,
        navigationOptions:({navigation})=>({
           tabBarLabel:"Scan",
            tabBarIcon: ({ tintColor }) => (
            < Icon  name="qrcode" size={22} color="#000"/>
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
          tabBarLabel:"Account",
          tabBarIcon: ({ tintColor }) => (
            <Icon  name="user" size={22} color="#000"/>
          )
        }
      },
    Settings: {
          screen: ScanScreen,
          navigationOptions:({navigation})=>({
             tabBarLabel:"Instellingen",
              tabBarIcon: ({ tintColor }) => (
              < Icon  name="cog" size={22} color="#000"/>
              )
          ,
            headerTitle: <Image source={Logo} />,
            headerStyle: {
              backgroundColor: '#7E4338',
      
            },
          })
        },
  },{
    initialRouteName: 'Home'
  });


  export default createAppContainer(AppNavigator);