import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Route } from '../typeScript/routes/Model'
import Home from '../sampleApp/screens/Home';
import About from '../sampleApp/screens/About';
import Profile from '../sampleApp/screens/Profile';
import Details from '../sampleApp/screens/Details';
import Contact from '../sampleApp/screens/Contact';
import NavBar from '../sampleApp/Navigation/NavBar';
import ViewMovie from '../templates/View';
import Section from '../templates/Section';
import Page from '../templates/Page';
import SearchComponent from '../sampleApp/components/SearchComponent';
import AssetExample from "../sampleApp/components/AssetExample";
import Banner from "../sampleApp/components/Banner";
import MyImage from "../sampleApp/components/MyImage";
import MapLibreIndex from "../../mapAr/mapLibre/MapLibreIndex";

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
        options:{ title: 'AssetEx' },
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
        name:'MapLibre',
        component:MapLibreIndex,
        options:{ title: 'MapLibre' }, 
    },
    
];

//getFocusedRouteNameFromRoute:''
 export default routes;