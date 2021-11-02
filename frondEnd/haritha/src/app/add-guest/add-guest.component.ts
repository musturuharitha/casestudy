import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/guest';
import { RoutingServiceService } from '../routing-service.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  guest:Guest;

  constructor(private router:RoutingServiceService) {
    this.guest=new Guest;
   }
   display(myuserform:any){
     this.router.opendashboard();

   }
  ngOnInit(): void {
  }

}
