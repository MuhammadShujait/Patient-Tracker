




import React, { Component } from 'react';
import {  AsyncStorage } from 'react-native';
import { Container, Header, Button, Text,
         Content, Form, Item, Input, Label,
          Left, Body, Right, Icon, Title  } from 'native-base';
import * as firebase from "firebase";






class Login extends Component {
    static navigationOptions = {
        title: "Login",
        header: false
    }
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
        }
    }
    Login() {
        var email = this.state.email
        var pass = this.state.password

        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((responce) => {
                const uid = responce.uid
                AsyncStorage.setItem("user", uid)
                    .then(() => {
                        this.props.navigation.navigate('VeiwAllRoute')
                    })
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                alert(errorMessage)
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
            <Title>LogIn</Title>
          </Body>

        </Header>

        <Content>
        
        
          <Form>
        
        
            <Item floatingLabel>
              <Label>Email</Label>

              <Input onChangeText={(text) => {
                    this.setState({ email: text })
                }}/>

            </Item>
        
            <Item floatingLabel last>
              <Label>Password</Label>

              <Input secureTextEntry onChangeText={(text) => {
                     this.setState({ password: text })
                 }} />
        
        
            </Item>
                  <Button rounded   onPress={this.Login.bind(this)}>
            <Text>LogIn</Text>
          </Button>
        
          </Form>
        </Content>
      </Container>








            // <View>
            //     <TextInput placeholder="Enter Name" onChangeText={(text) => {
            //         this.setState({ email: text })
            //     }} />
            //     <TextInput secureTextEntry placeholder="Enter Password" onChangeText={(text) => {
            //         this.setState({ password: text })
            //     }} />
            //     <Button title="Login" onPress={this.Login.bind(this)}>Login</Button>
            // </View>
        )
    }
}
export default Login