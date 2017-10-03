import React, { Component } from 'react';
import { AsyncStorage ,Image ,Dimensions} from 'react-native';
import { Container, Header, Content, Item, Input , Button, Text,List,ListItem ,  Left, Body, Right, Icon, Title   } from "native-base";
import DatePicker from 'react-native-datepicker';






 class SreDate extends Component {

    static navigationOptions = {
        title: "Search By Date",
        header: false
    }



        constructor() {
        super()
        this.state = {
            date:'',
            patientdata:[]

        }
    }

getDataByDate(){  
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
                    if (obj.date === this.state.date) {
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
            let margle2= (bimgwidth-120)/2
            let margle= (bimgwidth-200)/2
             let margle3= (bimgwidth-85)/2
return(

<Container>

 <Image source={require('../img/1.jpg')} style={{height:bimgheight,width:bimgwidth,}}> 
        
                  <Header>
         
          <Body style={{width:120,marginLeft:margle2}}>
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

          <Button style={{width:85,marginLeft:margle3,marginTop:5}} rounded onPress={this.getDataByDate.bind(this)}>
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


export default SreDate