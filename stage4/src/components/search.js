import React, { Component } from 'react';
import { View,  TextInput,  AsyncStorage,StyleSheet } from 'react-native';
import * as firebase from "firebase";
import { Container, Header, Content, List, ListItem, Text,
     Separator , Item, Input, Button,Footer,FooterTab } from 'native-base';

class Search extends Component {

    componentWillMount() {
        console.disableYellowBox = true
    }
    static navigationOptions = {
        title: "Search By Name",
        headerLeft: false
    }
    constructor() {
        super()
        this.state = {
            data: [],
            name: ""
        }
    }

    getDataByName() {
        AsyncStorage.getItem("user").then((responce) => {
            var PatientUid = responce
            var array = []
            var foundedData = []
            let dataBase = firebase.database().ref("PatientTrackerApplication").child(PatientUid)
            dataBase.on("value", (object) => {
                let key = object.val()
                for (var a in key) {
                    array.push(key[a].obj)
                }
                array.map((obj) => {
                    if (obj.name === this.state.name) {
                        foundedData.push(obj)
                    }
                })
                this.setState({
                    data: foundedData
                })
            })
        })
    }

    render() {
        return (
            <Container>
<Content>
          <Item rounded>
            <Input placeholder='Enter Name' 
                   onChangeText={(text) => {
                    this.setState({ name: text })
                }}
            />
          </Item>

                    <Button rounded 
                    style={styles.bigblue}
                     onPress={this.getDataByName.bind(this)}>


                   <Text>Search Patient</Text>


                   </Button>


                {this.state.data.map((data, indexno) => {
                    return    (

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

            <Button active  onPress={() => {
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

            <Button  onPress={() => {
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
export default Search



const styles = StyleSheet.create({
  bigblue: {
   marginTop :20,
   marginLeft :20,
//    height:40
  }
})