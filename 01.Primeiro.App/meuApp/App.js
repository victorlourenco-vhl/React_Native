import React from 'react';
import { Image, Text, View } from 'react-native';

function App() {
  
  return (
    <View>
      <Text>Olá, Mundo!</Text>
      <Text>Meu primeiro App</Text>
      <Text style={{ color: 'red', fontSize: 30 }}>Victor Hugo Lourenço</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={{ width: 300, height: 300 }}
      />
      <Jobs largura={100} altura={200} nome='Jobs'/>
    </View>
  );
}

function Jobs({largura, altura, nome}) {
  let img = 'https://sujeitoprogramador.com/steve.png';
  return (
    <View>
      <Image 
        source={{uri : img}}
        style={{width: largura, height: altura}}
      />
      <Text>{nome}</Text>
    </View>
  )
}

export default App;
