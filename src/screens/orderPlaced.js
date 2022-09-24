import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Rating, AirbnbRating} from 'react-native-ratings';
const orderPlacedScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF3F3',
        padding: 20,
        // alignItems: 'center',
        // alignContent: 'center'
      }}>
      <View
        style={{
          width: 356,
          height: 147,
          alignSelf: 'center',
          backgroundColor: 'white',
          elevation: 2,
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 21,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          THANK YOU!
        </Text>
        <Image
          style={{
            width: 62,
            height: 62,
            alignSelf: 'center',
            marginTop: 10,
          }}
          source={require('../../assets/images/icons/greenRight.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Your order have been placed successfully
        </Text>
      </View>
      <View
        style={{
          // backgroundColor: 'green',
          marginTop: 50,
        }}>
        <TouchableOpacity
          style={{
            width: 356,
            height: 40,
            alignSelf: 'center',
            marginTop: 20,
            // backgroundColor: 'pink'
          }}
          onPress={() => navigation.navigate('deliveryTrackingScreen')}>
          <LinearGradient
            colors={['#EBEBEB', '#EBEBEB']}
            style={styles.verificationButton}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
              }}>
              Track Your Order
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 356,
            height: 40,
            alignSelf: 'center',
            marginTop: 20,
          }}
          onPress={() => navigation.navigate('homeScreen')}>
          <LinearGradient
            colors={['#FF8585', '#B73535']}
            style={styles.verificationButton2}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              Back To Home
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 356,
          height: 216,
          alignSelf: 'center',
          backgroundColor: 'white',
          elevation: 2,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <Image
          style={{
            width: 62,
            height: 62,
            alignSelf: 'center',
            marginTop: 10,
          }}
          source={require('../../assets/images/icons/groupedStars.png')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Rate our App
        </Text>
        <AirbnbRating
          size={20}
          // count={11}
          style={{paddingVertical: 10}}
        />
        <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-around',
          // backgroundColor: "red",
          width: 200
        }}
        >
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
             Not now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: 'black',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default orderPlacedScreen;

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
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#434343',
  },
  verificationButton2: {
    padding: 10,
    width: 310,
    hieght: 39,
    borderRadius: 5,
    alignSelf: 'center',
  },
});
