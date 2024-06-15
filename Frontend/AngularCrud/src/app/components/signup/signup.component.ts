import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import ValidateForm from '../../helpers/validateform';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
  
  constructor(private fb : FormBuilder, private auth: AuthService, private router : Router) {}
  ngOnInit(): void {
  this.signUpForm = this.fb.group({
    username:['',Validators.required],
    email: ['',Validators.required],
    password:['',Validators.required]
  })
  }
  
  hideShowPass(){
  
  this.isText = !this.isText;
  
  this.isText? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
  
  this.isText ? this.type = "text": this.type = "password";
  
  }
  onSingup(){
    if(this.signUpForm.valid){
      this.auth.signUp(this.signUpForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.signUpForm.reset();
          this.router.navigate(['login']);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
    }else{
      ValidateForm.validateAllFormFileds(this.signUpForm);
      alert("Your form is invalid")
    }
  }
  
}
