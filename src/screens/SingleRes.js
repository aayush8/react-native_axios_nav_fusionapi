import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const SingleRes = ({route, navigation}) => {
    let data = route.params.result
     const [res, setres] = useState(null)

     const getres = async () => {
        const tmpres = await yelp.get(`/${data.id}`)
        setres(tmpres.data)
        
        console.log(res)
        console.log("---------------")
     }

     useEffect(() => {
         console.log("---------------------------");
         console.log("Useeffect begins here ...");
         getres();
         console.log("---------------------------");
     }, [])

     if(!res) {
         return null;
     }

    return (
        <View>
            <Text>{data.name}</Text>
            <Text>{`Address: ${data.location.address1}, ${data.location.city}, ${data.location.state} ${data.location.zip_code}`}</Text>
            <FlatList 
                keyExtractor={photo => photo}
                data={res.photos}
                renderItem={(item) => (
                    <Image 
                        style={{height:150, width: 300, margin: 10, padding: 10}}
                        source={{uri: item.item}}
                    />
                    //<Text>{item.item}</Text>
                )}
            />
        </View>
    )
}

export default SingleRes

const styles = StyleSheet.create({})
