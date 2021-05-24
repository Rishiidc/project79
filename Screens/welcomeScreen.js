import * as React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config'


export default class WelcomeScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            EmailID: '',
            Password: '',
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Address: '',
            ConfirmPasssword: '',
            isVisible: true
        }
    }
    userLogin = (username, password)=>{
      firebase.auth().signInWithEmailAndPassword(username, password)
      .then(()=>{
          this.props.navigation.navigate("Home")
          alert("Success")
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
  

  showModal = ()=>(
      <Modal
         animationType="fade"
         transparent={true}
         visible={this.state.isVisible}
      >
          <View style = {styles.ModalStyle}>
      <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"First Name"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  firstName: text
              })
       }}
  />
     <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"Last Name"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  lastName: text
              })
       }}
  />
     <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"Phone Number"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  phoneNumber: text
              })
       }}
  />
     <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"Address"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  address: text
              })
       }}
  />
     <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"EmailID"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  emailID: text
              })
       }}
  />
     <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"Password"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  password: text
              })
       }}
  />
     <TextInput 
          style = {styles.formTextInput} 
          placeholder = {"Confirm password"} 
          maxLength = {8} 
          onChangeText = {(text)=>{
              this.setState({
                  confirmPassword: text
              })
       }}
  />
     <TouchableOpacity><Text>Register</Text></TouchableOpacity>
     </View>
      </Modal>
  )
render(){
    return(
      <View style={styles.container}>
      {this.showModal()}
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Barter System App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TextInput
        style={styles.loginBox}
        placeholder="example@booksanta.com"
        placeholderTextColor = "#ffff"
        keyboardType ='email-address'
        onChangeText={(text)=>{
          this.setState({
            emailId: text
          })
        }}
      />

      <TextInput
        style={styles.loginBox}
        secureTextEntry = {true}
        placeholder="password"
        placeholderTextColor = "#ffff"
        onChangeText={(text)=>{
          this.setState({
            password: text
          })
        }}
      />
        <TouchableOpacity
          style={[styles.button,{marginBottom:20, marginTop:20}]}
          onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
          >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>{this.setState({isVisible:true})}}
          >
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


userSignUp = (emailId, password) =>{
    if(password !==  confirmPassword){
        return Alert.alert("Password doesn't match/Check your Password.")
    }else{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then((response)=>{
      db.collection('Users').add({ "email_id": this.state.emailId, "Address": this.state.address, "first_name": this.state.firstName,
      "last_name": this.state.lastName, "phone_number": this.state.phoneNumber, }); 
      return alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return alert(errorMessage)
    });
  }
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
    title :{
      fontWeight:'300',
      paddingBottom:30,
      color : 'green',
      fontSize:100,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'nunito',
      textDecorationLine: 'underline'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    },
    ModalStyle: {
      flex:1, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:"#ffff", marginRight:30, marginLeft : 30, marginTop:80, marginBottom:80    
    }
  })