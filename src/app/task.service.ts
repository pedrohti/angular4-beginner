import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Array<Task> = [];

  constructor() { }

}