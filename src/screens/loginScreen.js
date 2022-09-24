import React from 'react';

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {color} from 'react-native-reanimated';

const loginScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
      }}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      <TouchableOpacity
        onPress={() => navigation.navigate('enterNumber')}
        style={
          {
            //   padding: 5,
            //   backgroundColor: 'blue',
          }
        }>
        <Text
          style={{
            textAlign: 'right',
            color: '#e58200',
            fontSize: 16,
          }}>
          Skip
        </Text>
      </TouchableOpacity>
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
            marginTop: 16,
            marginLeft: 8,
          }}>
          Sign in to continue
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <Text
            style={{
              color: '#2d2828',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            +91
          </Text>
        </View>
        <TextInput
          // value={phone}
          // onChangeText={value => setPhone(value)}
          style={styles.input}
          maxLength={10}
          //onPress={submitNo}
          keyboardType="numeric"
          placeholder="Enter your 10-digit mobile number..."
          placeholderTextColor="#707070"
        />
      </View>

      <TouchableOpacity
        style={{
          width: 310,
          hieght: 39,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('otpScreen')}
        >
        <LinearGradient
          colors={['#FF8585', '#B73535']}
          style={styles.verificationButton}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
            }}>
            Get a verfication code
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 60,
        }}>
        <Text
          style={{
            //   fontFamily: ''
            color: '#2d2828',
            fontSize: 11,
            textAlign: 'center',
          }}>
          OR
        </Text>
        <Text
          style={{
            //   fontFamily: ''
            color: '#959292',
            fontSize: 15,
            textAlign: 'center',
          }}>
          Sign in with
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: 18,
          //   backgroundColor: 'pink',
          width: 180,
          justifyContent: 'space-around',
          padding: 5,
        }}>
        <Image
          source={require('../../assets/images/loginImg/facebook.png')}
          style={{
            width: 56,
            height: 56,
          }}
        />
        <Image
          source={require('../../assets/images/loginImg/google.png')}
          style={{
            width: 56,
            height: 56,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            //   fontFamily: ''
            color: '#2d2828',
            fontSize: 13,
            textAlign: 'center',
            marginTop: 18,
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
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 15,
    width: 354,
    height: 54,
    //borderColor: '#ccc',
    borderRadius: 2,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 1,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 60,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
  },
  verificationButton: {
    padding: 10,
    width: 310,
    hieght: 39,
    borderRadius: 5,
  },
});
