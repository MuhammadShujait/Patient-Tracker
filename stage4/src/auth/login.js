




import React, { Component } from 'react';
import {  AsyncStorage,Dimensions,Image } from 'react-native';
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

       let swidth = Dimensions.get('window').width
       let smwidth = (swidth-200)/2
       let bimgwidth = Dimensions.get('window').width
       let bimgheight = Dimensions.get('window').height
       let wdth = Dimensions.get('window').width
       let margle= (wdth-100)/2


        return (
        <Container >
         
        <Header >

        <Body style={{width:100,marginLeft:margle}}>
            <Title>LogIn</Title>
          </Body>

        </Header>
     <Image source={require('../img/3.jpg')} style={{height:bimgheight,width:bimgwidth,}}>

        <Content style={{marginTop:100}} >
      

        
          <Form>
        
        
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
 

                  <Button  style={{width:200,marginLeft:smwidth,marginRight:smwidth,marginTop:10}}   block   onPress={this.Login.bind(this)}>

                           <Text>LogIn</Text>

                  </Button>
        


          </Form>
        </Content>
     </Image>
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