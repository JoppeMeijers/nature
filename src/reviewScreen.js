import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Avatar, Divider,Button, List, ListItem, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




class reviewScreen extends Component {
  constructor(props){
    super(props);
    this.state ={
      users: []
    }
  }

  name = this.props.navigation.getParam('name');
  location = this.props.navigation.getParam('location');
  subject = this.props.navigation.getParam('subject');
  desc = this.props.navigation.getParam('desc');
  date = this.props.navigation.getParam('date');
  rating = this.props.navigation.getParam('rating');

  
  render() {
    const {users} = this.state;
    let username = 'MeijersNL';

      return (
        <ScrollView>
          <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.locationName}>{this.name}</Text>  
          <Text style={styles.date}>{this.date}</Text>
           <Rating type='star' ratingCount={5} imageSize={10} startingValue={this.rating} readonly style={styles.rating} />

             <Divider style={styles.divider} />
              <Text style={styles.subjectName}>{this.subject}</Text>
            <Text>{this.desc}</Text>

            <Divider style={styles.divider} />
            <View style={styles.locationDetails}>
            <Text style={styles.location}> <Icon name="map-marker" size={18} color="#d85454" /> {this.location}</Text>
            <Text style={styles.right}>Routebeschrijving  <Icon name="arrow-right" size={13} color="#0000FF" /> </Text>
            </View>
            <Button style={styles.changeButton}  title="Bewerk review" />
            <Button style={styles.changeButton}  title="Voeg foto toe" />
        </View>
        </SafeAreaView>
      </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 20,
    },
    rating:{
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'flex-start',
      },
    divider:{
      backgroundColor: 'grey',
      marginTop: 15,
      marginBottom: 15,
    },
    locationName:{
      fontWeight: '800',
      fontSize: 21
    },
    date:{
      fontStyle: 'italic',
      marginTop: 5,
      fontWeight: '300',
    },
    subjectName:{
      fontWeight: '600',
      fontSize: 16,
      marginBottom: 5,
    },
    changeButton:{
      marginTop: 10,
    },
    locationDetails:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 1,
    },
    location:{
      fontSize: 15,
      fontWeight: '600',
      marginTop: 5,
      marginBottom: 40,
    },
    right:{
     marginLeft: 70,
      marginTop: 5,
      color: '#0000FF'
    }
  });
  
  export default reviewScreen;