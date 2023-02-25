import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 public loginForm ! : FormGroup
   constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router){
    console.log('LoginComponent');
    
  }
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  onlogin(){
    this.http.get<any>('http://localhost:3000/signupusers')
        .subscribe((res) => {
          const user = res.find((a: any) => {
            return a.mail === this.loginForm.value.mail &&
            a.password === this.loginForm.value.password
          })
          if(user){
            this.loginForm.reset();
            this.router.navigate(['/product/products'])
          }else{
            alert("user not found!!!")
          }
        })    
  }
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

}
