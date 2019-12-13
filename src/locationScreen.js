import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image,Dimensions} from 'react-native';
import { Button, Icon, CheckBox } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { NavigationEvents } from 'react-navigation';
import { thisExpression } from '@babel/types';

const SCREEN_WIDTH = Dimensions.get("window").width;


class locationScreen extends Component {


    constructor(props){
        super(props);
        this.state = {
            buttonView: false,
            checkBoxOne: false,
            checkBoxTwo: false,
            checkBoxThree: false,
            
        }
      } 



  render() {

      return (
        <ScrollView>
          <SafeAreaView>
            <View>
                <Image style={styles.topImage} source={require('./assets/goverments/valkenburg/valkenburg-groot.jpg')} />
            </View>
            <View style={styles.topBar}>
                
            </View>
            <View style={styles.textBar}>
              <View style={styles.icons}>
            <Icon size={40}  name='info' color='#AF925E' style={styles.icon}/><Icon size={40}  name='play-circle-filled' color='#D7B475' style={styles.icon}/>
            </View>
            <Text style={styles.title}>Gemeente Valkenburg</Text>
                <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
              gravida ullamcorper leo, at tincidunt  erat consectetur in. Ut a
              lorem aliquam,
                </Text>

             
            <Text style={styles.title}>Routes:</Text>
            <View style={styles.answerBlock}>
                    <Text style={styles.answerTitle}>4 kilometer</Text>
                    <CheckBox
                        style={styles.answerBox}
                        right
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        iconRight
                        checked={this.state.checkBoxOne}
                        onPress={() => this.props.navigation.navigate('Scan', {result: 1})}
                    />
                </View>
                <View style={styles.answerBlock}>
                    <Text style={styles.answerTitle}>5 kilometer</Text>
                    <CheckBox
                        style={styles.answerBox}
                        right
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        iconRight
                        checked={this.state.checkBoxTwo}
                        onPress={() => this.props.navigation.navigate('Scan', {result: 2})}
                    />
                </View>
                <View style={styles.answerBlock}>
                    <Text style={styles.answerTitle}>7 kilometer</Text>
                    <CheckBox
                        style={styles.answerBox}
                        right
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        iconRight
                        checked={this.state.checkBoxThree}
                        onPress={() => this.props.navigation.navigate('Scan', {result: 3})}
                    />
                </View>


           
             
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
        backgroundColor: 'white',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 10,
    },
    subtitle:{
        fontWeight: '400',
        marginBottom: 10,
    },
    greyButton:{
        backgroundColor: '#3F494B',
        marginTop: 50,
    },
    icon:{
      textAlign: 'left',
    },
    icons:{
      flexDirection:'row',

    },
    answerBlock:{
      flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F2F2F2', marginTop: 10
  },
  answerTitle:{
      flex: 1, paddingLeft: 10, paddingTop: 17,
  },
  answerBox:{
      flex: 1, paddingLeft: 10,
  },

  });
  
  export default locationScreen;