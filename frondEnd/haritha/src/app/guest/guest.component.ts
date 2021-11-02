import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/guest';
import { RoutingServiceService } from '../routing-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  guest:Guest;
  constructor(private routerbj:RoutingServiceService,private UserService:UserService) {
  guest:Guest;
  this.guest=new Guest;
   }
  guestList:Guest[]=[];

  ngOnInit(): void {
  this.getAllGuest()
  }
   getAllGuest(){
     this.UserService.getGuest().subscribe(res=>{this.guestList=res})
   }


  AddQuest()
  {
    this.routerbj.openGuest();
  }


display(myuserform:any){
  this.UserService.addquestadd(this.guest).subscribe(res=>{alert("success")})     
}


delete(id:String){
  alert("delete")
  this.UserService.deleteguest(id).subscribe(res=>{alert("success")})
}

}