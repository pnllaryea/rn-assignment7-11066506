import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductList = ({ products, onAddToCart, onProductPress }) => {
  return (
    <View style={styles.productContainer}>
      {products.map((product) => (
        <TouchableOpacity 
          key={product.id} 
          style={styles.product} 
          onPress={() => onProductPress(product)}
        >
          <View style={styles.imageContainer}>
            <Image source={product.image} style={styles.productImage} />
            <TouchableOpacity 
              style={styles.addCircleContainer} 
              onPress={() => onAddToCart(product)}
            >
              <Image source={require('../assets/add_circle.png')} style={styles.addCircle} />
            </TouchableOpacity>
          </View>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%', // Adjust this based on your layout preference
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  addCircleContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCircle: {
    width: 24,
    height: 24,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    margin: 10,
  },
});

export default ProductList;
