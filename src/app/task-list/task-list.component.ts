import { TaskService } from './../task.service';
import { Component } from '@angular/core';
import { Task } from '../task';

@Component({ //decorator faz a class ser um component
  selector: 'app-task-list', //tag do componente
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:Array<Task>;

  constructor(private taskService:TaskService) {
    //this.taskService.tasks.push({name: 'teste', value: 50, date_launch: '2018-11-06'})
    this.tasks = this.taskService.tasks;
  }

}
