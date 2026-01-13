import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { NgClass } from '@angular/common';

import { User} from './user2.model'
import { Card } from "../shared/card/card";
// import {type User} from './user2.model'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
let selectedUser = DUMMY_USERS[randomIndex];

// type User = { id: string; name: string; avatar: string }
// interface User { 
//   id: string; name: string; avatar: string 
// }

@Component({
  selector: 'app-user2',
  imports: [NgClass, Card],
  templateUrl: './user2.html',
  styleUrl: './user2.css',
})
export class User2 {
  // ngOnInit(){
  //   this.outputUserId.emit(selectedUser.id);
  // }

  get imagePath() {
    return '/users/' + this.user.avatar;
  }


  @Input({required:true}) user !: User;
  //or
  // user = input.required<{ id: string; name: string; avatar: string }>();  //imp is here we dont need ! as it got initial value as = is present. here this user is a signal
  @Input() isSelected = false; //--------- new property 

  @Output() outputUserId = new EventEmitter<string>();

  onSelectUser() {
    this.outputUserId.emit(this.user.id);
  }

}
