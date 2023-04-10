
import { data } from 'jquery';
import { map, pipe, of } from 'rxjs';

export class UtilService {

  constructor(
    
  ) { }

  get(id:string){
    return this.getCustomerDetails(id).pipe(
      map((response: any)=>response)
    );
  }
  
  getCustomerDetails(id:any){
    return of(id);
  }


  
  public arrKeys = (obj:Object)=>{
    return Object.keys(obj);
  }
  
  public arrValues = (obj:Object)=>{
    return Object.values(obj);
  }



}
