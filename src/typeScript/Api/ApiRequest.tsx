 
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../../environnement/environnement';
import { Movie} from '../../model/Movie'
import { Customer} from '../../model/Customer'

  class RequestService{

    async getMoviesFromApi() {
        let moviesData: Customer[]=[];
        let erreur: any = null;
        try {
            const response = await fetch(
                environment.apiUrl+"customer?page=1",
            );
            const json = await response.json();
            const jsonData:Customer[] = json.data;
            return  moviesData = jsonData;
            
            
        } catch (error) {     
            console.log('Une erreur est survenue !');       
            console.error(error);
            erreur = error;
        }

        return new Promise<any>((resolve, reject)=>{
            resolve(moviesData);
            reject(erreur);
        });

    };


    // async getCurrent(): Promise<Coordinates> {
    //     if (
    //       this._currentLocation.latitude === 0 &&
    //       this._currentLocation.longitude === 0
    //     ) {
    //       await this.getCoordinates();
    //     }
    
    //     return this._currentLocation;
    //   }


    constructor(){

    }
 }
 
 export default RequestService;