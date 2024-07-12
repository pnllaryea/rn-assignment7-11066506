import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomHeaderTitle = () => {
  return (
    <View style={styles.headerContainer}>
      <Image 
        style={styles.logo}
        resizeMode='contain'
      />
      <Image 
  
        style={styles.checkout}
        resizeMode='contain'
      />
      
    </View>
    
  );
  
};

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ 
        headerShown: false,
        
      }} 
    />
    <Stack.Screen 
      name="Cart" 
      component={CartScreen} 
      options={{ 
        headerTitle: () => <CustomHeaderTitle />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              console.log('Search button pressed');
            }}
          >
            <Image 
              source={require('./assets/Search.png')} 
              style={styles.searchIcon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        ),
      }} 
    />
    <Stack.Screen 
      name="ProductDetail" 
      component={ProductDetailScreen} 
      options={{ 
        headerTitle: () => <CustomHeaderTitle />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} 
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Our Store">
        <Drawer.Screen 
          name="Our Store" 
          component={HomeStack} 
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ drawerLabel: 'Cart' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center', 
  },
  logo: {
    width: 100, 
    height: 40,
    marginBottom: 5, 
  },
  checkout: {
    width: 150, 
    height: 40,
  },
  searchIcon: {
    width: 30, 
    height: 30, 
    marginRight: 10,
  },
});

export default App;
