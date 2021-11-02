import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from 'src/guest';
import { Reservation } from 'src/reservation';
import { Room } from 'src/room';
import { Setrates } from 'src/setrates';
import { Staff } from 'src/staff';

import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { 
  }
  public loginUser(User: user):Observable<any>{
    return this._http.post<any>("http://localhost:8006/login",User)
  }
public registerUser(User: user):Observable<any>{
  return this._http.post<any>("http://localhost:8006/register",User)
}

//---------------------------------------------------------------------------------
public  getGuest()
{
  return this._http.get<Guest[]>("http://localhost:9096/guest/list")
}
addquestadd(clientdata:any)
{
  return this._http.post('http://localhost:9096/guest/add',clientdata);
}
deleteguest(clientdata:any)
{
  return this._http.delete('http://localhost:9096/guest/delete/'+clientdata);
}
//-----------------------------------------------------------
public  getReservation()

{
  return this._http.get<Reservation[]>("http://localhost:9094/reservation/list")
}

addreservation(clientdata:any)
{
  return this._http.post("http://localhost:9094/reservation/add",clientdata)
}
deletereservation(clientdata:any)
{
  return this._http.delete('http://localhost:9094/reservation/delete/'+clientdata);
}
updatereservation(clientdata:any){
  return this._http.put('http://localhost:9094/reservation/update',clientdata);
}
//-------------------------------------------------------------
public  getRoom()
{
  return this._http.get<Room[]>("http://localhost:9095/roomdetails/listofrooms")
}

addroom(clientdata:any)
{
  return this._http.post('http://localhost:9095/roomdetails/addroom',clientdata)
}
deleteroom(clientdata:any)
{
  return this._http.delete('http://localhost:9095/roomdetails/delete/'+clientdata);
}
//-------------------------------------------------------------------
//-------------------------------------------------------------
public  getStaff()
{
  return this._http.get<Staff[]>("http://localhost:9097/staff/list")
}
addStaff(clientdata:any)
{
  return this._http.post('http://localhost:9097/staff/add',clientdata)
}
deleteStaff(clientdata:any)
{
  return this._http.delete('http://localhost:9097/staff/delete/'+clientdata);
}
//------------------------------------------------------------------

public  getrates()
{
  return this._http.get<Setrates[]>("http://localhost:9091/setrating/list")
}

addrates(clientdata:any)
{
  return this._http.post('http://localhost:9091/setrating/add',clientdata)
}
deleterates(clientdata:any)
{
  return this._http.delete('http://localhost:9091/setrating/delete/'+clientdata);
}

}