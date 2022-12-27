import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Item } from '../Item/Item';

export const ItemsList = ({ items, setSelectedItem }) => {

  return (
    <View>
      {
        items.map(item => (
          <Item key={item.id} item={item} setSelectedItem={setSelectedItem}></Item>
        ))
      }
    </View>
  );
}
