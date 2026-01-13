import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from '../../app/dummy-tasks';
import { AddTask } from './add-task/add-task';
import { TaskStructure } from './task/task.model';

import {TasksService} from './tasks.service'
// import { DUMMY_USERS } from '../dummy-users';

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-tasks',
  imports: [Task, AddTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) tasksUserId!: string;
  @Input({required: true})  taskUserName!: string;
  
  isAddTaskVisible : boolean = false;

  //method 1
  // private tasksService = new TasksService();

  //method 2
  // private tasksService;
  // if we use private/public in parameter of constructor 
                                          // it will create the property. then we don't need the 
                                          // propeety as we defined above this constructor
  // constructor(tasksService:TasksService){ 
  //   this.tasksService = tasksService;
  // }

  //method 3
  constructor(private tasksService:TasksService){}
  
  // allUsers = DUMMY_USERS;
  allTasks = dummyTasks;
 
  get activeUserTasks() {
    // if (!this.tasksUserId) {
    //   return [];
    // }

    // return this.allTasks.filter(
    //   task => task.userId === this.tasksUserId
    // );
    return this.tasksService.getUserTasks(this.tasksUserId);
     
  }

  handleCompletedTask(event : string){
    //method 1
    // this.allTasks = this.allTasks.filter(t => t.id !=event);

    //method 2
    this.tasksService.removeTask(event);

    //method 3 dont use this method, directly call the service in the app-task component
  }

  //not using anymore in m ehtod 2 where directly service is being called in the add-task component
  handleCreatedTask(event : TaskStructure){
    // event.id ='t4';
    // event.userId = this.tasksUserId;
    // this.allTasks.push(event);
    this.tasksService.addTask(event,this.tasksUserId);
    this.isAddTaskVisible = !this.isAddTaskVisible;
  }
  handleCloseAddTask(){
    this.isAddTaskVisible = false;
  }

  // get getName(){
  //     return this.allUsers.find( u => u.id ==this.tasksUsedId)?.name;
  // }



}
