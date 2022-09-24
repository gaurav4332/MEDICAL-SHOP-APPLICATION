import React from 'react';

import {View, Image, Text, StatusBar, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
const width_screen = width;

const splashScreen = ({navigation}) => {
  setTimeout (() => {
      navigation.navigate('loginScreen');
             // <-- This is the View you go
    }, 4000);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#F8FCFF',
      }}>
      <StatusBar backgroundColor="white" barStyle="light-content" />

      <Text
        style={{
          fontFamily: 'Lato-Regular',
          color: '#a80505',
          fontSize: 30,
          fontWeight: 'bold',
          elevation: 3,
          marginTop: 50,
        }}>
        WELCOME
      </Text>
      {/* <Text
           style={{
               fontFamily: 'Hellix',
               color: '#0D4580',
               fontSize: 18,
           }}
           >Requirement</Text> */}
      <Image
        source={require('../../assets/images/splashScreenImg/splash.png')}
        style={{
          width: width_screen,
          height: 437,
          //   marginTop: 50,
          bottom: 0,
          position: 'absolute',
        }}
      />
    </View>
  );
};

export default splashScreen;
