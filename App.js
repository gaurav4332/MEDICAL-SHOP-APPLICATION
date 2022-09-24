import React from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import splashScreen from './src/screens/splashScreen';
// import onBoardingScreen from './src/screens/onboardingScreen';
import loginScreen from './src/screens/loginScreen';
import otpScreen from './src/screens/otpScreen';
import homeScreen from './src/screens/homeScreen';
import searchScreen from './src/screens/searchScreen';
import offersScreen from './src/screens/offersScreen';
import moreScreen from './src/screens/moreScreen';
import profileScreen from './src/screens/profileScreen';
import settingScreen from './src/screens/settingScreen';
import referScreen from './src/screens/ReferScreen';
import myOrderScreen from './src/screens/myOrderScreen';
import wellnessScreen from './src/screens/wellnessScreen';
import orderCartScreen from './src/screens/orderCartScreen';
import orderSummaryScreen from './src/screens/orderSummaryScreen';
import paymentDetailScreen from './src/screens/paymentDetailScreen';
import orderPlacedScreen from './src/screens/orderPlaced';
import productDetailScreen from './src/screens/productDetailScreen';
import cancelOrderScreen from './src/screens/cancelOrderScreen';
import returnOrderScreen from './src/screens/returnOrderScreen';
import deliveryTrackingScreen from './src/screens/deliveryTrackingScreen';
import beautyScreen from './src/screens/beautyScreen';
import healtyScreen from './src/screens/healtyScreen';
import ayurvedicScreen from './src/screens/AyurvedicScreen';
import skinCareScreen from './src/screens/skinCareScreen';
import hairScareScreen from './src/screens/hairCareScreen';

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomTabBarButtom = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: +30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    //onPress = {toggleModal}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#0D4580',
        elevation: 5,
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const bottomTab = ({navigation}) => {
  function between() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="App" component={loginScreen} />
      </Tabs.Navigator>
    );
  }
  return (
    <Tabs.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarStyle: {
          position: 'relative',
          //bottom: 25,
          //left: 10,
          //right: 10,
          paddingTop: 5,
          backgroundColor: 'rgba(255, 142, 142, 0.9)',
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}>
      <Tabs.Screen
        name="homeScreen"
        component={homeScreen}
        options={{
          //headerShown: false,
          title: 'Home',
          // tintColor: focused ? "#000000" : "#ffffff",
          headerTitleAlign: 'left',
          // backgroundColor: '#FF8E8E',
          headerStyle: {
            height: 72,
            backgroundColor: '#DB6666',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>
              Location
            </Text>
          ),
          headerRight: ({navigation}) => (
            <TouchableOpacity
            // onPress={() => navigation.navigate('orderCartScreen')}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 25,
                }}
                source={require('./assets/images/icons/crt.png')}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/images/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 21,
                  height: 23,
                  tintColor: focused ? '#000000' : '#ffffff',
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="searchScreen"
        component={searchScreen}
        options={{
          headerShown: false,
          title: 'Search',
          tabBarIcon: ({focused}) => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/images/icons/search.png')}
                resizeMode="contain"
                style={{
                  width: 21,
                  height: 23,
                  tintColor: focused ? '#000000' : '#ffffff',
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="offersScreen"
        component={offersScreen}
        options={{
          //headerShown: false,
          title: 'Offers',
          headerTitleAlign: 'center',
          // backgroundColor: '#FF8E8E',
          headerStyle: {
            height: 72,
            backgroundColor: '#DB6666',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Offers
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 25,
                }}
                source={require('./assets/images/icons/crt.png')}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/images/icons/discount.png')}
                resizeMode="contain"
                style={{
                  width: 21,
                  height: 23,
                  tintColor: focused ? '#000000' : '#ffffff',
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="moreScreen"
        component={moreScreen}
        options={{
          //headerShown: false,
          title: 'Profile',
          headerTitleAlign: 'center',
          // backgroundColor: '#FF8E8E',
          headerStyle: {
            height: 72,
            backgroundColor: '#DB6666',
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: () => (
            <Text
              style={{
                //fontSize: 12.49,
                fontSize: 18,
                fontFamily: 'BwModelicaSS01-Bold',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Username
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Image
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 25,
                }}
                source={require('./assets/images/icons/crt.png')}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('./assets/images/icons/user.png')}
                resizeMode="contain"
                style={{
                  width: 21,
                  height: 23,
                  tintColor: focused ? '#000000' : '#ffffff',
                }}
              />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          name="splashScreen"
          component={splashScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="onBoardingScreen"
          component={onBoardingScreen}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="loginScreen"
          component={loginScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="otpScreen"
          component={otpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="bottomTab"
          component={bottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profileScreen"
          component={profileScreen}
          options={{
            // headerShown: false,
            title: 'My Account',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
        <Stack.Screen
          name="settingScreen"
          component={settingScreen}
          options={{
            // headerShown: false,
            title: 'Settings',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
        <Stack.Screen
          name="referScreen"
          component={referScreen}
          options={{
            // headerShown: false,
            title: 'Refer & Earn',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
        <Stack.Screen
          name="myOrderScreen"
          component={myOrderScreen}
          options={{
            // headerShown: false,
            title: 'My Orders',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
        <Stack.Screen
          name="wellnessScreen"
          component={wellnessScreen}
          options={{
            // headerShown: false,
            title: 'Wellness',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 25,
                  }}
                  source={require('./assets/images/icons/crt.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="beautyScreen"
          component={beautyScreen}
          options={{
            // headerShown: false,
            title: 'Beauty',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 25,
                  }}
                  source={require('./assets/images/icons/crt.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="healtyScreen"
          component={healtyScreen}
          options={{
            // headerShown: false,
            title: 'Healthy',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 25,
                  }}
                  source={require('./assets/images/icons/crt.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="ayurvedicScreen"
          component={ayurvedicScreen}
          options={{
            // headerShown: false,
            title: 'Ayurvedic',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 25,
                  }}
                  source={require('./assets/images/icons/crt.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="skinCareScreen"
          component={skinCareScreen}
          options={{
            // headerShown: false,
            title: 'Skin Care',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 25,
                  }}
                  source={require('./assets/images/icons/crt.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="hairScareScreen"
          component={hairScareScreen}
          options={{
            // headerShown: false,
            title: 'Hair Care',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  style={{
                    width: 24,
                    height: 24,
                    marginRight: 25,
                  }}
                  source={require('./assets/images/icons/crt.png')}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="orderCartScreen"
          component={orderCartScreen}
          options={{
            // headerShown: false,
            title: 'Orders',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
        <Stack.Screen
          name="orderSummaryScreen"
          component={orderSummaryScreen}
          options={{
            // headerShown: false,
            title: 'Order Summary',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
        <Stack.Screen
          name="paymentDetailScreen"
          component={paymentDetailScreen}
          options={{
            // headerShown: false,
            title: 'Payment Details',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
        <Stack.Screen
          name="orderPlacedScreen"
          component={orderPlacedScreen}
          options={{
            // headerShown: false,
            title: 'Order Placed',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />

        <Stack.Screen
          name="productDetailScreen"
          component={productDetailScreen}
          options={{
            headerShown: false,
            title: 'Order Placed',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />

        <Stack.Screen
          name="cancelOrderScreen"
          component={cancelOrderScreen}
          options={{
            // headerShown: false,
            title: 'Cancel Order',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />

        <Stack.Screen
          name="returnOrderScreen"
          component={returnOrderScreen}
          options={{
            // headerShown: false,
            title: 'Return Order',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />

        <Stack.Screen
          name="deliveryTrackingScreen"
          component={deliveryTrackingScreen}
          options={{
            // headerShown: false,
            title: 'Delivery Tracking',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
            headerStyle: {
              height: 72,
              backgroundColor: '#DB6666',
              borderBottomLeftRadius: 17,
              borderBottomRightRadius: 17,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
