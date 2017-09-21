import React, { Component } from 'react';
import { AsyncStorage,Dimensions,Image } from 'react-native';
import { Container ,Content ,List , ListItem, Text ,Button, Header, Left, Body, Right, Icon, Title  } from "native-base";



 class ViewAll extends Component {
    constructor() {
        super()
        this.state = {
            patientdata:[]

        }
    }


    static navigationOptions = {
        title: "View All Data",
        header: false
    }


    
  
componentWillMount() {

         console.disableYellowBox = true
         
            AsyncStorage.getItem('datastring')
                .then((responce) => {
                   
                    let newdata = []     
                                
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
                                      
                            
                     this.setState({
                         patientdata: newdata  
                     })
                        console.log(this.state.patientdata)
                                    
                })
                


   



}




render(){

          let bimgwidth = Dimensions.get('window').width
          let bimgheight = Dimensions.get('window').height-10
           let margle= (bimgwidth-150)/2
    // console.log('patient data   '+this.state.patientdata[0])
return(

<Container>

  <Image source={require('../img/5.jpg')} style={{height:bimgheight,width:bimgwidth,}}> 
          <Header>
        
          <Body style={{width:150,marginLeft:margle}}>
            <Title>View All Patients</Title>
          </Body>
        
        </Header>


<Content>



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


export default ViewAll