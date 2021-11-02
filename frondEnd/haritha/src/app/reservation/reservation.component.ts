import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/reservation';
import { RoutingServiceService } from '../routing-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation:Reservation;
  constructor(private routerbj:RoutingServiceService,private UserService:UserService) {
    this.reservation=new Reservation();
   }

  reservationList:Reservation[]=[];

  ngOnInit(): void {
  this.getAllReservation()
  }
   getAllReservation(){
     this.UserService.getReservation().subscribe((res: any)=>{this.reservationList=res})
   }


   display(myuserform:any){
       this.UserService.addreservation(this.reservation).subscribe(res=>{alert("success")})     
  }

  delete(id:String){
    alert("delete")
    this.UserService.deletereservation(id).subscribe(res=>{alert("success")})
  }

  update(id:String){
    alert("updated")
    this.UserService.updatereservation(this.reservation).subscribe(res=>{alert("success")})
  }

  AddQuest()
  {
    this.routerbj.openGuest();

  }

}