import { Component, OnInit } from '@angular/core';

// Services
import { UsersService } from 'src/app/@shared/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [UsersService]
})
export class HeaderComponent implements OnInit {

  public clickHamburger: boolean = false
  public isLogged = false;
  public user: any;

  constructor(
    private usersService: UsersService
  ) { }

  async ngOnInit() {
    this.user = await this.usersService.getCurrentUser();
    if (this.user) {
      this.isLogged = true;
      console.log('What is coming from there?->', this.user);
    }
  }

  logout() {
    this.usersService.logout();
    console.log('Is logged ->', this.isLogged);
    console.log('User ->', this.user);
  }

}
