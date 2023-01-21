import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import api from "../src/services/api";


export default function App() {

  const [filme, setFilme] = useState([])

  useEffect(() => {
    api.get('r-api/?api=filmes').then(({ data }) => {
      setFilme(data)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes API</Text>
      <FlatList
        data={filme}
        renderItem={
          ({ item }) => <Text></Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    padding: 20,
    fontSize: 30
  }


})