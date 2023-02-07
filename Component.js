import react, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'

export default function Component(props) {

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

    // 
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'    
    }
})