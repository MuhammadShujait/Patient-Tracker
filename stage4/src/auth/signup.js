import React, { Component } from 'react';
import {  AsyncStorage,StyleSheet,Dimensions,Image } from 'react-native';
import * as firebase from "firebase"
import { Container, Header, Button, Text,
         Content, Form, Item, Input, Label,
          Left, Body, Right, Icon, Title  } from 'native-base';






class Signup extends Component {
    static navigationOptions = {
        title: "Login",
        header: false
    }
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }
    createUser() {
        var name = this.state.name
        var email = this.state.email
        var pass = this.state.password

        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((responce) => {
                const uid = responce.uid
                AsyncStorage.setItem("user", uid)
                    .then(() => {
                        this.props.navigation.navigate('AddPatientsRoute')
                    })
            })
            .catch(function (error) {
                alert(error.code)
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });
    }
    componentWillMount() {
        console.disableYellowBox = true
    }
    render() {


       let swidth = Dimensions.get('window').width
       let smwidth = (swidth-200)/2
       let bimgwidth = Dimensions.get('window').width
       let bimgheight = Dimensions.get('window').height
       let wdth = Dimensions.get('window').width
       let margle= (wdth-100)/2

        return (
     
     
     <Container>  
           <Header >

         <Body style={{width:100,marginLeft:margle}}>
            <Title>SignUp</Title>
          </Body>

        </Header>
      <Image source={require('../img/3.jpg')} style={{height:bimgheight,width:bimgwidth,}}>


      <Content style={{marginTop:100}} >
              <Item floatingLabel style={{backgroundColor: 'rgba(230, 230, 230, 0.8)',marginRight:20}}>
              <Label>Name</Label>

              <Input onChangeText={(text) => {
                     this.setState({ name: text })
                 }}/>

            </Item>
     
         <Item floatingLabel style={{backgroundColor: 'rgba(230, 230, 230, 0.8)',marginRight:20}}>
              <Label>Email</Label>

              <Input onChangeText={(text) => {
                     this.setState({ email: text })
                 }}/>

            </Item>
        
            <Item floatingLabel style={{backgroundColor: 'rgba(230, 230, 230, 0.8)',marginRight:20}}>
              <Label>Password</Label>

              <Input secureTextEntry onChangeText={(text) => {
                     this.setState({ password: text })
                 }} />
     </Item>
     <Button  style={{width:200,marginLeft:smwidth,marginRight:smwidth,marginTop:10}}   block  onPress={this.createUser.bind(this)}>
            <Text>SignUp</Text>
          </Button>

          </Content>
        </Image>
     
     
     </Container>
     
     
     
     
            // <View>
            //     <TextInput placeholder="Enter Name" onChangeText={(text) => {
            //         this.setState({ email: text })
            //     }} />

            //     <TextInput placeholder="Enter Email" onChangeText={(text) => {
            //         this.setState({ email: text })
            //     }} />

            //     <TextInput placeholder="Enter Password" secureTextEntry onChangeText={(text) => {
            //         this.setState({ password: text })
            //     }} />
            //     <Button title="Signup" onPress={this.createUser.bind(this)}>Signup</Button>
            // </View>
        )
    }
}
export default Signup