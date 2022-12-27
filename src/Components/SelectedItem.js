import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export const SelectedItem = ({ item, setSelectedItem }) => {

  return (
    <View style={styles.Item}>
      <Image source={{height: 300, width: 300, uri: item.urls.full}}></Image>
      <Text style={styles.Text}>{item.alt_description}</Text>
      <Text style={styles.Text}>Author:  {item.user.first_name}</Text>
      <Button title='back' color={'#333333'} onPress={() => setSelectedItem(null)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50%'
  },
  Text: {
    marginBottom: 12
  }
});