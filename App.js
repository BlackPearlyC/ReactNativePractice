import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, SafeAreaView, Alert, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {

  // Below useState is use to create and refer into the code
  // const [name, setName] = useState('Yash')
  // const [age, setAge] = useState(20)

  // const pressed = () => {
  //   setName('')
  //   setAge('')
  // }

  // this is for the perpose of List creation using Map also use for the flatlist.
  // const [fruit, setFruit] = useState([
  //   { name: 'Nayan', key: 1 },
  //   { name: 'Banana', key: 2 },
  //   { name: 'Orange', key: 3 },
  //   { name: 'Mango', key: 4 },
  //   { name: 'Apple', key: 5 },
  //   { name: 'Banana', key: 6 },
  //   { name: 'Orange', key: 7 },
  //   { name: 'Mango', key: 8 },
  //   { name: 'Apple', key: 9 },
  //   { name: 'Banana', key: 10 },
  //   { name: 'Orange', key: 11 },
  //   { name: 'Mango', key: 12 },
  //   { name: 'Mango', key: 13 },
  //   { name: 'Apple', key: 14 },
  //   { name: 'Banana', key: 15 },
  //   { name: 'Orange', key: 16 }
  // ])

  // This functin is running for touchableopicity function that fades the background and call function onPress
  // const pressHandler = (name) => {
  //   console.log(name)
  // }

  // Bellow is for dinkable-nonDrinkable application
  // const [name,setName] = useState('')
  // const [age,setAge] = useState('')

  // const handleSubmit = () => {
  //   if(age >= 21){
  //     Alert.alert('Congrats!!!',`Hello ${name}, You can drink`)
  //   }
  //   else{
  //     Alert.alert('Oops!',`Sorry ${name}, You can't drink`)
  //   }
  // }

  // Alert Modification code
  // const [name, setName] = useState('')
  // const [age, setAge] = useState(0)
  // const [gender, setGender] = useState('')

  // const pressHandler = () => {
  //   Alert.alert('Details','Are you sure, we want to submit',[
  //     {text: 'Yes', onPress: ()=>console.log('Yes is pressed')},
  //     {text: 'No', onPress: ()=>pressNo('No is pressed')}
  //   ])
  // }

  // const pressNo = () => {
  //   setName('')
  //   setAge(0)
  //   setGender('')
  // }

  // Customized button code
  const [name, setName] = useState('')

  return (

    // Below code is used to demonstrate the use of Text and Button component

    // <View style={styles.container}>
    //   {/* we cannot write anything without text component */}
    //   <Text style={styles.textStyle}>Hello World</Text>
    //   <Text>Hello {name}</Text>
    //   {/* <StatusBar style="auto" /> */}
    //   {/* button keyword */}
    //   <View style={styles.button}>
    //     <Button title='Change Name' color='white' onPress={pressed} disabled={false}></Button>
    //   </View>
    // </View>

    // Below Code displays to take input from an user and display using useState

    // <View style={styles.container}>
    //   <Text>Name: </Text>
    //   <TextInput style={styles.inputStyle} onChangeText={(text)=>setName(text)} placeholder='Enter your name'/>
    //   <Text>Age: </Text>
    //   <TextInput style={styles.inputStyle} onChangeText={(num)=>setAge(num)} placeholder='Enter your age' keyboardType="numeric"/>
    //   <Text>My name is {name}, and my age is {age}.</Text>
    // </View>

    // This code is fro fatching data from list and view it on scroll bar

    // <View style={styles.container}>

    //   <ScrollView>
    //     {fruit.map((item) => {
    //       return (
    //         <View key={item.key}>
    //           <Text style={styles.item}>{item.name}</Text>
    //         </View>
    //       )
    //     })}
    //   </ScrollView>

    // </View>

    // Similer to the list, FlatList works same
    // <View style={styles.container}>
    //   <FlatList 
    //     keyExtractor={(item)=>item.key}
    //     data={fruit}
    //     renderItem={({item})=>(
    //       <View>
    //         <Text style={styles.item}>{item.name}</Text>
    //      </View>
    //     )}
    //   />
    // </View>

    // Use to make things touchable on the screen without using button keyword
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={()=>pressHandler('Yash')}>
    //     <Text>Hello </Text>
    //   </TouchableOpacity>
    // </View>

    // <SafeAreaView>

    // Drinkable-nonDrinkable app
    // <View style={styles.container}>
    //   <Text>Name</Text>
    //   <TextInput style={styles.inputBox} onChangeText={(item)=>setName(item)} placeholder={'Enter Your Name'}></TextInput>
    //   <Text>Age</Text>
    //   <TextInput style={styles.inputBox} onChangeText={(item)=>setAge(item)} placeholder={'Enter Your age'} keyboardType='numeric'></TextInput>
    //   <Button title='Can I Drink' style={styles.button} onPress={()=>handleSubmit()}/>
    // </View>
    // {/* </SafeAreaView> */}

    // Images Changing Setting and how to import images
    // <View style={styles.container}>
    //   <Text>Hello World!</Text>
    //   <Image source={require('./assets/icon.png')} style={styles.image}/>
    // </View>

    // Customise alert
    // <View style={styles.container}>
    //   <TextInput onChangeText={(item) => setName(item)} style={styles.input} placeholder='Name' />
    //   <TextInput onChangeText={(item) => setAge(item)} style={styles.input} placeholder='Age' />
    //   <TextInput onChangeText={(item) => setGender(item)} style={styles.input} placeholder='Gender' />
    //   <Button title='Submit' onPress={() => pressHandler()} />
    //   <Text>{name}, {age}, {gender}</Text>
    // </View>

    // problem solution, keyboard is not dismesstion, go back after clicking on screen, it get dismissed after only when we press ok/enter button
    // <TouchableWithoutFeedback onPress={()=>{
    //   Keyboard.dismiss()
    // }}>
    //   <View style={styles.container}>
    //     <TextInput style={styles.input} placeholder='Name'></TextInput>
    //   </View>
    // </TouchableWithoutFeedback>

    // Customized button 
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <TextInput style={styles.input} onChangeText={(item) => setName(item)} placeholder='Enter your Name'></TextInput>
    //     <TouchableOpacity onPress={() => Alert.alert('Your Details', 'Name: ' + name)}>
    //       <View style={styles.button}>
    //         <Text style={styles.text}>Submit</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    // </TouchableWithoutFeedback>

    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  // Below css code is for the testing purposeash 

  // container: {
  //   flex: 1,
  //   // height: '50%',
  //   // width: '50%',
  //   // backgroundColor: 'lightgray',
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // textStyle: {
  //   fontSize: 20,
  //   color: 'red',
  //   fontStyle: 'italic',
  //   fontWeight: '800'
  // },
  // button: {
  //   backgroundColor: 'gray',
  //   borderRadius: 20,
  //   marginTop: 10,
  //   // fontSize: 30
  // }

  // Below code is for the TextInput Code

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // inputStyle: {
  //   borderColor: 'black',
  //   borderWidth: 1,
  //   width: 150,
  //   padding: 2,
  //   margin: 5
  // }


  // This code is for the Scroable and list fatch data
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   marginTop: 15
  // },
  // item: {
  //   fontSize: 20,
  //   backgroundColor: 'gray',
  //   marginTop: 20,
  //   padding: 10
  // }

  // for touchableopecity function
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },

  // Bellow code is for drinkable-nonDrinkable problem css
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // inputBox: {
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   width: 150,
  //   padding: 2,
  //   margin: 5
  // },
  // button: {
  // }

  // Below code is for the Image type
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  // image:{
  //   width: 150,
  //   height: 150
  // }

  // customize alert
  // container: {
  //   flex: 1,
  //   marginTop: 40,
  //   padding: 20,
  //   backgroundColor: 'white',
  // },
  // input: {
  //   backgroundColor: 'pink',
  //   marginTop: 20,
  //   padding: 20
  // }

  // Code for dismissing keyboard
  // container: {
  //   flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center'
  //   marginTop: 40,
  //   padding: 20,
  //   backgroundColor: 'white'
  // },
  // input: {
  //   padding: 20,
  //   backgroundColor: 'pink',
  //   marginTop: 20
  // }

  // Customized button
  // container: {
  //   flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   backgroundColor: 'white',
  //   marginTop: 40,
  //   padding: 20
  // },
  // input: {
  //   backgroundColor: 'pink',
  //   marginTop: 20,
  //   padding: 20,
  //   borderRadius: 20
  // },
  // button: {
  //   backgroundColor: 'gray',
  //   padding: 20,
  //   marginTop: 10,
  //   alignItems: 'center',
  //   borderWidth: 3,
  //   borderColor: 'black',
  //   borderRadius: 20,
  //   // width: '50%'
  // },
  // text: {
  //   color: 'white'
  // }

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }

});
