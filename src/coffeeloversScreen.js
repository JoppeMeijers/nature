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
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
      })
    };
  }

  componentDidMount() {
    const { coordinate } = this.state;

    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };

        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };

    render() {

      return (
        <ScrollView>
        <SafeAreaView>
           
          <View>
          <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
          <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          />
        </MapView>

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
    },
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