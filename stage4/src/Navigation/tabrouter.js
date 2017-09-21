import { TabNavigator } from 'react-navigation';


import Signup from "../auth/signup";
import Login from "../auth/login";



const Tab = TabNavigator({

  LOGINROUT :  { screen : Login },


  
  SIGNUPROUT : { screen : Signup }



}
)















export default  Tab;


























