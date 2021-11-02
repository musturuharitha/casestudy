import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuestComponent } from './guest/guest.component';
import { ManagerComponent } from './manager/manager.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OwnerComponent } from './owner/owner.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomListComponent } from './room-list/room-list.component';
import { SetratesComponent } from './setrates/setrates.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [

  {
    path:"dashboard",
    component:DashboardComponent,
    children:[
      
      {
        path:'guest',
        component:GuestComponent,
      },

      {
        path:'reservation',
        component:ReservationComponent,
      },
      {
        path: 'roomlist',
        component:RoomListComponent
      },
      
      {
        path:'',
        redirectTo:'guest',
        pathMatch:'full'
      },


      {
        path:'payment',
        component:PaymentComponent,
      },
    
    ]



  },
  
  {
    path:"manager",
    component:ManagerComponent,
    children:[
     
      {
        path: 'staff',
        component:StaffComponent,
      },
      {
        path: 'roomlist',
        component:RoomListComponent
      },
      {
        path:'guest',
        component:GuestComponent,
      },

     

    ]
  },
    
      {
        path:"owner",
        component:OwnerComponent,
        children:[
          {
            path:'setrates',
            component:SetratesComponent,
            pathMatch:'full'
          },
          {
            path:'guest',
            component:GuestComponent,
          },
          {
            path: 'staff',
            component:StaffComponent,
          },
          {
            path: 'roomlist',
            component:RoomListComponent
          },
        ]
      },
    
  
  {
    path:"",
    component:NavbarComponent,
  },

  {
    path:"addguest",
    component:AddGuestComponent,
  }

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
