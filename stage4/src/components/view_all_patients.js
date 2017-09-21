import React, { Component } from 'react';
import {    AsyncStorage, StyleSheet,Image,Dimensions  } from 'react-native';
import * as firebase from "firebase";
import { Container, Header, Content, List, ListItem,  Separator,Footer
    ,FooterTab,Button, Text, Spinner,Left,Right,Body,Icon, Fab,View,  Title   } from 'native-base';





class Viewpatients extends Component {
    constructor() {
        super()
        this.state = {
            Patient: [],
            spinner:<Spinner color='green' />
            
        }
    }
      static navigationOptions = {
        title: "All Patients Data",
        header: false
    }
    componentWillMount() {
        console.disableYellowBox = true



        this.getPatients()
        
        


    }


    getPatients() {


     


        AsyncStorage.getItem("user").then((responce) => {
            var array = []
            var PatientUid = responce
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

    };






    render() {



       let swidth = Dimensions.get('window').width
       let smwidth = (swidth-200)/2
       let bimgwidth = Dimensions.get('window').width+400
       let wdth = Dimensions.get('window').width
       let bimgheight = Dimensions.get('window').height
       let bimgh = bimgheight-75
       let margle= (wdth-150)/2



        return (



            <Container>
                   <Image source={require('../img/5.jpg')} style={{height:bimgh,width:bimgwidth,}}> 
                    
                    
       <Header>
         
           <Body style={{width:150,marginLeft:margle}}>
            <Title>View All Patients</Title>
          </Body>
         
        </Header>
                  <Content>

            



                {
                          this.state.Patient.map((data, indexno) => {
                    return (
        <List key={indexno} >
          <ListItem  bordered>
            <Text style={styles.bigblue} > Name : {data.name}</Text>
          </ListItem>
          <ListItem >
            <Text> Disease : {data.disease}</Text>
          </ListItem>
          <ListItem>
            <Text> Medication : {data.mediacation}</Text>
          </ListItem>
          <ListItem>
            <Text> Fee Charged : {data.cost}</Text>
          </ListItem>
          <ListItem>
            <Text> Date : {data.date}</Text>
          </ListItem>

</List>
                    )
                })                
                }

















                 </Content>
 </Image> 




<Container>
                          <Footer >
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

            <Button style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}} active onPress={() => {
                        this.props.navigation.navigate("VeiwAllRoute")
                    }}>
              <Text>View All Data</Text>
            </Button>

          </FooterTab>
        </Footer>
           
           </Container>
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