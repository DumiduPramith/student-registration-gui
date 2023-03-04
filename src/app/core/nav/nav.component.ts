import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginEventService } from 'src/app/feature/login/login-event.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  constructor(private router: Router, private loginEvent: LoginEventService) {}
  ngOnInit() {
    this.loginEvent.courseCreateEvent.subscribe((data) => {
      this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
    });
  }

  logOut() {
    localStorage.clear();
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  isLoggedIn = !!localStorage.getItem('isLoggedIn');
}
