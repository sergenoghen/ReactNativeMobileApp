//source : https://www.npmjs.com/package/react-native-geolocation-service
import { firstValueFrom, map, of } from 'rxjs';

import { Coordinates } from '../models/coordinate';
  
//import * as Geolocation from 'react-native-geolocation-service';
//import Geolocation from '@react-native-community/geolocation';


export class LocationService {

    constructor( private coordinate : Coordinates ){

    }

    init(){
        console.log(this.coordinate);
    }

}
