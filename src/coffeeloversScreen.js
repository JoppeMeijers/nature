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
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

class coffeeloversScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }



    render() {

      return (

          <View style={styles.container}>
          <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude:-122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        >

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
  
  export default coffeeloversScreen;