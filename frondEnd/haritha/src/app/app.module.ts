import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { RoomListComponent } from './room-list/room-list.component';
import { AddGuestComponent } from './add-guest/add-guest.component';
import { ReservationComponent } from './reservation/reservation.component';
import { GuestComponent } from './guest/guest.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerSidebarComponent } from './manager-sidebar/manager-sidebar.component';
import { StaffComponent } from './staff/staff.component';
import { SetratesComponent } from './setrates/setrates.component';
import { OwnerSidebarComponent } from './owner-sidebar/owner-sidebar.component';
import { OwnerComponent } from './owner/owner.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
    DashboardComponent,
 
    AdminSidebarComponent,
    RoomListComponent,
    AddGuestComponent,
    ReservationComponent,
    GuestComponent,
    ManagerComponent,
    ManagerSidebarComponent,
    StaffComponent,
    SetratesComponent,
    OwnerSidebarComponent,
    OwnerComponent,
    PaymentComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatAutocompleteModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }