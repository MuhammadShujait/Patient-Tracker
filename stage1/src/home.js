import React, { Component } from 'react';
import { AsyncStorage,Image,Dimensions  } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid'

var array = []

class Home extends Component {

    static navigationOptions = {
        title: "Welcome DOCTOR"
    }

getRout(){
this.props.navigation.navigate('AllDataRout')
}
saveRout(){
this.props.navigation.navigate('SubmitRout')
}
dRout(){
    this.props.navigation.navigate('Daterout')
}
nRout(){
    this.props.navigation.navigate('Namerout')
}
    render() {

          let bimgwidth = Dimensions.get('window').width
          let bimgheight = Dimensions.get('window').height
          let butmargin = bimgheight/4

        return (
            <Container style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#635DB7',
        
      }} >
             <Image source={require('./img/4.jpg')} style={{height:bimgheight,width:bimgwidth,}}> 
                <Content style={{
                       marginTop:butmargin
                       }}  >
                   

           <Button  block bordered dark onPress={this.getRout.bind(this)} style={{
                       marginTop:70
                       }}  >
            <Text>Show All Data</Text> 
          </Button>
            





            
                  
                  
                      <Button  block bordered dark  onPress={this.saveRout.bind(this)} style={{
                       marginTop:30
                    }}>
            <Text>Submit Data</Text>
          </Button>




               
               
                      <Button  block bordered dark onPress={this.dRout.bind(this)} style={{
                      marginTop:30
                   }}  >
            <Text>Search By Date</Text>
          </Button>
            




       
                      <Button  block bordered dark  onPress={this.nRout.bind(this)} style={{
                           marginTop:30
                            }}>
            <Text>Search By Name</Text>
          </Button>
            










  






                </Content>
                  </Image> 
            </Container>
        );
    }
}
export default Home
