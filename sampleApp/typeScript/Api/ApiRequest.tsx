 //https://www.npmjs.com/package/rxjs-http-client?activeTab=readme
 
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, retry } from 'rxjs/operators';
import { environment } from '../../environnement/environnement';
import { Movie} from '../../sampleApp/model/Movie';
import { Customer} from '../../sampleApp/model/Customer';
import { HttpResponse, RxJSHttpClient } from 'rxjs-http-client';

import * as Network from 'expo-network';


  class RequestService{
    _RxJSHttpClient: RxJSHttpClient;
    _XMLHttpRequest: XMLHttpRequest;

    async getMoviesFromApi() {
        let moviesData: any[]=[];
        let erreur: any = null;
        try {
            const response = await fetch(
              //   environment.apiUrl+"customer?page=1",
               //"https://reactnative.dev/movies.json",
               "https://sergeportfolio.000webhostapp.com/",
               {
                    headers: {
                        Authorization: `token ${environment.apiKey}`,
                    },
                });
            const json = await response.json();
            const jsonData:any[] = json.data?json.data:json;
            return  moviesData = jsonData;
            
        } catch (error) {     
            retry(3)
            console.log('An error occured !');       
            console.error(error);
            erreur = error;
        }

        return new Promise<any>((resolve, reject)=>{
            resolve(moviesData);
            reject(erreur);
        });

    };


    
   async getCustomerDetails(id:any=1) { //Not in use
    
    return await fetch( environment.apiUrl+"customer?page=1")
      .then(data=>{
        if(data) return data
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      }
        
      );
  }

    
  private handleError(error: HttpResponse) {// Not in use
    /**/if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

    async sendXMLHttpRequest(){
        let dataResponse: unknown ;
        this._XMLHttpRequest.onreadystatechange =  e => {
                //console.log(Network.NetworkStateType);
            if ( this._XMLHttpRequest.readyState !== 4) {
                return;
            }
            if ( this._XMLHttpRequest.status === 200) {
                return dataResponse = JSON.parse((this._XMLHttpRequest.responseText));
            } else {
                console.warn('Something bad happened; please try again later.');
                console.warn(e);
            }
        };

        this._XMLHttpRequest.open('GET', "https://sergeportfolio.000webhostapp.com/");
        this._XMLHttpRequest.send();
            
        return await new Promise((resolve, reject)=>{
            console.log("Les donnees");

            retry(3)
            resolve(dataResponse);
            reject( ( new Error("Empty data")) )
        })
    }

     
    getRequest() {
       this._RxJSHttpClient.get('some-url')
            .pipe(
                mergeMap((response) => response.json())
            )
            .subscribe((response) => {
                console.log(response)
            })
    }

    postRequest() {
        const request = {
            body: {
                some: 'data'
            }
        }
        
        this._RxJSHttpClient.post('some-url', request)
            .pipe(
                mergeMap((response) => response.json())
            )
            .subscribe((response) => {
                console.log(response)
            })
    }


    constructor(){
        this._RxJSHttpClient = new RxJSHttpClient();
        this._XMLHttpRequest = new XMLHttpRequest();
    }
 }
 
 export default RequestService;