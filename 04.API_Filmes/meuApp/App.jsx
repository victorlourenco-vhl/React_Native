import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import api from "../meuApp/src/services/api"
import Filme from "./src/components/Filme";

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
          ({ item }) => <Filme nome={item.nome} img={item.foto} 
          sinopse={item.sinopse}/>
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
    color: '#ff0606',
    padding: 20,
    fontSize: 40
  }


})