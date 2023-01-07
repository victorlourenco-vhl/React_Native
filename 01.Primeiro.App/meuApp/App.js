import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, Button, TextInput} from 'react-native';

function App() {
  const [valor, setValor] = useState(false);
  return (
    <View style={styles.area}>
      <Button title='Clicar' onPress={() => setValor(!valor)}/>
      <Text >{valor?'Victor':'Lourenço'}</Text>
      
      <Text style={[styles.alinhaTexto, styles.tamanhoFonte]}>Eu sou o texto 1</Text>
      <Text>Eu sou o texto 2</Text>
      <Text>Eu sou o texto 3</Text>
      <Text style={styles.alinhaTexto}>Eu sou o texto 4</Text>

      

      <View style={{ flex: 1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
        <View style={{width:50, height:50, backgroundColor:'green'}}></View>
        <View style={{width:50, height:50, backgroundColor:'red'}}></View>
        <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
        <View style={{width:50, height:50, backgroundColor:'yellow'}}></View>
      </View>
      

    </View>
  );
}



const styles = StyleSheet.create({
  area:{
    marginTop: 40,
    flex: 1
  },
  alinhaTexto:{
    textAlign: 'center'
  },
  tamanhoFonte:{
    fontSize:25,
    color: '#FF0000'
  }
});
export default App




