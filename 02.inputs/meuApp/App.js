import React, { useState } from "react";
import { ScrollView, Text, View, Image, TextInput } from "react-native";
import Cat from "./src/components/Cat"

function App() {
  const [catName, setCatName] = useState("");
  return (
    <ScrollView>
      <Text>Blue CAT</Text>
      <View style={{alignItems: 'center'}}>
        <Text>Hello, Blue CAT</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          placeholder="Escreva seu nome"
          onChangeText={(name) => setCatName(name)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {catName.split(' ').map((mask) => mask && '.').join(' ')}
        </Text>
        <Cat name={catName}/>
        

      </View>
      <Text>Blue CAT</Text>
      <View style={{alignItems: 'center'}}>
        <Text>Hello, Blue CAT</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          placeholder="Escreva seu nome"
          onChangeText={(name) => setCatName(name)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {catName.split(' ').map((mask) => mask && '.').join(' ')}
        </Text>
        <Cat name={catName}/>
        

      </View>
      <Text>Blue CAT</Text>
      <View style={{alignItems: 'center'}}>
        <Text>Hello, Blue CAT</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          placeholder="Escreva seu nome"
          onChangeText={(name) => setCatName(name)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {catName.split(' ').map((mask) => mask && '.').join(' ')}
        </Text>
        <Cat name={catName}/>
        

      </View>
      <Text>Blue CAT</Text>
      <View style={{alignItems: 'center'}}>
        <Text>Hello, Blue CAT</Text>
        <Image
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
          style={{ width: 200, height: 200 }}
        />
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          placeholder="Escreva seu nome"
          onChangeText={(name) => setCatName(name)}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {catName.split(' ').map((mask) => mask && '.').join(' ')}
        </Text>
        <Cat name={catName}/>
        

      </View>

    </ScrollView>
  )
}

export default App;
