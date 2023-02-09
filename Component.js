import react, { useState } from "react";
import { SectionList, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'

export default function Component(props) {

    // Custom component fro section list

    // const Item = ({ title }) => (
    //     <View style={styles.item}>
    //         <Text style={styles.title}>{title}</Text>
    //     </View>
    // )

    return (

        // Props Example
        // <View style={styles.container}>
        //     <Text style={styles.text}>
        //         Hello {props.name}, welcome to our app
        //     </Text>
        // </View>

        // Switch using component
        // <View style={styles.container}>
        //     <Switch 
        //         trackColor={props.toggleChanger?'green':'red'}
        //         thumbColor={'black'}
        //         onValueChange={props.toggleChanger}
        //         ios_backgroundColor={'red'}
        //         value={props.isEnabled}
        //     />
        // </View>

        // Customize Button
        // <TouchableOpacity onPress={()=>props.click()}>
        //     <View style={styles.container}>
        //         <Text style={styles.text}>{props.title}</Text>
        //     </View>
        // </TouchableOpacity>

        // Custome component section list
        // <View style={styles.container}>
        //     <SectionList
        //         sections={props.data}
        //         keyExtractor={(itemes, index) => itemes + index}
        //         renderItem={({ item }) => <Item title={item} />}
        //         renderSectionHeader={({ section: { title } }) => (
        //             <Text style={styles.header}>{title}</Text>
        //         )}
        //     />
        // </View>

        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    // Customized Button
    // container: {
    //     backgroundColor: 'gray',
    //     padding: 15,
    //     borderRadius: 20,
    //     borderWidth: 1,
    //     alignItems: 'center',
    //     width: '50%',
    //     alignSelf: 'center'
    // },
    // text: {
    //     color: 'white',
    //     fontSize: 15
    // }

    // Component Customized Section List
    // container: {
    //     backgroundColor: 'white',
    //     // flex: 1,
    //     // alignItems: 'center',
    //     // justifyContent: 'center'    
    //     marginTop: 40,
    //     padding: 20
    // },
    // item: {
    //     backgroundColor: 'yellow',
    //     marginVertical: 20,
    //     // fontSize: 15
    //     padding: 20
    // },
    // title: {
    //     fontSize: 15
    // },
    // header: {
    //     fontSize: 15
    // }

    // 
    container: {
        backgroundColor: 'white',
        marginTop: 40,
        padding: 20
    }
})