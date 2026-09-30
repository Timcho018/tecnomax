import { Injectable } from '@angular/core';
import { Resena } from '../Interface/resena';

@Injectable()

export class ResenaService {
    private listaResenas: Resena[]=[]

    guardar(resena: Resena){
        this.listaResenas.push(resena)
    }

    mostrar(){
        return this.listaResenas
    }
}