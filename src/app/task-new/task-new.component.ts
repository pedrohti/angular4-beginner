import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})

export class TaskNewComponent {
  tasks:Array<Task>;

  constructor(private taskService:TaskService) {
    //this.taskService.tasks.push({name: 'teste', value: 50, date_launch: '2018-11-06'})
    this.tasks = this.taskService.tasks;
  }

  task:Task = {
    name: "",
    value: 0,
    date_launch: '2018-11-06'
  };

  add() {
    let task = Object.assign({}, this.task); //copia da task
    this.tasks.push(task);
  }
}
