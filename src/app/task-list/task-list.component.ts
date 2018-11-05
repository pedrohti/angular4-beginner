import { getLocaleDateFormat } from '@angular/common';
import { Component} from '@angular/core';
import { Task } from '../task';

@Component({ //decorator faz a class ser um component
  selector: 'app-task-list', //tag do componente
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [];
  task:Task = { //task:Task <-- criando instancia da class Task
    name: "",
    value: 0,
    date_launch: "2018-11-05"
  }; 

  add(){
    let copiaTask = Object.assign({}, this.task) //cria uma de Task para que nao fique um objeto só e sim objetos unicos
    this.tasks.push(copiaTask);
  }

}
