import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@shared/services/users.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  Users$ = this.usersService.users;
  user$ = this.usersService.getCurrentUser();

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    console.log('User->', this.user$)
  }

}
