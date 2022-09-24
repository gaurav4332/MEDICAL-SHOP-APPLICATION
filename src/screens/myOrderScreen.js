import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import LinearGradient from 'react-native-linear-gradient';
import products from './products';
const {screen} = Dimensions.get("screen").width;

const myOrderScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const OrderCard = ({products}) => {
    return (
      <View style={Styles.cardcontainer}>
        <TouchableOpacity
        // style={Styles.ProductCategoryContainer2}
        >
          <View
            style={{
              borderRadius: 10,
              // backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#E4CC80',
              elevation: 2,
              width: 78,
              height: 68,
            }}>
            <Image source={products.img} style={Styles.ProductCategoryImg2} />
          </View>
        </TouchableOpacity>
        <View
        style={{
            // backgroundColor: 'pink'
        }}
        >
        <Text
            style={{
            //   textAlign: 'center',
            fontSize: 18,
            color: 'black',
            }}>
            Roastedium
          </Text>
          <Text
            style={{
            //   textAlign: 'center',
            fontSize: 13,
            color: '#353535',
            marginTop: 5
            }}>
            20ml
          </Text>
          <Text
            style={{
            //   textAlign: 'center',
            fontSize: 12,
            color: '#353535',
            marginTop: 5
            }}>
            Ordered Item Quantity
          </Text>
          </View>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            // backgroundColor: 'green',
          }}
          // onPress={() => navigation.navigate('otpScreen')}
        >
          <Image
            source={require('../../assets/images/icons/remove.png')}
            style={{
              width: 30,
              height: 30,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
            }}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
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
            // marginTop: 10
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
    <View style={Styles.mainContainer}>
      <ScrollView>
        <View
          style={{
            // flex: 1,
            backgroundColor: '#FFF3F3',
            width: '100%',
            padding: 10,
            marginTop: 14,
          }}>
          <Text
            style={{
              fontFamily: 'AvertaDemoPECuttedDemo',
              color: '#000000',
              fontSize: 15,
              //marginTop: 24,
              // alignItems: 'flex-end'
            }}>
            Recent Purchase
          </Text>
          <View
            style={{
              backgroundColor: '#FFF3F3',
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'AvertaDemoPECuttedDemo',
                  color: '#000000',
                  fontSize: 12,
                  //marginTop: 24,
                  // alignItems: 'flex-end'
                }}>
                November - 2021
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 74,
                height: 24,
                elevation: 1,
                backgroundColor: 'white',
                justifyContent: 'center',
                flexDirection: 'row'
              }}>
              <Text
                style={{
                  fontFamily: 'AvertaDemoPECuttedDemo',
                  color: 'black',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                Filter{' '}
              </Text>
              <Image
            source={require('../../assets/images/icons/filter.png')}
            style={{
              width: 20,
              height: 13,
              alignSelf: 'center',
            }}
          />
            </TouchableOpacity>
          </View>
          <FlatList
            //columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 20,
            }}
            //numColumns={3}
            data={products}
            renderItem={({item}) => {
              return <OrderCard products={item} />;
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: 'AvertaDemoPECuttedDemo',
            color: '#000000',
            fontSize: 15,
            textAlign: 'center',
            marginTop: 10,
          }}>
          No Data Available
        </Text>
        <View
          style={{
            // flex: 1,
            backgroundColor: '#FFF3F3',
            width: '100%',
            padding: 10,
            marginTop: 14,
          }}>
          <Text
            style={{
              fontFamily: 'AvertaDemoPECuttedDemo',
              color: '#000000',
              fontSize: 15,
              //marginTop: 24,
              // alignItems: 'flex-end'
            }}>
            Deals of the Day
          </Text>
          <View
            style={{
              backgroundColor: '#FFF3F3',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'AvertaDemoPECuttedDemo',
                  color: '#000000',
                  fontSize: 18,
                  //marginTop: 24,
                  // alignItems: 'flex-end'
                }}>
                Best Sellers
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'AvertaDemoPECuttedDemo',
                  color: '#E58200',
                  fontSize: 13,
                  // marginLeft: 220,
                  //alignItems: 'flex-end'
                }}>
                View all
              </Text>
            </View>
          </View>
          <FlatList
            //columnWrapperStyle={{justifyContent: 'space-between'}}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              marginTop: 10,
              paddingBottom: 20,
            }}
            //numColumns={3}
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

export default myOrderScreen;

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    padding: 10,
    // marginTop: 10
  },
  ProductCategoryContainer: {
    width: 129,
    // height: 114,
  },
  ProductCategoryContainer2: {
    width: 120,
    height: 93,
    // backgroundColor: 'red',
    // elevation: 2,
  },
  ProductCategoryImg: {
    width: 129,
    height: 93,
  },
  ProductCategoryImg2: {
    width: 78,
    height: 68,
    resizeMode: 'contain',
  },
  CategoryText: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 7,
    color: 'black',
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
  cardcontainer: {
    height: 102,
    backgroundColor: 'white',
    width: screen,
    paddingTop: 15,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'space-between',
    marginVertical: 7,
    // borderRadius: 10,
    // marginBottom: 20,
    // padding: 5,
  },
  verificationButton: {
    padding: 1,
    width: 69,
    height: 20,
    borderRadius: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
});
