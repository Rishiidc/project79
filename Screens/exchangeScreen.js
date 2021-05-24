import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class exchangeScreen extends React.Component{
    constructor(){
        super()
        this.state = { 
            ItemName: '',
            ItemDescription: ''
        }
    }
    render(){
        return(
            <View>
    <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"Item Name"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  itemName: text
              })
       }}
  />
    <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"Item Description"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  itemDescription: text
              })
       }}
  />
   <TouchableOpacity
    style = {[styles.button,{marginTop:10}]}
    onPress = {()=>{this.addItem(this.state.itemName, this.state.itemDescription)}}
   >
    <Text style = {{color:'pink', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
   </TouchableOpacity>
    
         </View>
        )
    }
    addItem = (itemName, itemDescription)=>{
        var username = this.state.username
        db.collection("exchange_requests").add({
            "username" : username,
            "item_name" : itemName,
            "item_description" : itemDescription  
        })
        this.setState({
            itemName : '',
            itemDescription : ''
        })
        return Alert.alert(
            'Item ready to exchange','',
            [
                {text : 'OK', onPress: () => {
                    this.props.navigation.navigate('Home')
                }}
            ]
        );
    }
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8BE85'
      },
      profileContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
    subContainer:{
      flex:1,
      fontSize: 20,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       }
    }
  })