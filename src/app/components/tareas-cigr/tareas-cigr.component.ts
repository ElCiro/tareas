import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/Models/Tarea';

@Component({
  selector: 'app-cigr-tareas-cigr',
  templateUrl: './tareas-cigr.component.html',
  styleUrls: ['./tareas-cigr.component.css']
})
export class TareasCigrComponent implements OnInit {
  listTareas: Tarea[]=[]
  nombreTarea ='';
  

  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea(){
    console.log(this.nombreTarea);
    //crear un objeto
    const tarea:Tarea={
      nombre: this.nombreTarea,
      estado:false
    }
    //Agregar un objeto
    this.listTareas.push(tarea);
    //resetear
    this.nombreTarea='';
  }
  eliminarTarea(index: number):void{
    //console.log('Se borrara' + index);
    this.listTareas.slice(index, 1);
  }
  actualizarTarea(index:number, tarea:Tarea): void{
    this.listTareas[index].estado =!tarea.estado
  }
}
