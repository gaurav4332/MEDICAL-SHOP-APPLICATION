import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Searchbar, TextInput} from 'react-native-paper';
import products from './products';
const { height, width } = Dimensions.get('screen')


const orderSummaryScreen = ({navigation}) => {
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
    <View style={{
      flex:1,
      alignItems:'center'
    }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            // flex: 1,
            // backgroundColor: '#FFF3F3',
            width: '100%',
            padding: 10,
            // marginTop: 14,
          }}>
          <View
            style={{
              // backgroundColor: '#FFF3F3',
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <View>
              <Text
                style={{
                  fontFamily: 'AvertaDemoPECuttedDemo',
                  color: '#000000',
                  fontSize: 16,
                  fontWeight: 'bold'
                  //marginTop: 24,
                  // alignItems: 'flex-end'
                }}>
                Delivery Address
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: 'AvertaDemoPECuttedDemo',
                  color: '#FF5050',
                  fontSize: 13,
                  marginLeft: 220,
                  fontWeight: 'bold'
                  //alignItems: 'flex-end'
                }}>
                Change
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // marginTop: 15,
            padding: 10,
          }}>
          <TextInput
            label="Email"
            mode="outlined"
            outlineColor="#D8EDFC"
            label={
              <Text style={{fontFamily: 'AvertaDemoPECuttedDemo'}}>
                Address...
              </Text>
            }
            dense={true}
            //   value={introduction}
            // onChangeText={text => setIntroduction(text)}
            style={Styles.input}
            theme={{
              colors: {
                primary: '#DB6666',
                underlineColor: 'transparent',
                background: 'white',
                borderRadius: 20,
              },
            }}
            multiline={true}
            numberOfLines={5}
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
              width: 386,
              height: 108,
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 2,
              borderRadius: 5,
              // padding: 7,
            }}>
            <View
              style={{
                backgroundColor: '#FFE8CB',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // borderBottomColor: '#E0E3DA',
                // borderBottomWidth: 0.5,
                // marginTop: 10,
                padding: 10,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                  color: 'black',
                  // marginTop: 10,
                  fontWeight: 'bold',
                }}>
               Arriving Tomorrow
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: 'black',
                  // marginTop: 10,
                  fontWeight: 'bold',
                }}>
                1/1
              </Text>
            </View>
            <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10
            }}
            >
            <Image
          style={{
            width: 48,
            height: 60,
            alignSelf: 'center',
            resizeMode:'contain'
            // marginTop: 10,
          }}
          source={require('../../assets/images/icons/coffie.png')}
        />
        <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  color: 'black',
                  // marginTop: 10,
                  fontWeight: 'bold',
                }}>
                ₹ 200
              </Text>
            </View>
          </View>
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
              width: 386,
              height: 147,
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 2,
              borderRadius: 5,
              padding: 7,
            }}>
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                Item Total(MRP)
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                ₹ 350
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                Price Discounted
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                - ₹ 150
              </Text>
            </View>
            <View
              style={{
                marginTop: 12,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 3,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                Shipping
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                - ₹ 50
              </Text>
            </View>
            <View
              style={{
                marginTop: 12,
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
              }}
            />
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                // borderBottomColor: '#E0E3DA',
                // borderBottomWidth: 0.5
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                Total Payable Amount
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  color: 'black',
                  marginTop: 10,
                }}>
                ₹ 250
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFACAC',
              flexDirection: 'row',
              justifyContent: 'space-between',
              // borderBottomColor: '#E0E3DA',
              // borderBottomWidth: 0.5,
              // marginTop: 10,
              padding: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                color: 'black',
                // marginTop: 10,
                fontWeight: 'bold',
              }}>
              You Saved
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: '#B81A1A',
                // marginTop: 10,
                fontWeight: 'bold',
              }}>
              ₹ 150
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{
        height: '7%',
        width: '90%',
        borderRadius: 30,
        backgroundColor: '#DB6666',
        position: "absolute",
        bottom: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          height: height / 20,
          width: width / 4.5,
          borderRightWidth:1,
          // backgroundColor: 'cyan',
          borderRightColor:'#ffffff'
        }}>
          <Text style={{
            fontSize: 13,
            color: '#ffffff',
            fontWeight: '400'
          }}>
            To be Paid
          </Text>
          <Text style={{
            fontSize: 13,
            color: '#ffffff',
            fontWeight: '400',
          }}>
            ₹250
          </Text>
        </View>
        <View style={{
          height: height / 20,
          width: width / 1.8,
          // backgroundColor: 'blue',
          alignItems: 'flex-end',
          justifyContent: 'center'
        }}>
          <TouchableOpacity  
           onPress={() =>navigation.navigate('orderPlacedScreen')}
            >
            <Text style={{
              fontSize: 13,
              color: '#ffffff',
              fontWeight: '400',
            }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default orderSummaryScreen;

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
    marginTop: 7,
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
  input: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    // marginTop: 10,
    // borderRadius: 50,
    elevation: 2,
  },
});
