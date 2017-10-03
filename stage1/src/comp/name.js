import React, { Component } from 'react';
import { AsyncStorage,Image, Dimensions  } from 'react-native';
import { Container, Header, Content, Item, Input , Button, Text ,List ,ListItem, Left, Body, Right, Icon, Title  } from "native-base";







 class SerName extends Component {

    constructor() {
        super()
        this.state = {
            name:'',
            patientdata:[]

        }
    }




    static navigationOptions = {
        title: "Search By Name",
        header: false
    }






getDataByName(){
       AsyncStorage.getItem('datastring')
                .then((responce) => {
                   
                    let newdata = []     
                    var foundedData = []            
                    console.log(responce)
                    let mydata = JSON.parse(responce)
                                             
                                             
                    console.log(mydata)   
                    console.log(mydata.length)   
                             
                        console.log(newdata)

                                
                    for ( i = 0; i < mydata.length; i++) {
                        newdata.push(mydata[i]);
                        console.log(newdata)
                        console.log(this.state.patientdata)
                    }                      
                       newdata.map((obj) => {
                    if (obj.name === this.state.name) {
                        foundedData.push(obj)
                    }
                })                 
                            
                     this.setState({
                         patientdata: foundedData  
                     })
                        // console.log(this.state.patientdata)
                                    
                })
}


render(){

          let bimgwidth = Dimensions.get('window').width
          let bimgheight = Dimensions.get('window').height
           let margle= (bimgwidth-120)/2
            let margle3= (bimgwidth-85)/2
return(

<Container>


  <Image source={require('../img/1.jpg')} style={{height:bimgheight,width:bimgwidth,}}>   


                   <Header>
         
          <Body style={{width:120,marginLeft:margle}}>
            <Title>Search By Name</Title>
          </Body>
        
        </Header>
        
        <Content>


          <Item rounded>
            <Input placeholder='Enter Name'    
                                    
                                     onChangeText={(text) => {
                                    
                                     this.setState({
                                      
                                        name: text
                                   
                                    })
                                }}/>
          </Item>

          <Button style={{width:85,marginLeft:margle3,marginTop:5}} rounded onPress={this.getDataByName.bind(this)}>
            <Text>Search</Text>
          </Button>

 {
    this.state.patientdata.map((m, indexno) => {
        
                    console.log(m)


                    return (

          <List key={indexno}>
            <ListItem style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}}>

              <Text> Name : {m.name}</Text>

            </ListItem>                    


            <ListItem style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}} >

              <Text> Disease : {m.disease}</Text>

            </ListItem >


            <ListItem style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}}>

              <Text> Medication : {m.medication}</Text>

            </ListItem>


            <ListItem style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}}>

              <Text> Date : {m.date}</Text>

            </ListItem>  


            <ListItem style={{backgroundColor: 'rgba(230, 230, 230, 0.1)'}}>

              <Text> Fee Charged : {m.cost}</Text>

            </ListItem>
            
          </List>

 )
                })

} 

        </Content>
   </Image>   








    </Container>





)

}


}


export default SerName