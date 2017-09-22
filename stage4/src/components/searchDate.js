import React, { Component } from 'react';
import { View,  TextInput,  AsyncStorage,StyleSheet,Image,Dimensions  } from 'react-native';
import * as firebase from "firebase";
import { Container, Header, Content, List, ListItem, Text,
     Separator , Item, Input, Button,Footer,FooterTab,  Left, Body, Right,  Icon, Title   } from 'native-base';
import DatePicker from 'react-native-datepicker';

     
class SearchDate extends Component {
   static navigationOptions = {
        title: "Search By Date",
       header: false
    }
    componentWillMount() {
        console.disableYellowBox = true
    }
    constructor() {
        super()
        this.state = {
            data: [],
            date: "2016-09-17"
        }
    }
  


    getDataByDate() {
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
                    if (obj.date === this.state.date) {
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


       let swidth = Dimensions.get('window').width
       let smwidth = (swidth-200)/2
       let bimgwidth = Dimensions.get('window').width*2
       let bimgheight = Dimensions.get('window').height
       let bimgh = bimgheight-75
       let wdth = Dimensions.get('window').width
       let margle= (wdth-200)/2


        return (
            <Container>


                    <Image source={require('../img/1.jpg')} style={{height:bimgh,width:bimgwidth,}}>  
                    
                                       <Header>
       
           <Body style={{width:150,marginLeft:margle}}>
            <Title>Search By Date</Title>
          </Body>
        
        </Header>
            <Content >
            
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




 <Button rounded 
   style={styles.bigblue}
  onPress={this.getDataByDate.bind(this)}>


                   <Text>Search Patient</Text>


                   </Button>




                {this.state.data.map((data, indexno) => {
                    return  (

   <List key={indexno}>
          <ListItem  bordered>
            <Text style={styles.bigblue} > Name : {data.name}</Text>
          </ListItem>

          <ListItem >
            <Text> Disease : {data.disease}</Text>
          </ListItem>

          <ListItem>
            <Text> Medication: {data.mediacation}</Text>
          </ListItem>

          <ListItem>
            <Text> Fee Charged : {data.cost}</Text>
          </ListItem>

      
          <ListItem>
            <Text> Date : {data.date}</Text>
          </ListItem>

</List>
        













                        
                   

                    )
                })}

</Content >
 </Image> 
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

            <Button  style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}} active
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
export default SearchDate

       let wdth = Dimensions.get('window').width
       let margle= (wdth-165)/2

const styles = StyleSheet.create({
  bigblue: {
   marginTop :20,
   marginLeft :margle,fontSize: 20,width:165,
//    height:40
  }
})