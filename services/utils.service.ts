
import { data } from 'jquery';
import { map, pipe, of } from 'rxjs';

export class CustomerService {

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

}
