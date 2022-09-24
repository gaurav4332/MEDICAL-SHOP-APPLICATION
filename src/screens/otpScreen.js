import React, {useState} from 'react';

import {View, Text, StyleSheet, Image, StatusBar, TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

const otpScreen = ({navigation}) => {
//   const [ootp, setOtp] = useState('');
  return (
      <>
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <Image
        source={require('../../assets/images/loginImg/on.png')}
        style={{
          width: 310,
          height: 207,
          alignSelf: 'center',
        }}
      />
      <View>
        <Text
          style={{
            fontSize: 19,
            color: '#2d2828',
            marginTop: 25,
            marginLeft: 8,
          }}>
          Sign in to continue
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            color: '#2d2828',
            marginTop: 20,
            marginLeft: 8,
          }}>
          Enter the one time One Time Password we have to you
        </Text>
      </View>
      
      <OTPInputView
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#F8FCFF',
          alignSelf: 'center',
          padding: 10,
          marginTop: 60,
        }}
        pinCount={6}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged={code => {
        //   setOtp({code});
        // }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />
       <TouchableOpacity
        style={{
          width: 310,
          hieght: 39,
          alignSelf: 'center',
          marginTop: 50
        }}
        onPress={() => navigation.navigate('bottomTab')}
        >
        <LinearGradient
          colors={['#FF8585', '#B73535']}
          style={styles.verificationButton}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            SIGN IN
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            //   fontFamily: ''
            color: '#2d2828',
            fontSize: 13,
            textAlign: 'center',
            marginTop: 70,
          }}>
          by signing in you agree to our
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              //   fontFamily: '
              color: '#b73535',
              fontSize: 13,
              textAlign: 'center',
              marginTop: 5,
            }}>
            terms and condition
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default otpScreen;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
  },
  verificationButton: {
    padding: 10,
    width: 310,
    hieght: 39,
    borderRadius: 5,
  },
});
