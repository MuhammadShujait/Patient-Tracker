import { StackNavigator } from 'react-navigation';
import Home from '../home';
import Submit from '../comp/submit'
import ViewAll from '../comp/allData'
import SreDate from '../comp/date'
import SerName from '../comp/name'



const Router = StackNavigator({

    Homeroute: {
        screen: Home
    },

    SubmitRout:{
        screen:Submit
    },
    
    AllDataRout:{
        screen:ViewAll
    },
    Namerout:{
        screen:SerName
    },
    Daterout:{
        screen:SreDate
    }





    


})










export default Router




