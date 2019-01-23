import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'firebase/app';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchTop = new EventEmitter<string>();
  @Output() stateAside = new EventEmitter<string>();
  @Input() user: { name: string, photoUrl: string };

  _state: string = 'open';

  userTemp : User;

  constructor(private authService: AuthService) {
    authService.profileUser().subscribe(user =>{
      this.userTemp = user;
  })
 }

  ngOnInit() {
    this.user = {
      name:  this.userTemp.photoURL == null?  this.userTemp.email:this.userTemp.displayName,//"Usuario Prueba",
      photoUrl: this.userTemp.photoURL == null? "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png":this.userTemp.photoURL
    }
  }

  search(data: string) {
    this.searchTop.emit(data);
  }

  close() {
    if (this._state == 'open') {
      this._state = 'close';
      this.stateAside.emit(this._state);
    } else {
      this._state = 'open';
      this.stateAside.emit(this._state);
    }
  }

}
