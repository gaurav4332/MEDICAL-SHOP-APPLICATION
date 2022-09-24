import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

import products from './products';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('screen')

const { screen } = Dimensions.get("screen").width;

const productDetailScreen = ({ navigation, route }) => {
  const { name, img, price, about } = route.params;

  const Card = ({ products }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity style={styles.ProductCategoryContainer}>
          <Image source={products.img} style={styles.ProductCategoryImg} />
          <Text style={styles.CategoryText}>Med Name</Text>
          <Text style={styles.CategoryText}>Rs. 300</Text>
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
            style={styles.addToCartButton}>
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginTop: 10
            }}
          >
            <Image
              style={styles.backArrowImg}
              source={require('../../assets/images/icons/backArrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.productNameText}>{name}</Text>
          <View style={styles.productContainer}>
            <View style={styles.productMainImgContainer}>
              <Image
                style={styles.productImage}
                source={require('../../assets/images/HomeImg/medi.png')}
              />
            </View>
            <View style={styles.productSlideImgContainer}>
              <Image
                style={styles.productSlideImg}
                source={require('../../assets/images/HomeImg/medi.png')}
              />
              <Image
                style={styles.productSlideImg}
                source={require('../../assets/images/HomeImg/medi.png')}
              />
              <Image
                style={styles.productSlideImg}
                source={require('../../assets/images/HomeImg/medi.png')}
              />
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.Part2}>
              <View>
                <Text style={styles.productNameText}>{name}</Text>
                <Text>Special Price</Text>
                <Text style={styles.productNameText}>₹{price}</Text>
                <Text>Discounted Price</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Image
                  style={styles.ratingStarImage}
                  source={require('../../assets/images/icons/ratingStar.png')}
                />
                <TouchableOpacity
                  style={{
                    alignSelf: 'center',
                  }}
                // onPress={() => navigation.navigate('otpScreen')}
                >
                  <LinearGradient
                    colors={['#FF8585', '#B73535']}
                    style={styles.addToCartButton}>
                    <Text style={styles.linearGradientButton}>Add to Cart</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ padding: 10 }}
            >
              <Text style={styles.productNameText}>About the product</Text>
              <Text style={styles.productDetailText}>{about}</Text>
              <Text style={styles.productNameText}>Notes</Text>
              <Text style={styles.productDetailText}>{about}</Text>
            </View>
          </View>


          <View
            style={{
              height: height / 2.5,
              // backgroundColor: '#FFF3F3',
              // backgroundColor: 'pink',
              width: screen,
              padding: 10,
              marginTop: 14,
            }}>
            <View
              style={{
                backgroundColor: '#FFF3F3',

                flexDirection: 'row',
                marginTop: 20,
                justifyContent: 'space-between'
              }}>
              <View>
                <Text style={styles.trendingProductsText}>Trending Products</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={styles.viewAllText}>View all</Text>
                </TouchableOpacity>
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
              renderItem={({ item }) => {
                return <Card products={item} />;
              }}
            />
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
          <TouchableOpacity  onPress={() =>
            navigation.navigate('orderSummaryScreen')}>
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

export default productDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    padding: 10,
    // marginTop: 10
  },
  backArrowImg: {
    width: 17,
    height: 14,
  },
  productNameText: {
    fontSize: 18,
    color: 'black',
    marginTop: 20,
  },
  productContainer: {
    //   width: 404,
    height: 229,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  productMainImgContainer: {
    justifyContent: 'center',
  },
  productImage: {
    width: 180,
    height: 136,
    borderWidth: 1,
    borderRadius: 10,
    // borderColor: '#DB6666',
    elevation: 3,
  },
  productSlideImgContainer: {
    justifyContent: 'center',
  },
  productSlideImg: {
    width: 78,
    height: 68,
    borderRadius: 10,
    elevation: 3,
  },
  card: {
    height: height / 4.5,
    backgroundColor: '#FFF3F3',
    width: 130,
    marginHorizontal: 5,
    // paddingTop: 5,
    // borderRadius: 10,
    // marginBottom: 20,
    // padding: 5,
  },
  ProductCategoryContainer: {
    width: 129,
    // height: 114,
  },
  ProductCategoryImg: {
    width: 129,
    height: 93,
  },
  CategoryText: {
    fontSize: 11,
    textAlign: 'center',
    marginTop: 7,
    color: 'black'
  },
  addToCartButton: {
    padding: 1,
    width: 69,
    height: 20,
    borderRadius: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  trendingProductsText: {
    fontFamily: 'AvertaDemoPECuttedDemo',
    color: '#000000',
    fontSize: 16,
  },
  viewAllText: {
    fontFamily: 'AvertaDemoPECuttedDemo',
    color: '#E58200',
    fontSize: 13,
    // marginLeft: 220,
  },
  bodyContainer: {
    width: screen,
    // height: 585,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    marginTop: 10
  },
  linearGradientButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 10,
  },
  ratingStarImage: {
    width: 110,
    height: 17,
  },
  Part2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    //   backgroundColor: 'pink'
  },
  productDetailText: {
    fontSize: 13,
    textAlign: 'justify',
    color: 'black'
  }
});
