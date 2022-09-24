import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {TextInput} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const {screen} = Dimensions.get("screen").width;

const returnOrderScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cancelContainer}>
      <Text style={styles.text}>Reason of Returning the Order</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10
          }}>
          <BouncyCheckbox
            size={15}
            fillColor="#3bb54a"
            unfillColor="#FFFFFF"
            //text="I accept the"
            iconStyle={{borderColor: '#C8C8C8', borderRadius: 0}}
            // onChangeText={() => setAgree(!agree)}
            //textStyle={{fontFamily: 'JosefinSans-Regular', color: 'black'}}
            // onPress={() => setAgree(!agree)}
            // style={{
            //   width: 15,
            //   height: 15,
            //   marginLeft: 250,
            //   marginVertical: 7,
            // }}
          />
          <Text style={styles.text2}>Item Damaged</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10
          }}>
          <BouncyCheckbox
            size={15}
            fillColor="#3bb54a"
            unfillColor="#FFFFFF"
            //text="I accept the"
            iconStyle={{borderColor: '#C8C8C8', borderRadius: 0}}
            // onChangeText={() => setAgree(!agree)}
            //textStyle={{fontFamily: 'JosefinSans-Regular', color: 'black'}}
            // onPress={() => setAgree(!agree)}
            // style={{
            //   width: 15,
            //   height: 15,
            //   marginLeft: 250,
            //   marginVertical: 7,
            // }}
          />
          <Text style={styles.text2}>Wrong Item delivered</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10
          }}>
          <BouncyCheckbox
            size={15}
            fillColor="#3bb54a"
            unfillColor="#FFFFFF"
            //text="I accept the"
            iconStyle={{borderColor: '#C8C8C8', borderRadius: 0}}
            // onChangeText={() => setAgree(!agree)}
            //textStyle={{fontFamily: 'JosefinSans-Regular', color: 'black'}}
            // onPress={() => setAgree(!agree)}
            // style={{
            //   width: 15,
            //   height: 15,
            //   marginLeft: 250,
            //   marginVertical: 7,
            // }}
          />
          <Text style={styles.text2}>Item Expired</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10
          }}>
          <BouncyCheckbox
            size={15}
            fillColor="#3bb54a"
            unfillColor="#FFFFFF"
            //text="I accept the"
            iconStyle={{borderColor: '#C8C8C8', borderRadius: 0}}
            // onChangeText={() => setAgree(!agree)}
            //textStyle={{fontFamily: 'JosefinSans-Regular', color: 'black'}}
            // onPress={() => setAgree(!agree)}
            // style={{
            //   width: 15,
            //   height: 15,
            //   marginLeft: 250,
            //   marginVertical: 7,
            // }}
          />
          <Text style={styles.text2}>Others</Text>
        </View>
        <TextInput
          // value={phone}
          //   onChangeText={value => setPhone(value)}
          mode="outlined"
          outlineColor="#C8C8C8"
          style={styles.input}
          maxLength={10}
          //onPress={submitNo}
        //   keyboardType="numeric"
          placeholder="Additional Comments, if any..."
          placeholderTextColor="#707070"
          theme={{
            colors: {
              primary: '#DB6666',
              underlineColor: 'transparent',
              background: 'white',
            },
          }}
        />
        <View
        style={{
            flexDirection: 'row',
            // backgroundColor: 'pink'
        }}
        >
         <TouchableOpacity
          style={{
            alignSelf: 'center',
            // marginTop: 20,
            // backgroundColor: 'pink'
          }}
          onPress={() => navigation.navigate('otpScreen')}>
          <LinearGradient
            colors={['#ffffff', '#ffffff']}
            style={styles.verificationButton}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: 10
              }}>
             Never mind
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            // backgroundColor: 'pink'
          }}
          onPress={() => navigation.navigate('otpScreen')}>
          <LinearGradient
            colors={['#FF8585', '#B73535']}
            style={styles.verificationButton}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 10
              }}>
              Return Order
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default returnOrderScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    padding: 10,
  },
  cancelContainer: {
    width: screen,
    // height: 210,
    backgroundColor: 'white',
    elevation: 2,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'BwModelicaSS01-Bold',
    marginTop: 10,
  },
  text2: {
    fontSize: 10,
    //fontWeight: 'bold',
    color: 'black',
    fontFamily: 'BwModelicaSS01-Regular',
    marginTop: 1,
  },
  input: {
    //padding: 10,
    //flex: 1,
    height: 40,
    fontSize: 10,
    fontFamily: 'Lato-Regular',
    color: '#333',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  verificationButton: {
    padding: 1,
    width: 69,
    hieght: 20,
    borderRadius: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
});
