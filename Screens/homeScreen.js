import * as React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, TouchableNativeFeedbackBase} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import {ListItem, Icon} from 'react-native-elements';

export default class homeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            allRequests: ''
        }
    }
    
    renderItem = ({item, i}) =>{
        console.log(item.item_name)
        return(
            <ListItem key = {i} 
            title = {item.ite.item_name}
            subtitle = {item.description}
            titleStyle = {{color: 'black', fontWeight: 'bold'}}
            rightElement = {
                <TouchableOpacity style = {styles.button}>
                  <Text style = {{color: 'green'}}>Exchange</Text>
                </TouchableOpacity>
            }
            bottomDivider
        />
      )
   }

    render(){
        return(
            <View>
            <Text style = {{color:'green', fontSize:18, fontWeight:'bold'}}>HomeScreen</Text>
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.allRequests}
            renderItem={this.renderItem}
            />
            </View>
        )
    }
}