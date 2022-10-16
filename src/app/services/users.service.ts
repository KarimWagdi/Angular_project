import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/iproduct';
import { IUser } from '../interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // users : Iproduct [] = []
  constructor(private HttpClient : HttpClient) { }

  getAllUsers () : Observable<IUser[]>{
    return this.HttpClient.get<IUser[]>("https://retoolapi.dev/5rDfbU/data")
  }
}
