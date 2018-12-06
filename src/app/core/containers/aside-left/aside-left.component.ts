import { Component, OnInit, Input } from '@angular/core';
import {User} from "firebase/app"
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']  
})
export class AsideLeftComponent implements OnInit {

  @Input() asideState: string;
  userTemp : User;
  user: {name: string, photoUrl: string};
  constructor(private authService: AuthService) {
      authService.profileUser().subscribe(user =>{
        this.userTemp = user;
    })
   }

  ngOnInit() {
    console.log(this.userTemp);
    this.user = {
      name:  this.userTemp.photoURL == null?  this.userTemp.email:this.userTemp.displayName,//"Usuario Prueba",
      photoUrl: this.userTemp.photoURL == null? "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png":this.userTemp.photoURL 
    }
  }

}
