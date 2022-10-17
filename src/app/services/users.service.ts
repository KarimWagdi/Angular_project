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
  constructor() { }

  getAllUsers () {
  }
}
