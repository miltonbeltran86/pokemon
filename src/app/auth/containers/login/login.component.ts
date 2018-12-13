import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { Login, ILogin } from '../../Login';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  @Output() signByGoogle = new EventEmitter<boolean>();
 
  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['',Validators.required]
  });
 
  //login : ILogin;
 
  constructor(private fb: FormBuilder,private authService : AuthService, private router: Router, private zone: NgZone) {
    //this.login = new Login();
   }
 
  ngOnInit() {
  }
 
  submit() {
    //this.submitted.emit(this.loginForm.value);
    console.log(this.loginForm.value);
    
        this.authService.loginWithEmail(this.loginForm.value).then(
          user => {
            localStorage.setItem('bizPokemon', JSON.stringify(user));
            this.router.navigate(['main']);
            console.log(user);
          }
        )
      
    
  }
 
  signGoogle(){
    //this.signByGoogle.emit(true);

      this.authService.loginWithGoogle().then(

        user=>{
          localStorage.setItem('bizPokemon', JSON.stringify(user));
            this.zone.run(
              _=>{
                this.router.navigate(['main']);
              }
            )
        }
      )
    
    
  
  }
 
 }
/*export class LoginComponent implements OnInit {
  login: Login;

  constructor(private authService : AuthService, private router: Router, private zone: NgZone) {
    
    this.login = new Login();
   }
  

  ngOnInit() {
    
  }

  submit(){
    console.log(this.login);
      if(event){
        this.authService.loginWithEmail(this.login).then(
          user => {
            localStorage.setItem('bizPokemon', JSON.stringify(user));
            this.router.navigate(['main']);
            console.log(user);
          }
        )
      
    }
  }

  logout(){
    this.authService.logout();
  }

  signWithGoogle(event){
    if(event){
      this.authService.loginWithGoogle().then(

        user=>{
          localStorage.setItem('bizPokemon', JSON.stringify(user));
            this.zone.run(
              _=>{
                this.router.navigate(['main']);
              }
            )
        }
      )
    }
  }

}
*/