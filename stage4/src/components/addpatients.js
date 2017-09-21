import React, { Component } from 'react';
 import { AsyncStorage , StyleSheet,Image,Dimensions  } from 'react-native';
import { Container, Header, Content, Form, Item, Button, Input, Label, Footer, FooterTab, Text,
  Left, Body, Right,  Icon, Title   } from 'native-base'
import * as firebase from "firebase";

class AddPatients extends Component {
    static navigationOptions = {
        title: "Add Patient",
       header: false
    }
    constructor() {
        super()
        this.state = {
            name: "",
            disease: "",
            mediacation: "",
            cost: "",
            date : ''
        }
    }
    saveData() {

        AsyncStorage.getItem("user").then((responce) => {
            var PatientUid = responce
            let obj = {
                name: this.state.name,
                disease: this.state.disease,
                mediacation: this.state.mediacation,
                cost: this.state.cost,
                date : this.state.date,
            }
            let dataBase = firebase.database().ref('PatientTrackerApplication')
                .child(PatientUid)
            let data = {
                obj
            }
            dataBase.push(data)
            alert('Patient Added Succesfully...')
        })
    }
    componentWillMount() {
        console.disableYellowBox = true
    }
    render() {

       let swidth = Dimensions.get('window').width
       let smwidth = (swidth-200)/2
       let bimgwidth = Dimensions.get('window').width
       let bimgheight = Dimensions.get('window').height
       let bimgh = bimgheight-75
       let wdth = Dimensions.get('window').width
       let margle= (wdth-100)/2



        return (





      <Container>



       <Image source={require('../img/6.jpg')} style={{height:bimgh,width:bimgwidth,}}>
                  
                   <Header>
       
           <Body style={{width:100,marginLeft:margle}}>
            <Title>Add Data</Title>
          </Body>
         
        </Header>

        <Content>

          <Form>



            <Item floatingLabel>
              <Label>PatientName</Label>

               <Input       
                        onChangeText={(text) => {
                      this.setState({ name: text })
                     }}/>  
            </Item>


             <Item floatingLabel>
              <Label>Disease</Label>

              <Input 
               onChangeText={(text) => {
                         this.setState({ disease: text })
                     }}/>
            </Item>   


            <Item floatingLabel>
              <Label>Medication</Label>

              <Input 
               onChangeText={(text) => {
                         this.setState({ mediacation: text })
                     }}/>
            </Item>

            <Item floatingLabel>

              <Label>DD-MM-YYYY</Label>

              <Input 
                    onChangeText={(text) => {
                         this.setState({ date: text })
                     }}/>
            </Item>


            <Item secureTextEntry floatingLabel >
              <Label>Fee Charged</Label>
              
              <Input
                 onChangeText={(text) => {
                         this.setState({ cost: text })
                     }}/>
            </Item>

          <Button style={styles.bigblue} rounded 
           onPress={this.saveData.bind(this)}  >
            <Text> Add Patient </Text>
          </Button>


          </Form>





        </Content>

        </Image>

 <Footer>
          <FooterTab>
            <Button  style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}} active  onPress={() => {
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

            <Button onPress={() => {
                        this.props.navigation.navigate("VeiwAllRoute")
                    }}>
              <Text>View All Data</Text>
            </Button>

          </FooterTab>
        </Footer>

      </Container>
















            // <View>
            //     <TextInput placeholder="Name"
            //         onChangeText={(text) => {
            //             this.setState({ name: text })
            //         }}
            //         value={this.state.name}
            //     />
            //     <TextInput placeholder="Disease"
            //         onChangeText={(text) => {
            //             this.setState({ disease: text })
            //         }}
            //     />
            //     <TextInput placeholder="Medication"
            //         onChangeText={(text) => {
            //             this.setState({ mediacation: text })
            //         }}
            //     />
            //     <TextInput placeholder="Cost"
            //         onChangeText={(text) => {
            //             this.setState({ cost: text })
            //         }}
            //     />

            //     <TextInput placeholder="dd-mm-yyyy"
            //         onChangeText={(text) => {
            //             this.setState({ date: text })
            //         }}
            //     />
            //     <Button title="Save" onPress={this.saveData.bind(this)}>Save</Button>
            // </View>
        )
    }
}
export default AddPatients



const styles = StyleSheet.create({
  bigblue: {
   marginTop :20,
   marginLeft :20
  }
})