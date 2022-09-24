import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {Searchbar} from 'react-native-paper';
import {SliderBox} from 'react-native-image-slider-box';
import products from './products';

const {screen} = Dimensions.get('screen').width;
const {width} = Dimensions.get('window');

const homeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
const [images, setimages] = useState([
  require('../../assets/images/HomeImg/corouselImg1.png'),
  require('../../assets/images/HomeImg/corouselImg1.png'),
  require('../../assets/images/HomeImg/corouselImg1.png'),
])
  const onChangeSearch = query => setSearchQuery(query);

  const Card = ({products}) => {
    return (
      <View style={Styles.card}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('productDetailScreen', {
              img: products.img,
              name: products.name,
              price: products.price,
              about: products.about,
            })
          }
          style={Styles.ProductCategoryContainer2}>
          <Image source={products.img} style={Styles.ProductCategoryImg} />
          <Text style={Styles.CategoryText}>{products.name}</Text>
          <Text style={Styles.CategoryText}>₹{products.price}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // width: 310,
            // height: 39,
            alignSelf: 'center',
            // backgroundColor: 'green',
            marginTop: 5,
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

  const Details = [
    {
      type: 'Party',
      image: '../../assets/images/HomeImg/corouselImg1.png',
    },
    {
      type: 'Wedding',
      image: '../../assets/images/HomeImg/corouselImg1.png',
    },
    {
      type: 'Architecture',
      image: '../../assets/images/HomeImg/corouselImg1.png',
    },
    {
      type: 'Christening',
      image: '../../assets/images/HomeImg/corouselImg1.png',
    },
    {
      type: 'Christening',
      image: '../../assets/images/HomeImg/corouselImg1.png',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#EBEBEB',
        backgroundColor: 'blue',

        // padding: 20,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#FFF3F3',
            // padding: 10,
          }}>
          <View
            style={{
              // fontSize: 5,
              // padding: 10,
              marginTop: 10
            }}>
            <Searchbar
              placeholder="Search Medicine"
              placeholderTextColor={'black'}
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                fontSize: 5,
                elevation: 1,
                backgroundColor: '#F3F3F3',
                height: 40,
              }}
            />
          </View>
         
          <View
            style={{
              // flex: 1,
              backgroundColor: '#FFF3F3',
              width: screen,
              // padding: 10,
              marginTop: 10
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={Styles.ProductCategoryContainer}
                onPress={() => navigation.navigate('wellnessScreen')}>
                <Image
                  style={Styles.ProductCategoryImg}
                  source={require('../../assets/images/HomeImg/wellness.png')}
                />
                <Text style={Styles.CategoryText}>wellness</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('beautyScreen')}
                style={Styles.ProductCategoryContainer}>
                <Image
                  style={Styles.ProductCategoryImg}
                  source={require('../../assets/images/HomeImg/Cover-Skincare.png')}
                />
                <Text style={Styles.CategoryText}>Beauty</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('healtyScreen')}
                style={Styles.ProductCategoryContainer}>
                <Image
                  style={Styles.ProductCategoryImg}
                  source={require('../../assets/images/HomeImg/healthyCooking.png')}
                />
                <Text style={Styles.CategoryText}>Healthy Cooking</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              // flex: 1,
              backgroundColor: '#FFF3F3',
              width: screen,
              // padding: 10,
              marginTop: 10
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ayurvedicScreen')}
                style={Styles.ProductCategoryContainer}>
                <Image
                  style={Styles.ProductCategoryImg}
                  source={require('../../assets/images/HomeImg/SkinCare.png')}
                />
                <Text style={Styles.CategoryText}>Ayurvedic</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('skinCareScreen')}
                style={Styles.ProductCategoryContainer}>
                <Image
                  style={Styles.ProductCategoryImg}
                  source={require('../../assets/images/HomeImg/SkinCare.png')}
                />
                <Text style={Styles.CategoryText}>Skin Care</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('hairScareScreen')}
                style={Styles.ProductCategoryContainer}>
                <Image
                  style={Styles.ProductCategoryImg}
                  source={require('../../assets/images/HomeImg/hairCare.png')}
                />
                <Text style={Styles.CategoryText}>Hair Care</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              // flex: 1,
              backgroundColor: 'white',
              width: width,
              // padding: 10,
              marginTop: 14,
            }}>
            <SliderBox
            images={images}
            autoplay={true}
            circleLoop={true}
            dotColor="#DB6666"
            inactiveDotColor="#90A4AE"
            sliderBoxHeight={200}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: 10,
              padding: 0,
              margin: 0,
            }}
            // ImageComponentStyle={{borderRadius: 0, width: width,}}
            imageLoadingColor="#2196F3"
            resizeMethod={'resize'}
  resizeMode={'cover'}
  
          />
          </View>
          <View
            style={{
              // flex: 1,
              backgroundColor: '#FFF3F3',
              width: screen,
              padding: 10,
              marginTop: 14,
            }}>
            <View style={Styles.homeRemediesmedicalHerbView}>
              <View>
                <Text style={Styles.medicalHerbhomeRemediesText}>
                  Home Remedies
                </Text>
              </View>
              <View
                style={{
                  // alignItems: 'flex-end',
                  // backgroundColor: 'yellow',
                  justifyContent: 'center',
                }}>
                  <TouchableOpacity>
                <Text style={Styles.viewAllText}>View all</Text>
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
              renderItem={({item}) => {
                return <Card products={item} />;
              }}
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
            <View style={Styles.homeRemediesmedicalHerbView}>
              <View>
                <Text style={Styles.medicalHerbhomeRemediesText}>
                  Medicinal Herbs
                </Text>
              </View>
              <View
                style={{
                  // alignItems: 'flex-end',
                  // backgroundColor: 'yellow',
                  justifyContent: 'center',
                }}>
                  <TouchableOpacity>
                <Text style={Styles.viewAllText}>View all</Text>
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
              renderItem={({item}) => {
                return <Card products={item} />;
              }}
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
            <Text
              style={{
                fontFamily: 'AvertaDemoPECuttedDemo',
                color: '#000000',
                fontSize: 16,
                //marginTop: 24,
                // alignItems: 'flex-end'
              }}>
              Featured Brands
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={Styles.featuredBrandsContainer}>
                <Image
                  style={Styles.featuredBrands}
                  source={require('../../assets/images/HomeImg/himalaya.png')}
                />
                <Text style={Styles.CategoryText}>Ayurvedic</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.featuredBrandsContainer}>
                <Image
                  style={Styles.featuredBrands}
                  source={require('../../assets/images/HomeImg/cipla.png')}
                />
                <Text style={Styles.CategoryText}>Skin Care</Text>
              </TouchableOpacity>
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
            <Image
              style={{
                width: screen,
                height: 151,
              }}
              source={require('../../assets/images/HomeImg/cor2.png')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default homeScreen;

const Styles = StyleSheet.create({
  ProductCategoryContainer: {
    width: screen,
    height: 114,
    // backgroundColor: 'red'
  },
  ProductCategoryContainer2: {
    width: screen,
    // height: 114,
    // backgroundColor: 'red'
  },
  ProductCategoryImg: {
    width: 120,
    height: 93,
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
  verificationButton: {
    padding: 1,
    width: 69,
    hieght: 20,
    borderRadius: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  medicalHerbhomeRemediesText: {
    fontFamily: 'AvertaDemoPECuttedDemo',
    color: '#000000',
    fontSize: 16,
    //marginTop: 24,
    // alignItems: 'flex-end'
  },
  homeRemediesmedicalHerbView: {
    backgroundColor: '#FFF3F3',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  viewAllText: {
    fontFamily: 'AvertaDemoPECuttedDemo',
    color: '#E58200',
    fontSize: 13,
    textAlign: 'center',
  },
});
