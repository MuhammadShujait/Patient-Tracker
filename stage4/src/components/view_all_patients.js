import React, { Component } from 'react';
import {  TextInput,  AsyncStorage, StyleSheet } from 'react-native';
import * as firebase from "firebase";
import { Container, Header, Content, List, ListItem,  Separator,Footer
    ,FooterTab,Button, Text, Spinner,Left,Right,Body,Icon,H1 } from 'native-base';

// import Head from './heads'


class Viewpatients extends Component {
    constructor() {
        super()
        this.state = {
            Patient: []
            
        }
    }
      static navigationOptions = {
        title: "All Patients Data",
        headerLeft: false
    }
    componentWillMount() {
        console.disableYellowBox = true



        this.getPatients()


    }


    getPatients() {
        AsyncStorage.getItem("user").then((responce) => {
            var PatientUid = responce
            var array = []
            let dataBase = firebase.database().ref("PatientTrackerApplication").child(PatientUid)
            dataBase.on("value", (object) => {
                let key = object.val()
                for (var a in key) {
                    array.push(key[a].obj)
                }
                this.setState({
                    Patient: array
                })

            })
        })

       
    }




    render() {
        return (



            <Container>





  


                  <Content>




















                {this.state.Patient.map((data, indexno) => {
                    return (

 
        
       
          
<List key={indexno}>
          <ListItem  bordered>
            <Text style={styles.bigblue} >Name : {data.name}</Text>
          </ListItem>

          <ListItem >
            <Text>Disease : {data.disease}</Text>
          </ListItem>

          <ListItem>
            <Text> Medication: {data.mediacation}</Text>
          </ListItem>

          <ListItem>
            <Text>Fee Charged : {data.cost}</Text>
          </ListItem>

      
          <ListItem>
            <Text> Date : {data.date}</Text>
          </ListItem>

</List>
           
        

   














                        
                   

                    )
                })}














                 </Content>

                          <Footer>
          <FooterTab>
            <Button  onPress={() => {
                        this.props.navigation.navigate("AddPatientsRoute")
                    }}>
              <Text>Add Patient</Text>
            </Button>

            <Button  onPress={() => {
                        this.props.navigation.navigate("SearchRoute")
                    }}>
              <Text>Search By Name</Text>
            </Button>

            <Button 
                    onPress={() => {
                        this.props.navigation.navigate("SearchDateRoute")
                    }}>
              <Text>Search By Date</Text>
            </Button>

            <Button active onPress={() => {
                        this.props.navigation.navigate("VeiwAllRoute")
                    }}>
              <Text>View All Data</Text>
            </Button>

          </FooterTab>
        </Footer>
            </Container>



    
        )
    }
}
export default Viewpatients



const styles = StyleSheet.create({
  bigblue: {

    fontSize: 30,
  },

  
})