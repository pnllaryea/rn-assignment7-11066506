// HomeScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../api';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [products] = useState([
    { id: '1', name: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', description: 'Your perfect pack for everyday use and walks in th..', price: 109.95, image: require('../assets/Fjallraven.jpg') },
    { id: '2', name: 'Mens Casual Premium SLim Fit T-Shirts', description: 'Slim-fitting style, contrast raglan long sleeve, t...', price: 22.3, image: require('../assets/MensCasualPremiumSLimFit.jpg') },
    { id: '3', name: 'Mens Cotton Jacket', description: 'great outerwear jackets for Spring/ Autumn/ Winter, ...', price: 55.99, image: require('../assets/MensCottonJacket.jpg') },
    { id: '4', name: 'Mens Casual Slim Fit', description: 'The color could be slightly different between on t...', price: 15.99, image: require('../assets/MensCasualSlimFit.jpg') },
    { id: '5', name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", description: 'From our Legends Collection, the Naga was inspired..', price: 695, image: require('../assets/JohnHardy.jpg') },
    { id: '6', name: 'Solid Gold Petite Micropave', description: 'Satisfaction Guaranteed. Return or exchange any or...', price: 168, image: require('../assets/SolidGold.jpg') },
    { id: '7', name: 'White Gold Plated Princess', description: 'Classic Created Wedding Engagement Solitaire Diamo...', price: 9.99, image: require('../assets/WhiteGold.jpg') },
    { id: '8', name: 'Pierced Owl Rose Gold Plated Stainless steel Double', description: 'Rose Gold Plated Double Flared Tunnel Plug Tarring...', price: 10.99, image: require('../assets/PiercedOwlRose.jpg') },
    { id: '9', name: 'WD 2TB Elements Portable External Hard Drive - USB 3.0', description: 'USB 3.0 and USB 2.0 Compatibility Fast data transf...', price: 64, image: require('../assets/WD.jpg') },
    { id: '10', name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', description: 'Easy upgrade for faster boot up, shutdown, applica...', price: 109, image: require('../assets/SanDisk.jpg') },
    { id: '11', name: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', description: '3D NAND flash are applied to deliver high transfer...', price: 109, image: require('../assets/SiliconPower.jpg') },
    { id: '12', name: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', description: 'Expand your PS4 gaming experience, Play anywhere F...', price: 114, image: require('../assets/WD4TB.jpg') },
    { id: '13', name: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', description: '21.5 inches Full HD (1920 x 1080) widescreen IPS ...', price: 599, image: require('../assets/ACER.jpg') },
    { id: '14', name: 'Samsung 49-Inch CHG90 144Hz Curved Gaming MOnitor (LC49HG90DMNXZA) - Super Ultrawide Screen  QLED', description: '49 INCH SUPER ULTAWIDE 32:9 CURVED GAMING MONITOR...', price: 999.99, image: require('../assets/SAMSUNG.jpg') },
    { id: '15', name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", description: 'Note: The Jacket is US standard size, Please choos...', price: 56.99, image: require('../assets/BIYLACLESEN.jpg') },
    { id: '16', name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", description: '100% POLYURETHANE(shell) 100% POLYURETHANE(lining)75...', price: 120, image: require('../assets/LOCKANDLOVE.jpg') },
    { id: '17', name: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats', description: 'Lightweight perfet for trip or casual wear--- Long ...', price: 39.99, image: require('../assets/RainJacket.jpg') },
    { id: '18', name: "MBJ Women's Solid Short Sleeve Boat Neck V", description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do ...', price: 9.85, image: require('../assets/MBJ.jpg') },
    { id: '19', name: "Opna Women's Short Sleeve Moisture", description: '100% Polyester, Machine wash, 100% cationic polyes...', price: 7.95, image: require('../assets/Opna.jpg') },
    { id: '20', name: 'DANVOUY Womens T Shirt Casual Cotton Short', description: '95%Cotton,5%Spandex, Features: Casual, Short Sleev...', price: 12.99, image: require('../assets/DANVOUY.jpg') },
  ]);

  const addToCart = async (product) => {
    try {
      let cartItems = await AsyncStorage.getItem('cart');
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems.push(product);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (error) {
      console.log(error);
    }
  };

  const onProductPress = (product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <ProductList products={products} onAddToCart={addToCart} onProductPress={onProductPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 16,
    height: 60,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  headerLogo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  storyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  storyImage: {
    width: 120, 
    height: 40, 
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
});

export default HomeScreen;
