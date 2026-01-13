import { Component, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { dummyTasks as Dummy_Task } from '../dummy-tasks';
import { User } from '../user/user';
@Component({
  selector: 'app-users',
  imports: [User],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  allUsers = DUMMY_USERS;
  allTasks = Dummy_Task;

  receivedUserId : string|null='emp';

  handleInputFromChild(event : string){
    this.receivedUserId = event;
  }



}
