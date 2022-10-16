import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interface/iproduct';
import { IUser } from 'src/app/interface/iuser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers : IUser[] = []

  constructor(
    private userservice : UsersService
  ) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe(user => {
      this.allUsers = user
    })
  }

}
