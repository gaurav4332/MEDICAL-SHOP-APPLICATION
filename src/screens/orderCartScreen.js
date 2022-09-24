import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
import {Searchbar} from 'react-native-paper';
import products from './products';

const orderCartScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  

  const Card = ({products}) => {
    return (
      <View style={Styles.card}>
        <TouchableOpacity style={Styles.ProductCategoryContainer}>
          <Image source={products.img} style={Styles.ProductCategoryImg} />
          <Text style={Styles.CategoryText}>Med Name</Text>
          <Text style={Styles.CategoryText}>Rs. 300</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // width: 310,
            // height: 39,
            alignSelf: 'center',
            // backgroundColor: 'green',
            marginTop: 15,
          }}
          // onPress={() => navigation.navigate('otpScreen')}
        >
          <LinearGradient
            colors={['#FF8585', '#B73535']}
            style={Styles.verificationButton}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 10,
              }}>
              Add to Cart
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF3F3',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View
          style={{
              padding: 15
          }}
          >
        <Text
          style={{
            fontFamily: 'AvertaDemoPECuttedDemo',
            color: '#000000',
            fontSize: 16,
            marginTop: 24,
            // alignItems: 'flex-end'
          }}>
          Items you have saved in your Cart
        </Text>
        </View>
        <View
          style={{
            width: 386,
            height: 128,
            backgroundColor: 'white',
            elevation: 1,
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            // flex: 1,
            backgroundColor: '#EBEBEB',
            width: '100%',
            padding: 10,
            marginTop: 14,
            height: 36,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              width: 22,
              height: 22,
            }}
            source={require('../../assets/images/icons/coupon.png')}
          />
          <Text
            style={{
              fontFamily: 'AvertaDemoPECuttedDemo',
              color: '#000000',
              fontSize: 13,
              //marginTop: 24,
              // alignItems: 'flex-end'
            }}>
            Apply Coupon
          </Text>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={require('../../assets/images/icons/right22.png')}
          />
        </View>
        <View
          style={{
            // flex: 1,
            backgroundColor: '#EBEBEB',
            width: '100%',
            padding: 10,
            marginTop: 14,
            height: 36,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              width: 22,
              height: 22,
            }}
            source={require('../../assets/images/icons/pastOrder.png')}
          />
          <Text
            style={{
              fontFamily: 'AvertaDemoPECuttedDemo',
              color: '#000000',
              fontSize: 13,
              //marginTop: 24,
              // alignItems: 'flex-end'
            }}>
            View Past Orders
          </Text>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={require('../../assets/images/icons/right22.png')}
          />
        </View>
        <View
          style={{
            // flex: 1,
            backgroundColor: '#FFF3F3',
            width: '100%',
            padding: 10,
            marginTop: 14,
          }}>
          <View
            style={{
              backgroundColor: '#FFF3F3',
              // flexDirection: 'row',
              marginTop: 20,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'AvertaDemoPECuttedDemo',
                  color: '#000000',
                  fontSize: 16,
                  //marginTop: 24,
                  // alignItems: 'flex-end'
                }}>
                Already Purchased
              </Text>
            </View>
          </View>
          <FlatList
            columnWrapperStyle={{
              justifyContent: 'space-around',
              marginVertical: 5,
            }}
            showsVerticalScrollIndicator={false}
            //   horizontal
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 20,
            }}
            numColumns={2}
            data={products}
            renderItem={({item}) => {
              return <Card products={item} />;
            }}
          />
        </View>
       
      </ScrollView>
    </View>
  );
};

export default orderCartScreen;

const Styles = StyleSheet.create({
  ProductCategoryContainer: {
    width: 129,
    height: 114,
  },
  ProductCategoryImg: {
    width: 129,
    height: 93,
  },
  CategoryText: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 5,
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
    height: 160,
    backgroundColor: '#FFF3F3',
    width: 130,
    marginHorizontal: 5,
    paddingTop: 5,
    // borderRadius: 10,
    // marginBottom: 20,
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
