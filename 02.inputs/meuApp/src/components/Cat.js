import React, { useState } from "react"
import { Text, View, Button} from "react-native"

export default function Cat(props) {
    const [isHungry, setHungry] = useState(true);
    return (
        <View>
            <Text>Olá, eu sou o {props.name}!</Text>
            <Button 
                onPress={() => {
                    setHungry(!isHungry)
                }}
                title={isHungry?'ME DE COMIDA':'OBRIGADO'}
            />
        </View>
    )
}