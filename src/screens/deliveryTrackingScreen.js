import React from 'react';
import {nativeViewProps} from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';

import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const deliveryTrackingScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.buttonContainer}>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate('cancelOrderScreen')}
      ><Text style={styles.text}>Cancel Order</Text></TouchableOpacity>
      <TouchableOpacity  
      style={styles.button2}
      onPress={() => navigation.navigate('returnOrderScreen')}
      ><Text style={styles.text}>Return Order</Text></TouchableOpacity>
      </View>
      

    </View>
  );
};

export default deliveryTrackingScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    padding: 10,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
  button: {
      width: 155,
      height: 32,
      backgroundColor: '#F95151',
      justifyContent: 'center',
  },
  button2: {
    width: 155,
    height: 32,
    backgroundColor: '#51BEFE',
    justifyContent: 'center',
},
text:{
    textAlign:'center',
    fontSize: 12,
    color: 'white'
}
});
