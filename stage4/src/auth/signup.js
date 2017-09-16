import React, { Component } from 'react';
import {  AsyncStorage,StyleSheet } from 'react-native';
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
        return (
     
     
     <Container>  
           <Header >

          <Body>
            <Title>SignUp</Title>
          </Body>

        </Header>
     
              <Item floatingLabel>
              <Label>Name</Label>

              <Input onChangeText={(text) => {
                     this.setState({ name: text })
                 }}/>

            </Item>
     
         <Item floatingLabel>
              <Label>Email</Label>

              <Input onChangeText={(text) => {
                     this.setState({ email: text })
                 }}/>

            </Item>
        
            <Item floatingLabel >
              <Label>Password</Label>

              <Input secureTextEntry onChangeText={(text) => {
                     this.setState({ password: text })
                 }} />
     </Item>
     <Button rounded   onPress={this.createUser.bind(this)}>
            <Text>SignUp</Text>
          </Button>
        
     
     
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