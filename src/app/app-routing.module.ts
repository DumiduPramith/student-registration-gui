import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './feature/guard/auth.guard';
import { LoginGuard } from './feature/guard/login.guard';
import { LoginComponent } from './feature/login/login.component';
import { HomeComponent } from './home/home.component';

import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    canActivate: [LoginGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Profile',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
