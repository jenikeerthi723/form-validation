import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'

const Test = () => {
    const [data, setData] = useState([
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthu", email: "keerthu123@gmail" },
        { name: "jeni", email: "jeni123@gmail" },
        { name: "kani", email: "kani123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthu", email: "keerthu123@gmail" },
        { name: "jeni", email: "jeni123@gmail" },
        { name: "kani", email: "kani123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthu", email: "keerthu123@gmail" },
        { name: "jeni", email: "jeni123@gmail" },
        { name: "kani", email: "kani123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthu", email: "keerthu123@gmail" },
        { name: "jeni", email: "jeni123@gmail" },
        { name: "kani", email: "kani123@gmail" },
        { name: "keerthi", email: "keerthi123@gmail" },
        { name: "keerthu", email: "keerthu123@gmail" },
        { name: "jeni", email: "jeni123@gmail" },
        { name: "kani", email: "kani123@gmail" },


    ])
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <Text style={{ backgroundColor: "blue", fontSize: 20, margin: 10 }}>{item.name},{item.email}</Text>}
            />

        </View>
    )
}

export default Test

const styles = StyleSheet.create({})