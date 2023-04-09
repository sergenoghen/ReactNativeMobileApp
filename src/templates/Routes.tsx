import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Route } from '../typeScript/routes/Model'
import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Details from '../screens/Details';
import Contact from '../screens/Contact';
import NavBar from '../Navigation/NavBar';
import ViewMovie from '../templates/View';
import Section from '../templates/Section';
import Page from '../templates/Page';
import SearchComponent from '../components/SearchComponent';
import AssetExample from "../components/AssetExample";
import Banner from "../components/Banner";
import MyImage from "../components/MyImage";
import MapIndex from "../../mapAr/mapLibre/MapIndex";

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
        name:'ViewMovie',
        component:ViewMovie,
        options:{ title: 'View' },
    },
    {
        name:'NavBar',
        component:NavBar,
        options:{ title: 'NavBar' },
    },
    {
        name:'Page',
        component:Page,
        options:{ title: 'Page' },
    },
    {
        name:'AssetExample',
        component:AssetExample,
        options:{ title: 'AssetExample' },
    },
    {
        name:'Section',
        component:Section,
        options:{ title: 'Section' },
    },
    {
        name:'Banner',
        component:Banner,
        options:{ title: 'Banner' },
    },
    {
        name:'MyImage',
        component:MyImage,
        options:{ title: 'MyImage' },
    },
    {
        name:'MapIndex',
        component:MapIndex,
        options:{ title: 'MapIndex' },
    },
];

//getFocusedRouteNameFromRoute:''
 export default routes;