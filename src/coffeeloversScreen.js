import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button,ImageBackground, StatusBar, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { Header, Icon, ListItem, Divider, Rating } from 'react-native-elements';
import { whileStatement } from '@babel/types';
import {spots} from './spots/spots';
import {reviews} from './spots/reviews';

const list =[
  {
    title: 'www.barberistas.nl',
    icon: 'link'
  },
  {
    title: '+31 6 10 09 08 40',
    icon: 'call'
  },
  {
    title: 'info@barberistas.nl',
    icon: 'mail'
  },
  {
    title: '09.00 - 17.00 uur',
    icon: 'access-time'
  },
  {
    title: 'Keerend 9, 6171 VR Stein',
    icon: 'map'
  },
]



console.log(spots);
class CoffeeloverScreen extends Component {

    constructor(props){
      super(props);
    }    

   
    name = this.props.navigation.getParam('name');
    location = this.props.navigation.getParam('location');
    imgBack = this.props.navigation.getParam('img');

    render() {
      return (
      
          <ScrollView>
        <View style={styles.homeHead}>
          <ImageBackground source={this.imgBack} style={styles.headers}>
               <View style={styles.overlayHeaderColor}>
                  <Text style={styles.headerTitle}>{this.name}</Text>
                  <Text style={styles.headerText}>{this.location}</Text>
               </View>
           </ImageBackground>
        </View>
      
        <View style={styles.containerItems}>
        <View style={[{flexDirection:'row'}, styles.elementsContainer]}>
          <View style={{width: '50%'}}>
            <Text style={styles.headTitle}>{this.name}</Text>
            <Text style={styles.category}>Koffie &amp; lunch</Text>
            <Text style={styles.locationText}>{this.location}</Text>
          </View>
          <View style={{width: '50%', height: 50,marginLeft: '1.5%'}}>

            <Text style={styles.details}>{this.name}</Text>
            <Text style={styles.details}>{this.name}</Text>
          </View>
        </View>
      </View>


      <View>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                bottomDivider
                chevron
              />
            ))
          }
        </View>

      <View style={styles.containerInfo}>
        <Text style={styles.title}>Beschrijving</Text>
        <Text style={styles.textDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a imperdiet felis. Aenean efficitur dignissim nibh in imperdiet. Donec tincidunt augue ut felis finibus, at dapibus velit faucibus.
        </Text>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.title}>Foto's</Text>
        <ScrollView horizontal={true} style={styles.pictures}> 
        
        {
          spots.map((l,i) => {
            if(l.imagesReviews){
              
              return Object.keys(l.imagesReviews).map(key => <Image source={ l.imagesReviews[key] }></Image>)
            }
          })
        }
                  
        </ScrollView>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.title}>Beoordelingen</Text>
       
        {
          this.name === 'Barberistas' ?
          reviews.map((l, i) => (
            
          <View style={styles.reviews} key={i}>
            <Text><Text style={styles.subject}>{l.subject}</Text>, {l.date}</Text>
            <View style={styles.ratingsView}> 
            <Rating 
              type='star'
              ratingCount={5}
              imageSize={10}
              startingValue={l.Rating}
            readonly
            style={styles.rating}
            />
             <Text style={styles.userName}>{l.username}</Text>
            </View>


            <Text>{l.desc}</Text>
            <Divider style={{ backgroundColor: 'grey', marginTop: 10 }} />
          </View>
         
            ))
            : <Text>Geen reviews</Text>
        }
        
      </View>

      

      </ScrollView>

      );
    }
  }

  const styles = StyleSheet.create({
    homeHead:{
      height: 180,
      width: '100%',
    },
    pictures:{
      marginTop: 10,
    },

    container: {
      flex: 1
    },
    containerItems:{
      flex: 1,
      marginTop: 48,
    },
    containerInfo:{
      paddingLeft: 24,
      paddingBottom: 5,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      marginTop: 50,
    },
    pf:{
      width: '100%',
      height: 100,
    },  
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 15,
    },
    headers:{
      flex: 1,
    
    },
    overlayHeaderColor:{
      backgroundColor: 'rgba(0,0,0,0.6)',
      height: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerTitle:{
      color: '#fff',  
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: '800'
    },
    headerText:{
      color: '#fff',  
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: '200'
    },
    homeText:{
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    title:{
      color: '#000',  
      textAlign: 'left',
      fontSize: 18,
      fontWeight: '800',
      marginTop: 20,
    },
    subTitle:{
      color: '#000',  
      textAlign: 'left',

      fontWeight: '300',

    },
    content:{
      backgroundColor: 'white',
      paddingTop: 20,
      paddingLeft: 40,
      paddingRight: 40,
      paddingBottom: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
    },
    text:{
      marginTop: 20,

    },
    reviews:{
      marginTop: 10,
      marginRight: 15,
    },
    review:{
      marginTop: 15,
      backgroundColor: 'white',
      padding: 40,
    },
    reviewSubject:{
      fontWeight: '800',
    },
    reviewCustomer:{
      marginTop: 2,
      fontWeight: '200',
    },
    reviewDescription:{
      marginTop: 5,
    },
    headerStyle: {
      fontSize: 36,
      textAlign: 'center',
      fontWeight: '100',
      marginBottom: 24
    },
    elementsContainer: {
      flex: 1,
      marginLeft: 24,
      marginRight: 24,
      marginBottom: 24
    },
    headTitle:{
      fontWeight: '800',
      fontSize: 18,
    },
    category:{
      fontWeight: '200',
      marginTop: 18,
    },
    locationText:{
      fontWeight: '200',
      marginTop: 5,
    },
    details:{
      textAlign: "right",
    },
    textDesc: {
      marginTop: 10,
      paddingRight: 15,
    },
    subject:{
      fontWeight: '600'
    },
    rating:{
      marginTop: 5,
      marginBottom: 5,
      alignItems: 'flex-start',
    },
    ratingsView:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
 
    },
    userName:{
      marginLeft: 10,
      marginTop: 2.5
    }
  });
  
  export default CoffeeloverScreen;