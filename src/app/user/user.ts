import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
let selectedUser = DUMMY_USERS[randomIndex];
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(){
    // console.log(selectedUser.id);
    // console.log(this.outputUserId);
    // this.outputUserId.emit(selectedUser.id);
  }
  ngOnInit(){
    this.outputUserId.emit(selectedUser.id);
  }
  
  // imagePath = '/users/' + this.selectedUser.avatar;

  get imagePath() {
    return '/users/' + this.user?.avatar;
  }

  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  @Input() user: { id:  string ;name: string;avatar: string;} | undefined;
  @Output() outputUserId = new EventEmitter<string>();

  onSelectUser(userId: string) {
    this.outputUserId.emit(userId);
    selectedUser = DUMMY_USERS.find(user => user.id == userId)!;
  }
  get currentUser(){
    return selectedUser;
  }
}
