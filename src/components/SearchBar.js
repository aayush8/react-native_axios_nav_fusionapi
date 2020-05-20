import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({text, changeText, editcomplete}) => {
    return (
        <View style={styles.view}>
            <Feather name="search" size={25} />
            <TextInput onChangeText={changeText} onEndEditing={() => editcomplete()}
                style={styles.textinput} autoCapitalize="none" autoCorrect={false} placeholder="eg. pizza" 
            />
            
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderColor: "black", borderWidth: 1,
        marginVertical: 25,  marginHorizontal: 10,
        paddingVertical: 10,  paddingLeft: 15
    },
    textinput: {
       marginLeft: 10,
       paddingLeft: 5,
       fontSize: 15,
       flex: 1
    }
})
