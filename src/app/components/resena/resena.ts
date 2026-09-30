import { Component, inject, signal } from '@angular/core';
import { Resena } from '../../Interface/resena';
import { form, required, FormField } from '@angular/forms/signals';
import { ResenaService } from '../../services/resena.service';
import Swal from 'sweetalert2';

@Component({
  imports: [FormField],
  selector: 'app-resena',
  styleUrl: './resena.css',
  templateUrl: './resena.html',
})
export class ResenaComponent {

  private resenaService = inject(ResenaService)

  listaResenas:Resena[]=[]

  resenaModelo = signal<Resena>({
    nombre:'',
    comentario:''
  })

  resenaFormulario = form(this.resenaModelo, (esquema)=>{
    required(esquema.nombre, {message:'El nombre es obligatorio'})
    required(esquema.comentario, {message:'El comentario es obligatorio'})
  })

  constructor(){
    this.mostrarResenas()
  }

  guardarResena(evento:Event){
    evento.preventDefault()

    let resena = {
      'nombre': this.resenaModelo().nombre,
      'comentario': this.resenaModelo().comentario
    }

    this.resenaService.guardar(resena)

    Swal.fire({
      title: "Reseña guardada",
      text: "Tu reseña se guardó de forma exitosa",
      icon: "success"
    });

    this.limpiar()
  }

  mostrarResenas(){
    this.listaResenas=this.resenaService.mostrar()
  }

  limpiar(){
    this.resenaModelo.set({
      nombre:'',
      comentario:''
    })
  }

}