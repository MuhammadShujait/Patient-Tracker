import React, { Component } from 'react';
 import { AsyncStorage , StyleSheet,Image,Dimensions  } from 'react-native';
import { Container, Root, Header, Content, Form, Item, Button, Input, Label, Footer, FooterTab, Text,
  Left, Body, Right,  Icon, Title ,Toast  } from 'native-base'
import * as firebase from "firebase";
import DatePicker from 'react-native-datepicker';



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
            date : "2017-10-01",
            showToast: false
        }
    }



    saveData() {

     if(
            this.state.name !== '' &&  this.state.disease !== '' && this.state.mediacation !== ''
            && this.state.cost !== '' && this.state.date !== ''
         ) {
                  AsyncStorage.getItem("userid").then((responce) => {
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
                      
            
            Toast.show({
                text: 'Patient Added Successfully...',
                position: 'bottom',
                duration: 2000,
                type: "success"
            })

           this.setState({ name: "" ,
                           disease:"",
                           mediacation:"",
                           cost:""
                        })


        }
    )}

        else{
              Toast.show({
                text: "Provide Complete Data!",
                position: "bottom",
                type: "warning",
                duration: 2000,
            }) 

   }
    }
    componentWillMount() {
        console.disableYellowBox = true
    }

    logout(){
    AsyncStorage.setItem("userid","").then(()=>{
        this.props.navigation.navigate("Homeroute")
    }

    )
}
    render() {

       let swidth = Dimensions.get('window').width
       let smwidth = (swidth-200)/2
       let bimgwidth = Dimensions.get('window').width*2
       let bimgheight = Dimensions.get('window').height
       let bimgh = bimgheight-75
       let wdth = Dimensions.get('window').width
       let margle= (wdth-200)/2
        let margle2= (wdth-100)/2


        return (





      <Container>


      <Image source={require('../img/1.jpg')} style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover"
                }}> 
                    
                  
     
                   <Header>
       
           <Body style={{width:100,marginLeft:margle2}}>
            <Title>Add Data</Title>
          </Body>
             <Right>
          
            <Button style={{backgroundColor:'black'}} onPress={this.logout.bind(this)} >
              <Title>LogOut</Title>
            </Button>
        
          </Right>
         
        </Header>

        <Content >

          <Form>



            <Item floatingLabel >
              <Label>PatientName</Label>

               <Input       
                        onChangeText={(text) => {
                      this.setState({ name: text })
                     }} value={this.state.name} />  
            </Item>

             <Item floatingLabel>
              <Label>Disease</Label>

              <Input 
               onChangeText={(text) => {
                         this.setState({ disease: text })
                     }}
                     value={this.state.disease}/>
            </Item>   

            <Item floatingLabel>
              <Label>Medication</Label>

              <Input 
               onChangeText={(text) => {
                         this.setState({ mediacation: text })
                     }} value={this.state.mediacation}/>
            </Item>

            <Item keyboardType = 'numeric' floatingLabel >
              <Label>Fee Charged</Label>
              
              <Input
                 onChangeText={(text) => {
                         this.setState({ cost: text })
                     }} value={this.state.cost}/>
            </Item>


               <DatePicker
               style={{width: 200,marginLeft:margle,marginTop:20}}
               date={this.state.date}
               mode="date"
               placeholder="select date"
               format="YYYY-MM-DD"
               minDate="2016-01-01"
               maxDate="2020-06-01"
               confirmBtnText="Confirm"
               cancelBtnText="Cancel"
               customStyles={{
               dateIcon: {
               position: 'absolute',
               left: 0,
               top: 4,
               marginLeft: 0
               },
               dateInput: {
               marginLeft: 36
               }
               // ... You can check the source to find the other keys. 
               }}
               onDateChange={(date) => {this.setState({date: date})}}
               />


          <Button style={styles.bigblue} rounded 
           onPress={this.saveData.bind(this)}  >
            <Text> Add Patient </Text>
          </Button>


          </Form>





        </Content>
</Image>

     
 <Footer>
          <FooterTab>
            <Button 
              style={{backgroundColor: 'rgba(230, 230, 230, 0.1)',alignItems: 'center',justifyContent:'center'}}
               active  onPress={() => {
                        this.props.navigation.navigate("AddPatientsRoute")
                    }}>
              <Text>Add Patient</Text>
            </Button>

            <Button style={{alignItems: 'center'}}  onPress={() => {
                        this.props.navigation.navigate("SearchRoute")
                    }}>
              <Text>Search By Name</Text>
            </Button>

            <Button style={{alignItems: 'center'}}
                    onPress={() => {
                        this.props.navigation.navigate("SearchDateRoute")
                    }}>
              <Text>Search By Date</Text>
            </Button>

            <Button style={{alignItems: 'center'}} onPress={() => {
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

       let wdth = Dimensions.get('window').width
       let margle= (wdth-145)/2


const styles = StyleSheet.create({
  bigblue: {
   marginTop :20,
   marginLeft :margle,width:145,
  }
})