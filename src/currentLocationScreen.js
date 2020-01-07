import React, {Component} from 'react';

import { Header, Icon,Button,Rating, AirbnbRating  } from 'react-native-elements';
import Spots, { spots } from './spots/spots';
import SafeAreaView from 'react-native-safe-area-view';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  ScrollView
} from "react-native";
import MapView, {Marker,} from "react-native-maps";


class currentLocationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 50.964293399999995,
      longitude: 5.763979099999999,
      error: null,

    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      })
    });
  }

    render() {

      return (

          <View style={styles.container}>
          <MapView
          style={styles.map}
          showsUserLocation={true}
         
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >
          <Marker coordinate={this.state} />
        </MapView>

          </View>
    
          


      );
    }
  }

  const styles = StyleSheet.create({

    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "flex-end",
      alignItems: "center"
    },
    map: {
      ...StyleSheet.absoluteFillObject
    },
    bubble: {
      flex: 1,
      backgroundColor: "rgba(255,255,255,0.7)",
      paddingHorizontal: 18,
      paddingVertical: 12,
      borderRadius: 20
    },
    latlng: {
      width: 200,
      alignItems: "stretch"
    },
   
  });
  
  export default currentLocationScreen;