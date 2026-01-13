 import { Injectable } from "@angular/core";
import { TaskStructure } from "./task/task.model";

 @Injectable({
    providedIn:'root'
 })
export class TasksService{
    private allTasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
            'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        }
    ]

    constructor(){
        const localTasks = localStorage.getItem('tasks');
        if(localTasks){
            this.allTasks = JSON.parse(localTasks);
        }
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.allTasks))
    }

    getUserTasks(tasksUserId : string){
        if (!tasksUserId) {
            return [];
        }

        return this.allTasks.filter(
            task => task.userId === tasksUserId
        );
    }

    addTask(event : TaskStructure, tasksUserId:string){
        event.id ='t4';
        event.userId = tasksUserId;
        this.allTasks.unshift(event);
        this.saveTasks();

    }
    removeTask(event : string){
        this.allTasks = this.allTasks.filter(t => t.id !=event);
        this.saveTasks();
    }

    
}