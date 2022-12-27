import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getItems } from './src/API/api';
import { ItemsList } from './src/Components/ItemsList/ItemsList'
import { SelectedItem } from './src/Components/SelectedItem';

export default function App() {
  const [items, setItems] = useState([])
  const [isLoad, setIsLoad] = useState(false)
  const [itemId, setItemId] = useState(null)
  
  const loadData = async() => {
    const res = await getItems()

    console.log(res)

    setItems(res)
    setIsLoad(true)
  }

  useEffect(() => {
    loadData()
  }, [])

  const setSelectedItem = (id) => {
    setItemId(id)
  }

  let content = (<ScrollView>
    <ItemsList items={items} setSelectedItem={setSelectedItem}></ItemsList>
  </ScrollView>)

  if (itemId) {
    const selectedItem = items.find(item => item.id === itemId)
    content = <SelectedItem item={selectedItem} setSelectedItem={setSelectedItem}/>
  }
  
  return (
    <View style={styles.container}>
      {
        !isLoad
        ? <Text>none</Text>
        : content
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
});
