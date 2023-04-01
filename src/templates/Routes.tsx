import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Route } from '../typeScript/routes/Model'
import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Details from '../screens/Details';
import Contact from '../screens/Contact';
import NavBar from '../Navigation/NavBar';
import SearchComponent from '../components/SearchComponent';

//List of routes
const routes : Route[]  = [
    {
        name:'Home',
        component:Home,
        options:{ title: 'Home' },
    },
    {
        name:'About',
        component:About,
        options:{ title: 'About' },
    },
    {
        name:'Profile',
        component:Profile,
        options:{ title: 'Profile' },
    },
    {
        name:'Details',
        component:Details,
        options:{ title: 'Details' },
    },
    {
        name:'Contact',
        component:Contact,
        options:{ title: 'Contact' },
    },
    {
        name:'SearchComponent',
        component:SearchComponent,
        options:{ title: 'Search' },
    },
    {
        name:'NavBar',
        component:NavBar,
        options:{ title: 'NavBar' },
    },
];

//getFocusedRouteNameFromRoute:''
 export default routes;