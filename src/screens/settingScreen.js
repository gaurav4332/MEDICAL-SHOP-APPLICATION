import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native';

const settingScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.avatar}
          resizeMode="contain"
          source={require('../../assets/images/icons/Ellipse.png')}
        />
        <View
        style={{
            flexDirection: 'row',
            marginTop: 20,
            // justifyContent: 'space-between',
            padding: 10
        }}
        >
          <Image
            style={styles.bell}
            resizeMode="contain"
            source={require('../../assets/images/icons/bell.png')}
          />
          <Text style={styles.rsText}>Notifications</Text>

          <ToggleSwitch
            isOn={true}
            onColor="green"
            offColor="#FFF3F3"
            //   label="Notifications"
            //   labelStyle={{color: 'black', fontWeight: '100', fontSize: 17}}
            trackOnStyle={{color: 'red'}}
            size="small"
            onToggle={isOn => console.log('changed to : ', isOn)}
          />
        </View>
        <View
        style={{flexDirection: 'row', marginTop: 20, padding: 10}}

        >
        <Image
          style={styles.protect}
          resizeMode="contain"
          source={require('../../assets/images/icons/protect.png')}
        />
        <Text style={styles.rsText}>Enable Screen Protection</Text>
        </View>
      </View>
    </View>
  );
};

export default settingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  innerContainer: {
    width: 354,
    height: 500,
    backgroundColor: 'white',
    elevation: 3,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  avatar: {
    // position: 'absolute',
    // top: 20,
    width: 214,
    height: 117,
    elevation: 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
  },
  earnText: {
    fontSize: 17,
    textAlign: 'center',
  },
  rsText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
    // marginTop: 10,
  },
  bell: {
    width: 28,
    height: 28,
  },
  protect: {
    width: 28,
    height: 28,
  },
});
