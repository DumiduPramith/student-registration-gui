import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {
  DialogOverviewExampleDialog,
  RegCourceComponent,
} from './reg-cource/reg-cource.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxCourcesComponent } from './checkbox-cources/checkbox-cources.component';
import {
  CreateCourceComponent,
  CreateCourceDialogComponent,
} from './create-cource/create-cource.component';
import {
  CreateAccountComponent,
  CreateAccountDialogComponent,
} from './create-account/create-account.component';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { CreateCourceFormComponent } from './create-cource-form/create-cource-form.component';
import { ViewRegStudentsComponent } from './view-reg-students/view-reg-students.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    RegCourceComponent,
    DialogOverviewExampleDialog,
    CheckboxCourcesComponent,
    CreateCourceComponent,
    CreateAccountComponent,
    CreateCourceDialogComponent,
    CreateAccountDialogComponent,
    CreateAccountFormComponent,
    CreateCourceFormComponent,
    ViewRegStudentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    RegCourceComponent,
    CreateCourceComponent,
    CreateAccountComponent,
    ViewRegStudentsComponent,
  ],
})
export class FeatureModule {}
