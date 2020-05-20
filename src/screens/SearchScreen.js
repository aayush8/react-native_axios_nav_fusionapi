import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View , ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import ResultScreen from '../components/ResultScreen'

const SearchScreen = ({navigation}) => {

    const [text, settext] = useState('')
    const [editcomplete, seteditcomplete] = useState([])
    const [errorsg, seterrorsg] = useState("")

    const filterResultsByPrice = (price) => {
        return editcomplete.filter(res => res.price===price)
    }

    const changeText = (text) => settext(text)
    //const changeEdit = () => seteditcomplete(editcomplete+1)
    const changeEdit =async (val=text) => {
        try{
           changeText("")
            const res = await yelp.get("/search", {
                params: {
                    term: val,
                    limit: 50,
                    location: "sydney"
                }
            });
            await seteditcomplete(res.data.businesses);
           
        }
        catch(error) {
            console.log(error)
            seterrorsg("Oops something went wrong ...");
        }
    }

  //  useEffect(() => changeEdit("food"), [])


    return (
        <View style={{flex: 1}}>

            <SearchBar text={text} changeText={changeText} editcomplete={changeEdit}/>
            {/* <Text>The text is {text}</Text> */}
            {errorsg ? <Text>{errorsg}</Text> : null}
            {/* <Text>Editing completed count is {editcomplete.length}</Text> */}
            <ScrollView>
            <ResultScreen navigation={navigation} name="Cheap" results={filterResultsByPrice("$")}/>
            <ResultScreen navigation={navigation} name="Medium" results={filterResultsByPrice("$$")}/>
            <ResultScreen navigation={navigation} name="Expensive" results={filterResultsByPrice("$$$")}/>
            </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
