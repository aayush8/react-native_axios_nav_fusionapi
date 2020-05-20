import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const SingleRestaurant = ({result}) => {
    return (
        <View style={styles.view}>
            <Image style={styles.img} source={{uri: result.image_url}}/>
            <Text>{result.name}</Text>
        </View>
    )
}

export default SingleRestaurant

const styles = StyleSheet.create({
    view: {
        //borderWidth:1, borderColor: "black",
        padding: 5, margin: 5
    },
    img : {
        height: 100, width: 200
    }
})
