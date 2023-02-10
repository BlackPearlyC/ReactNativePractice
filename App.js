import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, SafeAreaView, Alert, Image, TouchableWithoutFeedback, Keyboard, Modal, Switch, ActivityIndicator, SectionList, Pressable, RefreshControl, InputAccessoryView, TouchableNativeFeedback, ToastAndroid, Appearance, useColorScheme } from 'react-native';

import Component from './Component';

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
  // const [name, setName] = useState('')

  //React hook useEffect use
  // const [number, setNumber] = useState(0)

  // useEffect(() => {
  //   if(number>10){
  //     console.warn('Dom is updated to ',number)
  //   }
  // })

  // Modal Application/usage
  // const [open, setOpen] = useState(false)
  // const [name, setName] = useState('')
  // const [age, setAge] = useState(0)

  // props usage
  // const [name, setName] = useState('')

  // Switch Case
  // const [isEnabled, setIsEnabled] = useState(false)

  // const toggleSwitch = () => {
  //   setIsEnabled(previousState=>!previousState)
  // }

  // Customized Button component
  // const clickMe = () => {
  //   Alert.alert('Hello', 'Button is working fine')
  // }

  // Activity Indicator
  // const [name, setName] = useState('')
  // const [show, setShow] = useState(false)

  // const handleSubmit = () => {
  //   setShow(true)

  //   setTimeout(() => {
  //     setShow(false)
  //   }, 3000);
  // }

  // Section List
  // const Data = [
  //   {
  //     title: "Main Items",
  //     data: ["Pizza", "Burger"]
  //   },
  //   {
  //     title: 'Slides',
  //     data: ['French Fries', 'Onion Rings']
  //   },
  //   {
  //     title: 'Drinks',
  //     data: ['Coke', 'Sprite', 'Water']
  //   },
  //   {
  //     title: 'Deserts',
  //     data: ['Ice-cream', 'Cake']
  //   },
  //   {
  //     title: "Main Items",
  //     data: ["Pizza", "Burger"]
  //   },
  //   {
  //     title: 'Slides',
  //     data: ['French Fries', 'Onion Rings']
  //   },
  //   {
  //     title: 'Drinks',
  //     data: ['Coke', 'Sprite', 'Water']
  //   },
  //   {
  //     title: 'Deserts',
  //     data: ['Ice-cream', 'Cake']
  //   }
  // ]

  // const Items = ({title}) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // )

  // Pressable component
  // const [count, setCount] = useState(0)

  // RefressControler
  // const [refresh, setRefresh] = useState(false)

  // const pullMe = () => {
  //   setRefresh(true)
  //   setTimeout(()=>{
  //     setRefresh(false)
  //   },3000)
  // }

  // InputAccessoryView : Only for IOS devices
  // const [name, setName] = useState('')
  // const InputAccessaryViewId = 'id'

  // Touchable Native Feedback
  // const [rippleOverFlow, setrippleOverFlow] = useState(false)

  // toast android
  // const showTost = () => {
  //   ToastAndroid.show('Welcome to React Native Toast',ToastAndroid.SHORT)
  // }

  // const showTostWithGravity = () => {
  //   ToastAndroid.showWithGravity('Welcome to React Native Gravity',ToastAndroid.SHORT, ToastAndroid.CENTER)
  // }

  // const showTostWithGravityandOffset = () => {
  //   ToastAndroid.showWithGravityAndOffset('Welcome to React Native Gravity and Offset', ToastAndroid.LONG,ToastAndroid.BOTTOM,30,50)
  // }

  // Apperences //Light and Dark Mode
  // const [name, setName] = useState('')
  // const [age, setAge] = useState('')

  // const [theme, setTheme] = useState(Appearance.getColorScheme())
  // Appearance.addChangeListener((schema) => {
  //   console.log(schema.colorScheme)
  //   setTheme(schema.colorScheme)
  // })

  // const theme = useColorScheme()

  // const colorScheme = Appearance.getColorScheme()
  // useEffect(()=>{
  //   const colorTheme = Appearance.getColorScheme()
  //   console.log(colorTheme)
  //   setTheme(colorTheme)

  // },[])
  // const theme = useColorScheme()

  // 


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

    // React Hoook use useEffect
    // <View style={styles.container}>
    //   <Text style={styles.label}>{number}</Text>
    //   <Button title='Update' onPress={()=>setNumber(number+1)}/>
    // </View>

    // Flex usage
    // <View style={styles.container}>
    //   <View style={{ backgroundColor: 'yellow', flex: 10, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Hello</Text>
    //   </View>
    //   <View style={{ backgroundColor: 'blue', flex: 10, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text style={{ color: 'white' }}>World</Text>
    //   </View>
    //   <View style={{ backgroundColor: 'red', flex: 10 }}></View>
    //   <View style={{ backgroundColor: 'green', flex: 10 }}></View>
    // </View>

    // Model: additional screen, which we can use it as pop-up screen
    // <View style={styles.container}>
    //   <Text>Main Screen</Text>
    //   <Modal visible={false}>
    //     <View style={styles.container}>
    //       <Text>Modal Screen</Text>
    //     </View>
    //   </Modal>
    // </View>

    // Small example using modal
    // <View style={styles.container}>
    //   <TextInput style={styles.input} onChangeText={(item) => setName(item)} placeholder='Enter Your Name'></TextInput>
    //   <TextInput style={styles.input} onChangeText={(item) => setAge(item)} placeholder='Enter Your Age'></TextInput>
    //   <View style={{flex: 1, flexDirection: 'row',}}>
    //     <TouchableOpacity onPress={() => { }}>
    //       <View style={{ backgroundColor: 'gray', borderRadius: 10, padding: 10, marginTop: 20, marginRight: 10}}>
    //         <Text style={{ color: 'white' }}>Submit</Text>
    //       </View>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => { }}>
    //       <View style={{ backgroundColor: 'gray', borderRadius: 10, padding: 10, marginTop: 20 }}>
    //         <Text style={{ color: 'white' }}>Modal</Text>
    //       </View>
    //     </TouchableOpacity>
    //   </View>
    //   <Modal visible={open}>
    //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //       <Text>{name} {age}</Text>
    //     </View>
    //   </Modal>
    // </View>

    // Modals example
    // <View style={styles.container}>
    //   <TextInput style={styles.input} onChangeText={(item) => setName(item)} placeholder='Enter your Name'></TextInput>
    //   <TextInput style={styles.input} onChangeText={(item) => setAge(item)} placeholder='Enter your Age'></TextInput>
    //   <Button title='Click' onPress={() => setOpen(true)} />

    //   <Modal visible={open}>
    //     <View style={styles.container}>
    //       <Text style={{ fontSize: 20 }}>You name is {name} and you are {age} years old.</Text>
    //       <Button title='Close' onPress={()=>setOpen(false)}/>
    //     </View>
    //   </Modal>
    // </View>

    // props usage
    // <View style={styles.container}>
    //   <TextInput onChangeText={(item)=>setName(item)} style={styles.input} placeholder='Enter Your Name'/>
    //   <Button title='Show' onPress={()=>{}}/>
    //   <Component name={name}/>
    // </View>

    // Switch button
    // <View style={styles.container}>
    //   <Switch
    //     trackColor={isEnabled ? 'green' : 'red'}
    //     thumbColor={isEnabled ? 'yellow' : 'pink'}
    //     onValueChange={toggleSwitch}
    //     ios_backgroundColor='red'
    //     value={isEnabled}
    //   />
    // </View>

    // Multiple toggle using component
    // <View style={styles.container}>
    //   <Component toggleChanger={toggleSwitch} isEnabled={isEnabled} />
    // </View>

    // <View style={styles.container}>
    //   <Component title='Submit' click={clickMe}/>
    //   <Component title='Submit' click={clickMe}/>
    //   <Component title='Submit' click={clickMe}/>
    // </View>

    // Activity Indicator
    // <View style={styles.container}>
    //   <TextInput placeholder='Name' onChangeText={(item) => setName(item)} style={styles.input} />
    //   <Button title='Submit' onPress={handleSubmit} />
    //   <ActivityIndicator size='large' color='red' animating={show} />
    // </View>

    // Section list
    // <View style={styles.container}>
    //   <SectionList 
    //     sections={Data}
    //     keyExtractor={(itemes,index)=>itemes+index}
    //     renderItem={({item})=><Items title={item}/>}
    //     renderSectionHeader={({section:{title}})=>(
    //       <Text style={styles.header}>{title}</Text>
    //     )}
    //   />
    //   {/* <Text>Hello World!</Text> */}
    // </View>

    // Custmozed Component fro Section list
    // <View style={styles.container}>
    //   <Component data={Data}/>
    // </View>

    // Pressablr component trial
    // <View style={styles.container}>
    //   <Pressable style={({pressed})=>[{backgroundColor: pressed ? 'yellow' : 'red'},styles.text]} onPress={()=>setCount(count+1)}>
    //     {({pressed})=><Text>{pressed? 'Pressed':'Press Me'}</Text>}
    //   </Pressable>
    // </View>

    // RefressControler
    // <View style={styles.container}>
    //   <ScrollView 
    //     refreshControl={
    //       <RefreshControl
    //         refreshing={refresh}
    //         onRefresh={pullMe}
    //       />
    //     }
    //   >
    //     <Text>Pulll to Refresh</Text>
    //   </ScrollView>
    // </View>

    // InputAccessoryView : Only for IOS devices
    // <View style={styles.container}>
    //   <TextInput
    //     style={styles.input}
    //     onChangeText={(item) => setName(item)}
    //     placeholder='Enter Your Name' 
    //     value={name}
    //     inputAccessoryViewID={InputAccessaryViewId}
    //   />
    //   <InputAccessoryView nativeID={InputAccessaryViewId}>
    //     <Button title='Clear' 
    //       onPress={()=>setName('')}
    //     />
    //   </InputAccessoryView>
    // </View>

    // Text Props
    // <View style={styles.container}>
    //   <ScrollView>
    //     <Text style={styles.text}>Naveen Kumar Gowda (born 8 January 1986), better known by his stage name Yash, is an Indian actor who works in Kannada films. He is the recipient of three Filmfare Awards South. Yash began his career with appearances in several television series in the 2000s. He made his film debut in 2007 with Jambada Hudugi. The 2008 romantic drama Moggina Manasu, for which he received the Filmfare Award for Best Supporting Actor, proved to be a breakthrough for Yash. His first film in a leading role, Rocky (2008), was an excellent musical original film with good music[1] in which S. P. Balasubrahmanyam has sung a duet with Priyadarshini which was last song of SPB for the younger generation hero [2] where Yash got the name "Rocky Bhai"[3] But movie met with negative response with many critics who tried to compare it with different languages film.[4] He followed it up with a series of romance films that were commercial successes, and received his first Filmfare Award for Best Actor nomination for Drama in 2012.</Text>
    //   </ScrollView>
    // </View>

    // View Style Props
    // <View style={styles.container}>
    //   <Image 
    //     source={require('./assets/favicon.png')} style={styles.image}
    //     resizeMode={'contain'}
    //   />
    // </View>

    // Touchable Native Feedback
    // <View style={styles.container}>
    //   <TouchableNativeFeedback 
    //     onPress={()=>setrippleOverFlow(!rippleOverFlow)}
    //     background={TouchableNativeFeedback.Ripple('red',rippleOverFlow)}
    //   >
    //     <View style={styles.touchable}>
    //       <Text style={styles.text}>Touchable Native feedback</Text>
    //     </View>
    //   </TouchableNativeFeedback>
    // </View>

    // toast android
    // <View style={styles.container}>
    //   <Button title='Show Toast' onPress={showTost}/>
    //   <Button title='Show Toast with Gravity' onPress={showTostWithGravity}/>
    //   <Button title='Show Toast with Gravity and Offset' onPress={showTostWithGravityandOffset}/>
    // </View>

    // Apperences
    // <View style={[{ backgroundColor: theme === 'light' ? 'white' : 'gray' }, styles.container]}>
    //   {console.log({ theme })}
    //   <TextInput onChangeText={(item) => setName(item)} placeholderTextColor={theme === 'light' ? '#DEE2E6' : '#495057'} placeholder='Enter Your Name' style={[{ backgroundColor: theme === 'light' ? 'gray' : 'white', color: theme === 'light' ? 'white' : 'black' }, styles.input]} />
    //   <TextInput onChangeText={(item) => setAge(item)} placeholderTextColor={theme === 'light' ? '#DEE2E6' : '#495057'} placeholder='Enter Your Age' style={[{ backgroundColor: theme === 'light' ? 'gray' : 'white', color: theme === 'light' ? 'white' : 'black' }, styles.input]} />
    //   <Text style={[{ color: theme === 'light' ? 'black' : 'white' }, styles.text]}>{name} {age}</Text>
    // </View>

    // 
    <View style={styles.container}>

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

  // React Hook useEffect Use
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'white'
  // },
  // label: {
  //   color: 'red',
  //   fontSize: 40
  // }

  // Flex Usage
  // container: {
  //   flex: 1,
  //   marginTop: 40,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   backgroundColor: 'white',
  //   // flexDirection: 'row'
  // }

  // Model: it is an additional screen which is uses as a pop-up screen and application using modal
  // container: {
  //   flex: 1,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   backgroundColor: 'white',
  //   marginTop: 40,
  //   padding: 20
  // },
  // input: {
  //   backgroundColor: 'pink',
  //   marginTop: 20,
  //   padding: 20,
  //   borderRadius: 20
  // }

  // Customized Components
  // container: {
  //   flex: 1,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   backgroundColor: 'white',
  //   marginTop: 40,
  //   padding: 20
  // },
  // input: {
  //   backgroundColor: 'pink',
  //   marginTop: 20,
  //   padding: 20,
  //   borderRadius: 20
  // }

  // container: {
  //   flex: 1,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   backgroundColor: 'white',
  //   marginTop: 40,
  //   padding: 20
  // },
  // input: {
  //   backgroundColor: 'pink',
  //   marginTop: 20,
  //   padding: 20,
  //   borderRadius: 20
  // }

  // Section List
  // container: {
  //   // flex: 1,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   backgroundColor: 'white',
  //   marginTop: 40,
  //   padding: 20,
  // },
  // item: {
  //   backgroundColor: 'yellow',
  //   padding: 20,
  //   marginVertical: 10
  // },
  // header: {
  //   fontSize: 30,
  // },
  // title: {
  //   fontSize: 25
  // }

  // Pressable Controler
  // container: {
  //   backgroundColor: 'white',
  //   marginTop: 40,
  //   padding: 20
  // },
  // text: {
  //   padding: 20,
  //   marginVertical: 10
  // }

  // RefressControler
  // container: {
  //   backgroundColor: 'red',
  //   marginTop: 40,
  //   padding: 20,
  //   flex: 1
  // },

  // InputAccessaryView : Only for IOS devices
  // container: {
  //   backgroundColor: 'white',
  //   marginTop: 40,
  //   padding: 20
  // },
  // input: {
  //   backgroundColor: 'pink',
  //   padding: 20,
  //   borderRadius: 15,
  //   marginTop: 20
  // }

  // Text Props
  // container: {
  //   backgroundColor: 'red',
  //   padding: 20,
  //   marginTop: 40
  // },
  // text: {
  //   color: 'yellow',
  //   fontFamily: 'Arial',
  //   fontStyle: 'italic',
  //   fontWeight: '100',
  //   letterSpacing: 2,
  //   textAlign: 'justify',
  //   textDecorationLine: 'underline',
  //   textDecorationColor: 'black',
  //   textDecorationStyle: 'dotted',
  //   textTransform: 'capitalize',
  //   fontSize: 20
  // }

  // View props
  // container: {
  //   backgroundColor: 'red',
  //   flex: 1,
  //   padding: 20,
  //   margin: 40,
  //   borderBottomWidth: 10,
  //   borderTopWidth: 20,
  //   borderRightWidth: 30,
  //   borderLeftWidth: 40,
  //   borderRadius: 50,
  //   borderColor: 'yellow',
  //   opacity: 0.7
  // }

  // Image props
  // container: {
  //   backgroundColor: 'white',
  //   padding: 20,
  //   marginTop: 40
  // },
  // image: {
  //   height: 200,
  //   width: 200,
  //   tintColor: 'pink'
  // }

  // Touchable Native Feedback
  // container: {
  //   backgroundColor: 'white',
  //   padding: 20,
  //   // marginTop: 40,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex: 1
  // },
  // touchable: {
  //   flex: 0.5,
  //   borderColor: 'black',
  //   borderWidth: 1,

  // },
  // text: {
  //   fontSize: 20,
  //   alignSelf: 'center'
  // }

  // tost android
  // container: {
  //   backgroundColor: 'white',
  //   padding: 20,
  //   marginTop: 40
  // }

  // Apperences
  // container: {
  //   flex: 1,
  //   padding: 20,
  //   paddingTop: 40
  //   // marginTop: 40
  // },
  // text: {
  //   fontSize: 20,
  //   marginTop: 20,
  //   alignSelf: 'center'
  // },
  // input: {
  //   marginTop: 20,
  //   padding: 20,
  //   fontSize: 20,
  //   borderRadius: 15
  // }

  // 
  container: {
    marginTop: 40,
    padding: 20,
    backgroundColor: 'white'
  }
});
