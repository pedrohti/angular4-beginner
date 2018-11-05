import { Directive, ElementRef, HostListener, Input } from '@angular/core'; //HostListener, Input anotações
import { Task } from './task';

@Directive({ //decorator
  selector: '[myTask]' //serve para registrar no template ou nos componentes
})
export class MyTaskDirective {

  private _myTask:Task; //instancia de Task
  
  constructor(private el:ElementRef) {
    this.el.nativeElement.innerHTML += 'Conteudo Inserido'
   }

   get myTask() { return this._myTask };
   
   @Input()
   set myTask(value:Task) { 
     this._myTask = value
     this.changeColorTask();
    };
   
   

   @HostListener('click')
   onclick() {
     alert(this.myTask)
   }

   changeColorTask(){
    //[ngClass]="{'item-green':item.value>5, 'item-red':item.value<5}"
    this.el.nativeElement.style.color = this.myTask.value > 5 ? 'green' : 'red';
   }



   /* @Input() //recebe o valor do form e joga na variavel myTask
   myTask:string;

   @HostListener('click')
   onclick() {
     alert(this.myTask)
   } */

}
//(private el:ElementRef) <-- injeção de independencia
