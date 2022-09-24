import React from 'react';

import { View, Text, Image, StyleSheet, FlatList, Dimensions, StatusBar } from 'react-native';
import DashedLine from 'react-native-dashed-line';
import offersData from './offersData';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import products from './products';
const { width } = Dimensions.get('screen');
const width_screen = width;
const { height } = Dimensions.get('screen');
const height_screen = height * 0.58;

const offersScreen = ({ navigation }) => {


  const Card = ({ offersData }) => {
    return (
      <View style={styles.card}>
        <StatusBar backgroundColor="#DB6666" barStyle="light-content" />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('wellnessScreen', {
              img: products.img,
              name: products.name,
              price: products.price,
              about: products.about,
            })
          }
          style={styles.ProductCategoryContainer}>
          {/* <Image source={offersData.img} style={styles.ProductCategoryImg} /> */}
          <Text style={styles.CategoryText}>{offersData.name}</Text>
          {/* <Text style={styles.CategoryText}>{offersData.price}</Text> */}
        </TouchableOpacity>
        <DashedLine axis='vertical' dashLength={5} dashColor='#707070' />
        <View
          style={{
            padding: 10,
            // backgroundColor: 'pink', 
            width: 160
          }}
        >
          <Text style={styles.CategoryText2}>
            Get upto 25% off + 5% JB cash on your first ayurvedic medicines
            order
          </Text>

          <Text style={styles.CategoryText2}>
            Expiry: 26-11-2021
          </Text>
          <TouchableOpacity>
            <Text style={{
              fontSize: 14,
              textAlign: 'center',
              marginTop: 7,
              fontWeight: 'bold',
              color: '#DB6666',
              textAlign: 'justify'
            }}>
              Order Details          </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          style={{
            // width: 310,
            // height: 39,
            alignSelf: 'center',
            // backgroundColor: 'green',
            // marginTop: 10
          }}
          // onPress={() => navigation.navigate('otpScreen')}
        >
          <LinearGradient
            colors={['#FF8585', '#B73535']}
            style={styles.verificationButton}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 10,
              }}>
              Add to Cart
            </Text>
          </LinearGradient>
        </TouchableOpacity> */}
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <FlatList
        // rowWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        //   horizontal
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 20,
        }}
        //numColumns={3}
        data={offersData}
        renderItem={({ item }) => {
          return <Card offersData={item} />;
        }}
      />
    </View>
  );
};

export default offersScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    padding: 10,
  },
  ProductCategoryContainer: {
    width: 156,
    height: 151,
    backgroundColor: '#117EBE',
    // backgroundColor: 'red',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    marginRight: 7
  },
  ProductCategoryImg: {
    width: 129,
    height: 93,
  },
  CategoryText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 7,
    fontWeight: 'bold',
    color: 'white'
  },
  CategoryText2: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 7,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'justify'
  },
  featuredBrandsContainer: {
    width: 165,
    height: 183,
    elevation: 2,
  },
  featuredBrands: {
    width: 165,
    height: 183,
    elevation: 2,
  },
  card: {
    // height: 160,
    backgroundColor: 'white',
    width: width_screen * 0.90,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
    // padding: 5,
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
