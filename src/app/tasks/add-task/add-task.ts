import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { TaskStructure } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  today = new Date().toISOString().split('T')[0];

  // method 1
  @Output() closeAddTask = new EventEmitter<void>();
  // @Output() createdTask = new EventEmitter<TaskStructure>();

  enteredTitle = '';
  enteredSummary = '';
  // enteredDate ='';
  enteredDate = this.today;


  @Input() addTaskUserId !:string;

  private tasksService = inject(TasksService);

  onCancel(){
    this.closeAddTask.emit();
  }

  submit2(form: NgForm){
    if (form.invalid) {
      form.form.markAllAsTouched(); // show errors
      return;
    }
    // valid → submit
    const newTask: TaskStructure = {
      id: '',      // or any ID logic
      userId: '',        // or pass from parent
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    };
    //method 1
    // this.createdTask.emit(newTask);

    // method 2 with service
    this.tasksService.addTask(newTask,this.addTaskUserId);

    this.closeAddTask.emit();
  }

  // submit(formContent: NgForm) {
  //   const val = formContent.value;

  //   const newTask: TaskStructure = {
  //     id: crypto.randomUUID(),      // or any ID logic
  //     userId: val['userId'],        // or pass from parent
  //     title: val['title'],
  //     summary: val['summary'],
  //     dueDate: val['dueDate'],
  //   };
  //   console.log(newTask);

  //   formContent.reset();
  //   this.createdTask.emit(newTask);
  // }

}
