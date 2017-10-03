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
import { AppRegistry, View, StyleSheet ,Image,Dimensions,AsyncStorage } from 'react-native';
import { Container, Header, Content, Button, Text,Item ,Icon,Input,Toast,Body,Title } from 'native-base';




export default class  Home extends Component {

 constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }
  }

   componentWillMount() {
     
  this.checkstorage()

   }



        checkstorage(){
            AsyncStorage.getItem("userid").then((respon) => {
             PatientUid = respon    

               if (PatientUid !== null){
                this.navig()
          }
        } ) }

navig(){

  this.props.navigation.navigate('VeiwAllRoute')

}



    static navigationOptions = {
        title: "Welcome Doctor",
        header:false
        // headerPressColorAndroid:'#f44242'
    }





  render() {


      let bimgwidth = Dimensions.get('window').width
      let bimgheight = Dimensions.get('window').height
      let wdth = Dimensions.get('window').width
      let margle= (wdth-150)/2

      
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
         <Container>
           <Image source={require('./img/4.jpg')} style={{height:bimgheight,width:bimgwidth}}>
                 <Header>
      
           <Body style={{width:150,marginLeft:margle}}>
            <Title>Welcome Doctor</Title>
          </Body>
        
        </Header>
          
      <Container style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
   

             <Button block bordered dark style={styles.blue}
                     onPress={() => {
                        this.props.navigation.navigate("SignupRoute")
                     }} >
            <Text>SignUp(Register New User)</Text>
          </Button>       
          
          
             <Button block bordered dark  style={styles.red}
                    onPress={() => {
                        this.props.navigation.navigate("LoginRoute")
                    }}
                   title="Login">
            <Text>LogIn(Already Registered)</Text>
          </Button>  
            
            
   


      </Container>
      </Image>
      </Container>
    
    );
  }
};

AppRegistry.registerComponent('AwesomeProject', () => JustifyContentBasics);

const styles = StyleSheet.create({
 
  red: {
    height:50,
    marginTop:50,
    backgroundColor: 'rgba(230, 230, 230, 0.8)'
//,width:600,
//     marginLeft:80
   
  },
    blue: {
      height:50,
      backgroundColor: 'rgba(230, 230, 230, 0.8)'
//     width:600,marginLeft:80
   
  }
});


