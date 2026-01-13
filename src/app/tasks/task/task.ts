import { Component, EventEmitter, inject, Input, Output } from '@angular/core';

import { TaskStructure } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
// interface TaskStructure{ 
//   id: string; userId: string; title: string; summary: string; dueDate: string; 
// }

@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() inputTask !: TaskStructure;

  //not needed now in method 2, we can comment it
  @Output() outputTaskCompletedId = new EventEmitter<string>();

  tasksService = inject(TasksService);

  deleteTask(){
    //method 1
    // this.outputTaskCompletedId.emit(this.inputTask.id);

    //method 2 using service here directly
    this.tasksService.removeTask(this.inputTask.id);
  }


}
