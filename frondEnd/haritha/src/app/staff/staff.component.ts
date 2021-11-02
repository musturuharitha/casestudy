import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/staff';
import { RoutingServiceService } from '../routing-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff:Staff;
  constructor(private routerbj:RoutingServiceService,private UserService:UserService) {
    
    this.staff=new Staff();
  }
  StaffList:Staff[]=[];

  ngOnInit(): void {
  this.getAllStaff()
  }
   getAllStaff(){
     this.UserService.getStaff().subscribe((res: any)=>{this.StaffList=res})
   }


   
   display(myuserform:any){
    this.UserService.addStaff(this.staff).subscribe(res=>{alert("success")})     
}

delete(id:String){
 alert("delete")
 this.UserService.deleteStaff(id).subscribe(res=>{alert("success")})
}


  AddQuest()
  {
    this.routerbj.openGuest();

  }

}