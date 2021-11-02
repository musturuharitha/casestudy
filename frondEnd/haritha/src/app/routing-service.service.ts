import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {
  constructor(private myrouterobj : Router) { }

 
  opendashboard(){
    this.myrouterobj.navigate(['dashboard'])
  }

  openGuest(){
    this.myrouterobj.navigate(['addguest']);
  }

  openowner(){
    this.myrouterobj.navigate(['owner']);
  }

  manager(){
    this.myrouterobj.navigate(['manager']);
  }

  



}