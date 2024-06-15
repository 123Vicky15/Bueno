import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  title = 'AngularCrud';
}
