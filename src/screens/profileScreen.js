import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {TextInput} from 'react-native-paper';

const profileScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{alignSelf: 'center'}}>
          <Image
            style={styles.avatar}
            resizeMode="contain"
            source={require('../../assets/images/icons/avatar.png')}
          />
        </View>

        <View style={styles.profileContainer}>
          <View style={{marginTop: 20}}>
            <TextInput
              label="Email"
              //   mode="outlined"
              outlineColor="white"
              label={
                <Text style={{fontFamily: 'AvertaDemoPECuttedDemo'}}>
                  Username
                </Text>
              }
              dense={true}
              style={styles.input}
              //   value={ownerName}
              //   onChangeText={text => setOwnerName(text)}
              theme={{
                colors: {
                  primary: '#0D4580',
                  underlineColor: 'transparent',
                  background: 'white',
                  // height: 30
                },
              }}
            />

            <TextInput
              label="Email"
              //   mode="outlined"
              outlineColor="white"
              label={
                <Text style={{fontFamily: 'AvertaDemoPECuttedDemo'}}>
                  Email Address
                </Text>
              }
              dense={true}
              style={styles.input}
              //   value={ownerName}
              //   onChangeText={text => setOwnerName(text)}
              theme={{
                colors: {
                  primary: '#0D4580',
                  underlineColor: 'transparent',
                  background: 'white',
                },
              }}
            />

            <TextInput
              label="Email"
              //   mode="outlined"
              outlineColor="white"
              label={
                <Text style={{fontFamily: 'AvertaDemoPECuttedDemo'}}>
                  Mobile Number
                </Text>
              }
              dense={true}
              style={styles.input}
              //   value={ownerName}
              //   onChangeText={text => setOwnerName(text)}
              theme={{
                colors: {
                  primary: '#0D4580',
                  underlineColor: 'transparent',
                  background: 'white',
                },
              }}
            />

            <TextInput
              label="Email"
              //   mode="outlined"
              outlineColor="white"
              label={
                <Text style={{fontFamily: 'AvertaDemoPECuttedDemo'}}>
                  Login & Security
                </Text>
              }
              dense={true}
              style={styles.input}
              //   value={ownerName}
              //   onChangeText={text => setOwnerName(text)}
              theme={{
                colors: {
                  primary: '#0D4580',
                  underlineColor: 'transparent',
                  background: 'white',
                },
              }}
            />

            <TextInput
              label="Email"
              //   mode="outlined"
              outlineColor="white"
              label={
                <Text style={{fontFamily: 'AvertaDemoPECuttedDemo'}}>
                  Manange Address
                </Text>
              }
              dense={true}
              style={styles.input}
              //   value={ownerName}
              //   onChangeText={text => setOwnerName(text)}
              theme={{
                colors: {
                  primary: '#0D4580',
                  underlineColor: 'transparent',
                  background: 'white',
                },
              }}
            />

            <TextInput
              label="Email"
              //   mode="outlined"
              // outlineColor="white"
              label={
                <Text style={{fontFamily: 'AvertaDemoPECuttedDemo'}}>
                  Payment Settings
                </Text>
              }
              dense={true}
              style={styles.input}
              //   value={ownerName}
              //   onChangeText={text => setOwnerName(text)}
              theme={{
                colors: {
                  primary: '#0D4580',
                  underlineColor: 'transparent',
                  background: 'white',
                },
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default profileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    justifyContent: 'center',
    // alignSelf: 'center',
  },
  profileContainer: {
    width: 330,
    // height: 600,
    borderWidth: 1,
    borderColor: 'red',
    padding: 20,
    elevation: 2,
    borderRadius: 20,
    // marginTop: 50,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  avatar: {
    // position: 'absolute',
    // top: 20,
    width: 116,
    height: 116,
    elevation: 2,
  },
  input: {
    //padding: 10,
    //flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 12,
    // borderRadius: 20,
    backgroundColor: 'white',
    elevation: 2,
  },
});
