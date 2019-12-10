'use strict';
import React, {Component, Fragment} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View,
    Dimensions
  } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { tsConstructorType, whileStatement } from '@babel/types';
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

console.disableYellowBox = true;

  class ScanScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
          scan: false,
          ScanResult: false,
          result: null,
          restTest: 1,
      };
  }

  componentWillMount(){
    this.activeQR();
  }

  makeSlideOutTranslation(translationType, fromValue) {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  onSuccess = (e) => {
      const check = e.data.substring(0, 4);
      
      console.log('scanned data' + check);
      this.setState({
          result: e,
          scan: false,
          ScanResult: true,
      })
     
      if (check === 'httpss') {
          Linking
              .openURL(e.data)
              .catch(err => console.error('An error occured', err));


      } else {
          this.setState({
              result: e,
              scan: false,
              ScanResult: true
          })
      }
      this.props.navigation.navigate('Information',{output: check});
  }

  activeQR = () => {
      this.setState({
          scan: true
      })
  }
  scanAgain = () => {
      this.setState({
          scan: true,
          ScanResult: false
      })
  }

    render() {

      const { scan, ScanResult, result } = this.state
      return (
        <View >
        <Fragment>
            {!scan && !ScanResult &&
                <View >
                    <TouchableOpacity onPress={this.activeQR} >
                        <Text>Click to Scan !</Text>
                    </TouchableOpacity>

                </View>
            }

            {ScanResult &&
                <Fragment>
                    <Text>Result !</Text>
                    <View >
                        <Text>Type : {result.type}</Text>
                        <Text>Result : {result.data}</Text>
                        <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                        <TouchableOpacity onPress={this.scanAgain} >
                            <Text >Click to Scan again!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Information',{output: result.data})} >
                            <Text >view question!</Text>
                        </TouchableOpacity>

                    </View>
                </Fragment>
            }


            {scan &&
                <QRCodeScanner
                    reactivate={true}
                    showMarker={true}
                    ref={(node) => { this.scanner = node }}
                    cameraStyle={{ height: SCREEN_HEIGHT }}
                    onRead={this.onSuccess}
                    customMarker={
                        <View style={styles.rectangleContainer}>
                          <View style={styles.topOverlay}>
                            <Text style={{ fontSize: 22, color: "white", alignItems: "center" }}>
                                Scan de code op het informatie bord
                            </Text>
                          </View>
              
                          <View style={{ flexDirection: "row" }}>
                            <View style={styles.leftAndRightOverlay} />
              
                            <View style={styles.rectangle}>
                              <Icon
                                name="ios-qr-scanner"
                                size={SCREEN_WIDTH * 0.73}
                                color={iconScanColor}
                              />
                              <Animatable.View
                                style={styles.scanBar}
                                direction="alternate-reverse"
                                iterationCount="infinite"
                                duration={1700}
                                easing="linear"
                                animation={this.makeSlideOutTranslation(
                                  "translateY",
                                  SCREEN_WIDTH * -0.54
                                )}
                              />
                            </View>
              
                            <View style={styles.leftAndRightOverlay} />
                          </View>
              
                          <View style={styles.bottomOverlay} />
                        </View>
                      }
                />
            }
        </Fragment>
    </View>

      );
    }
  }
  
  const overlayColor = "rgba(0,0,0,0.5)"; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "transparent";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#B11D1D";

const iconScanColor = "#6195F7";


  const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      padding: 16,
    },
    rectangleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
      },
    
      rectangle: {
        height: rectDimensions,
        width: rectDimensions,
        borderWidth: rectBorderWidth,
        borderColor: rectBorderColor,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
      },
    
      topOverlay: {
        flex: 1,
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor,
        justifyContent: "center",
        alignItems: "center"
      },
    
      bottomOverlay: {
        flex: 1,
        height: SCREEN_WIDTH,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor,
        paddingBottom: SCREEN_WIDTH * 0.25
      },
    
      leftAndRightOverlay: {
        height: SCREEN_WIDTH * 0.65,
        width: SCREEN_WIDTH,
        backgroundColor: overlayColor
      },
    
      scanBar: {
        width: scanBarWidth,
        height: scanBarHeight,
        backgroundColor: scanBarColor
      }
  });
  
  export default ScanScreen;