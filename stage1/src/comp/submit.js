import React, { Component } from 'react';
import { AsyncStorage,Image, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label, Left, Body, Right, Icon, Title } from "native-base";
import DatePicker from 'react-native-datepicker';

var array = []

class Submit extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            disease: '',
            medication: '',
            date:'',
            cost: '',

        }
    }
    static navigationOptions = {
        title: "Home",
        header: false
    }



    componentWillMount () {
              AsyncStorage.getItem('datastring')
            .then((data) => {

            
                if (data !== null) {
                
                    var newdata = JSON.parse(data)
                    console.log(newdata)
                     
                    for(i = 0;i<newdata.length;i++){
                          
                        console.log(newdata[i])
                    array.push(newdata[i])


                    }


                    console.log(array)
                    console.log("Saved Data")
                
                }

                })
   
            }
    

    saveData() {
             if(
            this.state.name !== '' &&  this.state.disease !== '' && this.state.mediacation !== ''
            && this.state.cost !== '' && this.state.date !== ''
         ) {
        let obj = {

            name: this.state.name,
            disease: this.state.disease,
            medication: this.state.medication,
            date: this.state.date,
            cost: this.state.cost
            
        }

     
        array.push(obj)

             console.log(array)


            
             AsyncStorage.setItem('datastring', JSON.stringify(array))



            .then(() => {
                
                this.setState({
                    name:'',
                    disease:'',
                    medication:'',
                    date:'',
                    cost:''

                })

                alert("Data has been Saved.")
            })
         }
        else{
            alert('Fill the Complete Information')
        }




    }






    navigate() {
        this.props.navigation.navigate("Aboutroute")
    }

    render() {
              
              
               let bimgwidth = Dimensions.get('window').width
               let bimgheight = Dimensions.get('window').height
               let margle= (bimgwidth-200)/2
               let margle2= (bimgwidth-100)/2
               let margle3= (bimgwidth-105)/2

        return (
            <Container>
        <Image source={require('../img/5.jpg')} style={{height:bimgheight,width:bimgwidth,}}> 
                <Header>
       
          <Body style={{width:100,marginLeft:margle2}}>
            <Title>Submit Data</Title>
          </Body>
         
        </Header>
                <Content>
                    <Form>



                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        name: text
                                    })
                                }}

                            />
                        </Item>




                        <Item floatingLabel>
                            <Label>Disease</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        disease: text
                                    })
                                }}
                            />
                        </Item>



                        <Item floatingLabel>
                            <Label>Medication Provided</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        medication: text
                                    })
                                }}

                            />



                        </Item>
                        <Item floatingLabel>
                            <Label>Cost</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        cost: text
                                    })
                                }}
                            />
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



                        <Button style={{width:105,marginLeft:margle3,marginTop:5}} rounded onPress={this.saveData.bind(this)}>
                            <Text>SAVE DATA</Text>
                        </Button>



                     


                    </Form>
                </Content>
                </Image>
            </Container>
        );
    }
}
export default Submit