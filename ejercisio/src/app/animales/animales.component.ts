import { Component, OnInit } from '@angular/core';
import{Animal}from '../animales/animal'

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
nombre="pollo";
nombre1= "gato";
nombre2= "caballo";
nombre3="perro";
nombre4="tortuga";

un_objeto:Animal={
  nombre:'tortuga',
  peso:1,
  sexo:'hembra',
  esta_extinto:false,
  tamaño:'chico',
}

un_objeto1:Animal={
  nombre:'gato',
  peso: 2,
  sexo:'hembra',
  esta_extinto:false,
  tamaño:'chico',
}

un_objeto2:Animal={
nombre:'pajaro',
peso:1,
sexo:'hembra',
esta_extinto:false,
tamaño:'chico',

}




  constructor() { }

  ngOnInit() {
  }

}
