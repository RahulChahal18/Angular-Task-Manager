import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { dummyTasks as Dummy_Task } from '../dummy-tasks';
import { User2 } from "../user2/user2";
import { Tasks } from "../tasks/tasks";

@Component({
  selector: 'app-users2',
  imports: [User2, Tasks],
  templateUrl: './users2.html',
  styleUrl: './users2.css',
})
export class Users2 {
  allUsers = DUMMY_USERS ;
  allTasks = Dummy_Task ;

  // randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // selectedUser = DUMMY_USERS[this.randomIndex];
  // selectedUser = DUMMY_USERS[0];
  // receivedUserId!: string;
  //receivedUserId ?: string //= this.selectedUser.id;
  receivedUserId : string = 'u1';

  handleInputFromChild(event : string){
    this.receivedUserId = event;
  }

  get activeUser() {
    return this.allUsers.find(
      user => user.id === this.receivedUserId
    );
  }


  // receivedUserId!: string;

  // onUserSelected(userId: string) {
  //   this.receivedUserId = userId;
  // }

}
