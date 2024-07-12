import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CartItem from './CartItem';

const CartList = ({ cartItems, onRemove }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} onRemove={() => onRemove(item.id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default CartList;