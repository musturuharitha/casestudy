import { Component, OnInit } from '@angular/core';
import { Room } from 'src/room';
import { RoutingServiceService } from '../routing-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  room:Room;
  // search:String;
  constructor(private routerbj:RoutingServiceService,private UserService:UserService) {
    this.room=new Room();
    // this.search=""
   }
  roomList:Room[]=[];

  ngOnInit(): void {
  this.getAllRoom()
  }
  
   getAllRoom(){
     this.UserService.getRoom().subscribe((res: any)=>{this.roomList=res})
   }

 
   display(myuserform:any){
    this.UserService.addroom(this.room).subscribe(res=>{alert("success")})     
}

delete(id:String){
 alert("delete")
 this.UserService.deleteroom(id).subscribe(res=>{alert("success")})
}
  AddQuest()
  {
    this.routerbj.openGuest();

  }

  // serachfunction(){
  //   alert("fghjkl")
  // }


}
