import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';
import SafeAreaView from 'react-native-safe-area-view';
import { Avatar, Divider, List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {reviews} from './spots/reviews';


class profileScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: []
    }
  }

  

  getUserData = () => {
    let ref = firebase.database().ref('Users');
    ref.on('value' , snapshot =>{
      const state = snapshot.val();
      this.setState({users: state});
    })
   
  }

  componentDidMount(){
    this.getUserData();
  }

  render() {
    const {users} = this.state;
    let username = 'MeijersNL';

      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.container}>
        <Avatar
        rounded
        size="xlarge"
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
     
          />
          <View>
          {
            users
            .map((user, i) =>

              <View style={styles.welcome} key={i}>
              <Text style={styles.userName}>{user.Naam}</Text>
              <Text style={styles.user}>@{user.Gebruikersnaam}</Text>
              </View>
              
           )
          }
          </View>

          <View style={styles.information}>
            <View style={styles.block}>
              <Text>Bezocht</Text>
              <Text style={styles.counting}>24</Text>
            </View>
            <View style={styles.block}>
              <Text>Reviews</Text>
              <Text style={styles.counting}>24</Text>
            </View>
            <View style={styles.block}>
              <Text>Aantal</Text>
              <Text style={styles.counting}>24</Text>
            </View>
          </View>
        </View>
        <View>
        <Text style={styles.title}>Beoordelingen</Text>
          {
            username === 'MeijersNL' ?
            reviews.map((item, i) => (
              <ListItem
                key={i}
                title={item.name}
                subtitle={item.location}
                leftIcon={< Icon style={styles.reviews} name="map-marker" size={22} color="#d85454"/>}
                bottomDivider
                chevron
                onPress={() => this.props.navigation.navigate('Review',{key: i,name: item.name, location: item.location, subject: item.subject, desc: item.desc, date: item.date, rating: item.rating})} key={i}
              />
            ))
            : <Text>Geen reviews</Text>
          }
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
    userName:{
      fontWeight: '800',
    },
      information:{
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,

    },
    block:{
      marginLeft: 35,
      marginRight: 35,
      alignItems: 'center',
      textAlign: 'center',
    },
    counting:{
      marginTop: 10,
      fontWeight: '800',
      fontSize: 21,
    },
    title:{
      color: '#000',  
      textAlign: 'left',
      fontSize: 15,
      fontWeight: '600',
      marginTop: 30,
      marginLeft: 20,
    },
    reviews :{
      marginLeft: 10,
    }
  });
  
  export default profileScreen;