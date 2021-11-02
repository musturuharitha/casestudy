import { Component, OnInit } from '@angular/core';
import { Setrates } from 'src/setrates';
import { RoutingServiceService } from '../routing-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-setrates',
  templateUrl: './setrates.component.html',
  styleUrls: ['./setrates.component.css']
})
export class SetratesComponent implements OnInit {

  setrates:Setrates;
  constructor(private routerbj:RoutingServiceService,private UserService:UserService) {
    this.setrates=new Setrates();
   }

  setratesList:Setrates[]=[];

  ngOnInit(): void {
  this.getAllrates()
  }
   getAllrates(){
     this.UserService.getrates().subscribe((res: any)=>{this.setratesList=res})
   }


   display(myuserform:any){
       this.UserService.addrates(this.setrates).subscribe(res=>{alert("success")})     
  }

  delete(id:String){
    alert("delete")
    this.UserService.deleterates(id).subscribe(res=>{alert("success")})
  }

  // update(id:String){
  //   alert("delete")
  //   this.UserService.updatereservation(id).subscribe(res=>{alert("success")})
  // }

  AddQuest()
  {
    this.routerbj.openGuest();

  }

}
