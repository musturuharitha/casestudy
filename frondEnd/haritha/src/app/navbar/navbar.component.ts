import { Component, OnInit } from '@angular/core';
import { RoutingServiceService } from '../routing-service.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // User = new user();
  // msg =''
  // invalidLogin = false;
  // public totalItem : number = 0;
  // public searchTerm !: string;
  username:String;
  password:String;
  username1:String;
  password1:String;
  username2:String;
  password2:String;
  constructor(private routerbj:RoutingServiceService , private RoutingService: RoutingServiceService) { 
    this.username="";
    this.password="";
    this.username1="";
    this.password1="";
    this.username2="";
    this.password2="";
  }

  ngOnInit(): void {
  }
 

  display(myuser:any){
    if(this.username=="owner@gmail.com" && this.password=="password")
    { 
      alert("sucessfully completed");
this.RoutingService.openowner();
    }
  }




  
  display1(myuser:any){
    if(this.username1=="manager@gmail.com" && this.password1=="password")
    { 
      alert("sucessfully completed");
this.RoutingService.manager();
    }
  }


  
  display2(myuser:any){
    if(this.username2=="reception@gmail.com" && this.password2=="password")
    { 
      alert("sucessfully completed");
this.RoutingService.opendashboard();
    }

  }



}
 
  // login(){
  //   if(this.userservice.loginUser(this.User)){
  //   this.userservice.loginUser(this.User).subscribe(
  //     (data:user)=>{
  //       alert("Sign in successfully")
  //       this.User=data;
  //       this.router.navigate(['dashboard']);
         
 
  //       //this.redirect();
  //     }
     
  //   );}
  //   else{
  //     alert("Invalid Login Credentials");
  //     this.msg="Enter valid email and password";
  //   }
  //  }
  //  registerUser(){
  //   this.userservice.registerUser(this.User).subscribe(
  //     data =>{
  //       alert("Successfully registered");
      
  //       this.msg= "registration success"
  //     },
  //     error =>{
  //       alert("exception occured");
  //       this.msg=error.error;
        
  //     }
      
  //   )
  // }
   
  //  redirect(){
    
  //     if(this.user.useremail=="Admin@gmail.com" && this.user.password==123456789){
  //      sessionStorage.setItem('role','admin');
  //      sessionStorage.setItem('useremail',String(this.user.useremail));
  //      this.invalidLogin=false;
  //      this.router.navigate(['']).then(()=>{
  //        window.location.reload();
  //      })
  //    }
  //    else {
  //     sessionStorage.setItem('role','customer');
  //     sessionStorage.setItem('useremail',String(this.user.useremail));
  //     this.invalidLogin=false;
  //     this.router.navigate(["/cart"]).then(()=>{
  //       window.location.reload();
  //     });

  //   }

  //  }
  