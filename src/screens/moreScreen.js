import React from 'react';

import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const moreScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF3F3',
        // backgroundColor: '#EBEBEB',
        padding: 20,
      }}>
      <View
        style={{
          backgroundColor: '#FFF3F3',
          //  padding: 10
        }}>
        <TouchableOpacity
          style={styles.pressableContainer}
          onPress={() => navigation.navigate('homeScreen')}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/icons/home2.png')}
          />
          <Text style={styles.text}>Home</Text>

          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/icons/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF3F3',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.pressableContainer}
          onPress={() => navigation.navigate('myOrderScreen')}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/icons/cart2.png')}
          />
          <Text style={styles.text}>My Orders</Text>

          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/icons/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF3F3',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.pressableContainer}
          onPress={() => navigation.navigate('profileScreen')}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/icons/myaccount.png')}
          />
          <Text style={styles.text}>My Account</Text>

          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/icons/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF3F3',
          marginTop: 20,
        }}>
        <TouchableOpacity style={styles.pressableContainer}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/icons/managePayment.png')}
          />
          <Text style={styles.text}>Manage Payment Methods</Text>

          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/icons/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF3F3',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.pressableContainer}
          onPress={() => navigation.navigate('deliveryTrackingScreen')}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/icons/dictionary.png')}
          />
          <Text style={styles.text}>Track Orders</Text>

          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/icons/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF3F3',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.pressableContainer}
          onPress={() => navigation.navigate('settingScreen')}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/icons/settings.png')}
          />
          <Text style={styles.text}>Settings</Text>

          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/icons/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#FFF3F3',
          marginTop: 20,
        }}>
        <TouchableOpacity
          style={styles.pressableContainer}
          onPress={() => navigation.navigate('referScreen')}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/icons/refer.png')}
          />
          <Text style={styles.text}>Refer & Earn</Text>

          <Image
            style={styles.arrowIcon}
            source={require('../../assets/images/icons/rightArrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View
      style={{
        // backgroundColor: 'red',
        alignItems: 'center',
        marginTop: 50
      }}
      >
        <TouchableOpacity
        onPress={() => navigation.navigate('loginScreen')}
          style={{
            width: 122,
            height: 36,
            borderWidth: 1,
            borderColor: '#B73535',
            borderRadius: 7,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#B73535',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default moreScreen;

const styles = StyleSheet.create({
  pressableContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF3F3',
    padding: 5,
    justifyContent: 'space-between',
  },
  icons: {
    width: 30,
    height: 30,
  },
  text: {
    justifyContent: 'center',
    alignSelf: 'center',
    // marginRight: 200,
    fontSize: 16,
    fontFamily: 'NexaRegular',
    color: 'black',
  },
  arrowIcon: {
    width: 9,
    height: 16,
    //  right: 0
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
