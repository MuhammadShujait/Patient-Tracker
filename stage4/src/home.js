// import React, { Component } from 'react';
// import {  Text, Button } from 'react-native';
// import { Container, Header, Tab, Tabs } from 'native-base';
// import Signup from "./auth/signup";
// import Login from "./auth/login";






// class Home extends Component {
//     static navigationOptions = {
//         title: "Welcome"
//     }
//     render() {
//         return (

// <Container>
//     <Tabs>
//           <Tab heading="SignUp">
//             <Signup />
//           </Tab>
//           <Tab heading="LogIn">
//             <Login/>
//           </Tab>

//           </Tabs>
// </Container>


//         )
//     }
// }
// export default Home


// var Styles = {
//     ButtonStyles: {
//         justifyContent: "center",
//         // flex : 1,
//         padding: 20
//     },
//     containerStyle: {
//         marginTop: 200
//     }
// }

import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text,Item ,Icon,Input } from 'native-base';




export default class  Home extends Component {
    static navigationOptions = {
        title: "Welcome Doctor"
    }


  render() {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <Container style={{
        flex: 3,
        flexDirection: 'column',
            justifyContent: 'center',
        alignItems: 'center',
      }}>
   


             <Button block style={styles.blue}
                     onPress={() => {
                        this.props.navigation.navigate("SignupRoute")
                     }} >
            <Text>SignUp(Register New User)</Text>
          </Button>       
          
          
             <Button block   style={styles.red}
                    onPress={() => {
                        this.props.navigation.navigate("LoginRoute")
                    }}
                   title="Login">
            <Text>LogIn(Already Registered)</Text>
          </Button>




      </Container>
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);

const styles = StyleSheet.create({
 
  red: {
    marginTop:20,width:600,
    marginLeft:80
   
  },
    blue: {
    width:600,marginLeft:80
   
  }
});


