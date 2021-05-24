import * as React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import db from '../config'


export default class signupLoginScreenw extends React.Component {
    constructor(){
        super()
        this.state = {
            EmailID: '',
            Password: ''
        }
    }

userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
        return alert("Successfully Logged in")
    })
    .catch((error)=> {
        var errorCode = error.code;
        var errorMesaage = error.message;
        return alert(errorMesaage)
    })
}

    userSignUp = (username, password) =>{
        firebase.auth().createUserWithEmailAndPassword(username, password)
        .then((response)=>{
            return alert("User Added Successfully")
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMesaage = error.message;
            return alert(errorMesaage)
        });
     }


  render(){
    return(
        <View style = {{alignItems:'center'}}>
            <TextInput placeholder = 'Enter E-mail ID' keyboardType = 'email-address' onChangeText = {text =>{this.setState({EmailID: text})}}></TextInput>
            <TextInput placeholder = 'Enter Password' secureTextEntry = {true} onChangeText = {text =>{this.setState({Password: text})}}></TextInput>

            <TouchableOpacity onPress = {()=>{this.userLogin(this.state.EmailID,this.state.Password)}}>
               <Text style = {{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>Login</Text>   
            </TouchableOpacity>
            <TouchableOpacity onPress = {()=>{this.userSignUp(this.state.EmailID,this.state.Password)}}>
               <Text  style = {{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>Sign Up</Text>   
            </TouchableOpacity>
        </View>
    )
}
}