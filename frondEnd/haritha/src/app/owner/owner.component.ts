import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingServiceService } from '../routing-service.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  public eclass: boolean;
  public isOverlay: boolean;

  constructor(private myroute:RoutingServiceService,private router:Router) {
    this.eclass = false;
    this.isOverlay = false;
   }

  ngOnInit(): void {
  }

  toggleClass(){
    this.eclass = !this.eclass;
    this.isOverlay = !this.isOverlay;
  }
  signout(){
   
    this.router.navigate([''])
  
  }
}