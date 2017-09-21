import React, { Component } from 'react';
import { AsyncStorage,Image, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label, Left, Body, Right, Icon, Title } from "native-base";


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
                alert("Data has been Saved.")
            })





    }



    getData() {

        AsyncStorage.getItem('datastring')
            .then((data) => {
                var newdata = JSON.parse(data)
                console.log(newdata)
            })

    }


    navigate() {
        this.props.navigation.navigate("Aboutroute")
    }

    render() {
              
              
               let bimgwidth = Dimensions.get('window').width
               let bimgheight = Dimensions.get('window').height
               let margle= (bimgwidth-100)/2

        return (
            <Container>
        <Image source={require('../img/6.jpg')} style={{height:bimgheight,width:bimgwidth,}}> 
                <Header>
       
          <Body style={{width:100,marginLeft:margle}}>
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
                              <Item floatingLabel>
                            <Label>DD-MM-YYYY</Label>
                            <Input
                                onChangeText={(text) => {
                                    this.setState({
                                        date: text
                                    })
                                }}
                            />
                        </Item>



                        <Button rounded onPress={this.saveData.bind(this)}>
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