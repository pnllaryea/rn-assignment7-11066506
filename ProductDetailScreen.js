import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      
      <Text style={styles.sectionTitle}>MATERIALS</Text>
      <Text style={styles.materialsText}>
        We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
      </Text>
      
      <View style={styles.careInstructions}>
  <View style={styles.careRow}>
    <Image source={require('../assets/Do Not Bleach.png')} style={styles.careIcon} />
    <Text style={styles.careText}>Do not use bleach</Text>
  </View>
  <View style={styles.careRow}>
    <Image source={require('../assets/Do Not Tumble Dry.png')} style={styles.careIcon} />
    <Text style={styles.careText}>Do not tumble dry</Text>
  </View>
  <View style={styles.careRow}>
    <Image source={require('../assets/Do Not Wash.png')} style={styles.careIcon} />
    <Text style={styles.careText}>Dry clean with tetrachloroethylene</Text>
  </View>
  <View style={styles.careRow}>
    <Image source={require('../assets/Iron Low Temperature.png')} style={styles.careIcon} />
    <Text style={styles.careText}>Iron at a maximum of 110ºC/230ºF</Text>
  </View>
</View>

      
      <Text style={styles.sectionTitle}>ADDITIONAL INFORMATION</Text>
      <View style={styles.additionalInfo}>
        <Image source={require('../assets/Shipping.png')} style={styles.infoIcon} />
        <Text style={styles.additionalInfoText}>Free Flat Rate Shipping</Text>
      </View>
      <Text style={styles.estimatedDelivery}>
        Estimated to be delivered on 09/11/2023 - 12/11/2023.
      </Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD TO BASKET - ${product.price}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 24,
    color: '#d9534f',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  materialsText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  careInstructions: {
    marginTop: 10,
  },
  careIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  careText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  additionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  additionalInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  estimatedDelivery: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  careText: {
    fontSize: 16,
    color: '#333',
  },
  careRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default ProductDetailScreen;
