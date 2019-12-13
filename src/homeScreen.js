import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground, StatusBar, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { Header, Icon,Button,Rating, AirbnbRating  } from 'react-native-elements';
import Spots, { spots } from './spots/spots';
import SafeAreaView from 'react-native-safe-area-view';



class homeScreen extends Component {


    render() {
      const width = {
       width: (Dimensions.get('window').width / 2),
      };
      return (
        <ScrollView>
        <SafeAreaView>
           
          <View style={styles.cards}>
            <View style={styles.leftcolum}>
              <Text style={styles.title}>Eijsden-margraten</Text>
              <Text style={styles.undertitle}>4km - 5km - 7km</Text>
              <Image source={require('./assets/images/stars.png')} style={styles.stars}/>

              <Button buttonStyle={{
                        backgroundColor: '#3F494B',
                        marginTop: 40,
                        borderRadius: 50,
                    }} title="Bekijk"
                    onPress={() => this.props.navigation.navigate('#', {})}
                    />

            </View>
            <View style={styles.rightcolum}>
              <Image source={require('./assets/goverments/eijsden-margraten/logo_gemeente_eijsdenmargraten.png')} />
            </View>

          </View>

          <View style={[styles.cards, styles.valkenburg]}>
            <View style={styles.leftcolum}>
              <Text style={styles.title}>Valkenburg</Text>
              <Text style={styles.undertitle}>4km - 5km - 7km</Text>
              <Image source={require('./assets/images/stars.png')} style={styles.stars}/>

              <Button buttonStyle={{
                        backgroundColor: '#3F494B',
                        marginTop: 40,
                        borderRadius: 50,
                    }} title="Bekijk"
                    onPress={() => this.props.navigation.navigate('Location', {})}
                    />

            </View>
            <View style={styles.logoValkenburg}>
              <Image source={require('./assets/goverments/valkenburg/valkenburg.png')} />
            </View>

          </View>

          <View style={[styles.cards, styles.gulpen]}>
            <View style={styles.leftcolum}>
              <Text style={styles.title}>Gulpen</Text>
              <Text style={styles.undertitle}>4km - 5km - 7km</Text>
              

              <Button buttonStyle={{
                        backgroundColor: '#007629',
                        marginTop: 50,
                        borderRadius: 50,
                    }} title="Coming soon"
                    onPress={() => this.props.navigation.navigate('#', {})}
                    />

            </View>
            <View style={styles.logoGulpen}>
              <Image source={require('./assets/goverments/gulpen/gulpen-wittem.png')} />
            </View>

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
      marginTop: 20,
      marginRight: 10,
      marginLeft: 10,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    stars:{
      marginTop: 10,
    },
    leftcolum:{
      width: '50%',
    },
    rightcolum:{
      width: '50%',
      paddingTop:30,
      paddingLeft:10,
    },
    title:{
      fontSize: 17,
      color: '#fff',
      marginTop: 5,
      fontWeight: '800',
    },
    undertitle:{
      fontSize: 12,
      color: '#fff',
      fontWeight: '200',
    },
    button:{
      backgroundColor: '#3F494B',
      borderRadius: 22,
      marginTop: 20,
    },
    valkenburg:{
      backgroundColor: '#A58657',
    },
    gulpen:{
      backgroundColor: '#EBC285',
    },
    logoValkenburg:{
      width: '50%',
      paddingTop:5,
      paddingLeft:10,
    },
    logoGulpen:{
      width: '50%',
      paddingTop:15,
      paddingLeft:10,
    }
   
  });
  
  export default homeScreen;