import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const referScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.avatar}
          resizeMode="contain"
          source={require('../../assets/images/icons/cashRefer.png')}
        />
        <Text style={styles.text}>Invite & Earn</Text>
        <Text style={styles.earnText}>Earn Upto</Text>
        <Text style={styles.rsText}>Rs. 150</Text>
        <Text style={styles.shareText}>Share</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require('../../assets/images/icons/whatsapp2.png')}
            />
            <Text style={styles.shareIconText}>Whatsapp</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../../assets/images/icons/facebook2.png')}
          />
          <Text style={styles.shareIconText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../../assets/images/icons/twitter2.png')}
          />
          <Text style={styles.shareIconText}>Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../../assets/images/icons/messenger.png')}
          />
          <Text style={styles.shareIconText}>Messenger</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
        <Image
          style={styles.moreicon}
          resizeMode="contain"
          source={require('../../assets/images/icons/moreIcon.png')}
        />
        <Text style={styles.moreIconText}>more</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default referScreen;

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
    fontSize: 31,
    textAlign: 'center',
    color: '#538F04',
    marginTop: 10,
  },
  icon: {
    width: 39,
    height: 46,
  },
  moreicon: {
    width: 39,
    height: 46,
    marginLeft: 20,
    marginTop: 20,
  },
  shareIconText: {
    fontSize: 9,
    textAlign: 'center',
  },
  moreIconText: {
    fontSize: 9,
    marginLeft: 28,
    marginTop: 5,
  },
  shareText: {
    fontSize: 14,
    marginLeft: 20,
    color: 'black',
    marginTop: 50,
  }
  
});
