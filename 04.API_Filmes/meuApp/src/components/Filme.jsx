import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";


export default function Filme({ nome, img, sinopse }) {
    const [showSinopse, setShowSinopse] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{nome}</Text>
            <TouchableOpacity onPress={() => setShowSinopse(!showSinopse)}>
                <Image
                    source={
                        { uri: img }
                    }
                    style={styles.img}

                />
            </TouchableOpacity>
            {
                showSinopse && (
                    <Text style={styles.title}>{sinopse}</Text>
                )
            }

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold'
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10
    }
})