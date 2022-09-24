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

import LinearGradient from 'react-native-linear-gradient';
import {Searchbar} from 'react-native-paper';
import products from './products';

const {width} = Dimensions.get('window');

const healtyScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const Card = ({products}) => {
    return (
      <View style={Styles.card}>
        <TouchableOpacity style={Styles.ProductCategoryContainer}>
          <Image source={products.img} style={Styles.ProductCategoryImg} />
          <Text style={Styles.CategoryText}>Med Name</Text>
          <Text style={Styles.CategoryText}>₹. 300</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // width: 310,
            // height: 39,
            alignSelf: 'center',
            // backgroundColor: 'green',
            marginTop: 15
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
    return(
         <View
         style={{
             flex: 1,
            backgroundColor: '#FFF3F3',
         }}
         >
             <View 
             style={{padding: 10}}
             >
            <Searchbar
              placeholder="Search Medicine"
              // onChangeText={onChangeSearch}
              value={searchQuery}
              style={{fontSize: 5, elevation: 1, backgroundColor: '#F3F3F3', height: 40}}
            />
          </View>
          
          {/* <View
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
                flexDirection: 'row',
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
                  Trending Products
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'AvertaDemoPECuttedDemo',
                    color: '#E58200',
                    fontSize: 13,
                    marginLeft: 220,
                    //alignItems: 'flex-end'
                  }}>
                  View all
                </Text>
              </View>
            </View> */}
            <FlatList
              columnWrapperStyle={{justifyContent: 'space-evenly', marginVertical: 5}}
              showsVerticalScrollIndicator={false}
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
         
    )
}

export default healtyScreen;

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
      color: 'black'
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
      backgroundColor: '#FFF3F3',
      width: 130,
      marginHorizontal: 5,
      paddingTop: 5,
      // elevation: 0.1,
      borderRadius: 10,
      // marginBottom: 20,
      // padding: 5,
      marginTop: 10
    },
    verificationButton: {
      padding: 1,
      width: 69,
      height: 20,
      borderRadius: 6,
      alignSelf: 'center',
      marginTop: 15,
    },
  });