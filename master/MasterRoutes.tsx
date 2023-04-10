import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Route } from '../sampleApp/typeScript/routes/Model';
import Menu from "../sampleApp/src/templates/Menu";
import ArMenu from "../arApp/src/menu/ArMenu";
import MapMenu from "../mapApp/MapMenu";

//List of routes
const MasterRoutes : Route[]  = [
    {
        name:'Menu',
        component:Menu,
        options:{ title: 'Menu' },
    },
    {
        name:'ArMenu',
        component:ArMenu,
        options:{ title: 'ArMenu' },
    },
    {
        name:'MapMenu',
        component:MapMenu,
        options:{ title: 'MapMenu' },
    },
    
];

//getFocusedRouteNameFromRoute:''
 export default MasterRoutes;