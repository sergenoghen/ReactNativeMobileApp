import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Route } from '../model/routeModel';
import ArMenu from "../menu/ArMenu";

//List of routes
const ArRoutes : Route[]  = [
    {
        name:'ArMenu',
        component:ArMenu,
        options:{ title: 'ArMenu' },
    },
    
];

 export default ArRoutes;