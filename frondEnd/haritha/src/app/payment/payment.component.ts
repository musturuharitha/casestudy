import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/payment';
import { Setrates } from 'src/setrates';
import { RoutingServiceService } from '../routing-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment:Payment;
  setrates:Setrates;
  constructor(private routerbj:RoutingServiceService,private UserService:UserService) {
    this.setrates=new Setrates();
    this.payment=new Payment();
   }

  setratesList:Setrates[]=[];

  ngOnInit(): void {
  this.getAllrates()
  }
   getAllrates(){
     this.UserService.getrates().subscribe((res: any)=>{this.setratesList=res})
   }


   display(myuserform:any){
      alert("Payment Done")
  }

  // delete(id:String){
  //   alert("delete")
  //   this.UserService.deleterates(id).subscribe(res=>{alert("success")})
  // }

  // // update(id:String){
  // //   alert("delete")
  // //   this.UserService.updatereservation(id).subscribe(res=>{alert("success")})
  // // }

  // AddQuest()
  // {
  //   this.routerbj.openGuest();

  // }

}
