import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,Dimensions} from 'react-native';
import { Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationEvents } from 'react-navigation';
import { thisExpression } from '@babel/types';

const SCREEN_WIDTH = Dimensions.get("window").width;


class informationScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
            buttonView: false,
            
        }
      } 



  render() {

      return (
        <ScrollView>
          <SafeAreaView>
            <View>
                <Image style={styles.topImage} source={require('../assets/images/animals/dummy-image.jpg')} />
            </View>
            <View style={styles.topBar}>
                
            </View>
            <View style={styles.textBar}>
            <Text style={styles.title}>Vuursalamander</Text>
                <Text style={styles.subtitle}>(Ook wel goudsalamander genoemd)</Text>
                <Text style={styles.text}>
                    De vuursalamander is een landbewonende salamander die behoort tot de familie echte salamanders (Salamandridae).
                    Hij is een van de grootste Europese amfibieën en heeft een onmiskenbaar kleurpatroon; een zwarte kleur met gele vlekken en strepen.
                </Text>

                    <Button buttonStyle={{
                        backgroundColor: '#3F494B',
                        marginTop: 50,
                        borderRadius: 50,
                    }} title="Start quiz"
                    onPress={() => this.props.navigation.navigate('Question', {})}
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
  
  export default informationScreen;