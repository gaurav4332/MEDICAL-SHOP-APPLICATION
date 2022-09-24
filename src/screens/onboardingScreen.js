import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {black} from 'react-native-paper/lib/typescript/styles/colors';

const onBoardingScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor="white" barStyle="light-content" />

      <Onboarding
        //onSkip={() => navigation.navigate("enterNumber")}
        onDone={() => navigation.navigate('loginScreen')}
        skipLabel
        false
        showSkip
        false
        nextLabel
        false
        bottomBarColor={'transparent'}
        pages={[
          {
            backgroundColor: '#D1EEEE',
            image: (
              <Image
                source={require('../../assets/images/onboardingImg/onboard1.png')}
                style={{
                  width: 191,
                  height: 185,
                }}
              />
            ),
            title: 'One Stop Medicinal Product App',
            titleStyles: {
              color: 'black',
              fontFamily: 'Lato-Regular',
              fontSize: 24,
              fontWeight: '600',
            },
            subtitle: '',
            subTitleStyles: {
              color: 'black',
              fontFamily: 'AvertaDemoPECuttedDemo',
              fontSize: 16,
              fontWeight: '400',
            },
          },
          {
            backgroundColor: '#D4FFE7',
            image: (
              <Image
                source={require('../../assets/images/onboardingImg/onboard2.png')}
                style={{
                  width: 348,
                  height: 218,
                }}
              />
            ),
            title: 'Know your Medicines',
            titleStyles: {
              color: 'black',
              fontFamily: 'Lato-Regular',
              fontSize: 24,
            },
            subtitle: '',
            subTitleStyles: {
              color: 'black',
              fontFamily: 'AvertaDemoPECuttedDemo',
              fontSize: 16,
            },
          },
          {
            backgroundColor: '#FFD9D9',
            image: (
              <Image
                source={require('../../assets/images/onboardingImg/onboard3.png')}
                style={{
                  width: 328,
                  height: 272,
                }}
              />
            ),
            title: 'Delivery at your DoorStep',
            titleStyles: {
              color: 'black',
              fontFamily: 'Lato-Regular',
              fontSize: 24,
            },
            subtitle: '',
            subTitleStyles: {
              color: 'black',
              fontFamily: 'AvertaDemoPECuttedDemo',
              fontSize: 16,
            },
          },
        ]}
      />
    </View>
  );
};

export default onBoardingScreen;
