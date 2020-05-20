import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import SingleRestaurant from './SingleRestaurant'

const ResultScreen = ({name, results, navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.heading}>{name}</Text>
        <Text>Count : {results.length}</Text>
        <FlatList horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={(item) => 
                (
                 <TouchableOpacity onPress={() => navigation.navigate("Single", {result:item.item} )}><SingleRestaurant  result={item.item} /></TouchableOpacity>
                )}
        />
        </View>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    view: {
        //borderColor: "black", borderBottomWidth: 1,
        margin:10, padding:10,
        backgroundColor: "#FFF"},
    heading: {
        fontSize:18, fontWeight: "bold",
    }
})
