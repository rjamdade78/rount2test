import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public signup ! : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router){
    console.log('SignupComponent');

  }
  
  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required, Validators.minLength(5)]
    })
  }
  Onsignup(){
    this.http.post('http://localhost:3000/signupusers', this.signup.value)
      .subscribe((res) => {
        alert("you have sign up seccesfully!!");
        this.signup.reset()
        this.router.navigate(['login'])
        
      })
  }
  get fullname(){
    return this.signup.get('fullname')
  }
  get email(){
    return this.signup.get('email')
  }
  get password(){
    return this.signup.get('password')
  }
}
