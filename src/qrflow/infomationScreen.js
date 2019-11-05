import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,Dimensions} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const SCREEN_WIDTH = Dimensions.get("window").width;



class informationScreen extends Component {


    constructor(props){
        super(props);
      } 
    
    output = this.props.navigation.getParam('output');


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
                <Text style={styles.text}>De vuursalamander is een landbewonende salamander die behoort tot de familie echte salamanders (Salamandridae).

Hij is een van de grootste Europese amfibieën en heeft een onmiskenbaar kleurpatroon; een zwarte kleur met gele vlekken en strepen.
</Text>
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
    },
    subtitle:{
        color: 'red',
    }

  });
  
  export default informationScreen;