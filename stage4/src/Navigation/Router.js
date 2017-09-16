import { StackNavigator } from 'react-navigation';
import Home from "../home";
import Signup from "../auth/signup";
import Login from "../auth/login";
// import Dashboard from "../components/dashboard";
import AddPatients from "../components/addpatients";
import Search from "../components/search";
import searchDate from "../components/searchDate"
import Viewpatiens from "../components/view_all_patients"


const Router = StackNavigator({
  

    Homeroute: {
        screen: Home
    },

    SignupRoute: {
        screen: Signup
    },

      LoginRoute: {
        screen: Login
    },

    // DashboardRoute: {
    //     screen: Dashboard
    // },

    AddPatientsRoute: {
        screen: AddPatients
    },

    SearchRoute: {
        screen: Search
    },

    SearchDateRoute: {
        screen: searchDate
    },
    
    VeiwAllRoute: {
        screen: Viewpatiens
    },
  



})
export default Router