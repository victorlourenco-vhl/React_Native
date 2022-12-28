import React, { useState } from 'react';
import { Image, Text, View, Button } from 'react-native';

function App() {
  const [valor, setValor] = useState(false);
  return (
    <View>
      <Button title='Clicar' onPress={() => setValor(!valor)}/>
      <Text>{valor?'Victor':'Lourenço'}</Text>
    </View>
  );
}




export default App;
