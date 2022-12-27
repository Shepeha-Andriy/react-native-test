import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export const Item = ({ item, setSelectedItem }) => {

  return (
    <View>
      <TouchableOpacity style={styles.Item} onPress={() => setSelectedItem(item.id)}>
        <Image source={{height: 200, width: 200, uri: item.urls.small}}></Image>
      </TouchableOpacity>
      <Text style={styles.Text}>{item.alt_description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Item: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    marginBottom: 20
  }
});