import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
taller="dibujo";
taller2="musica";
taller3="danza";
taller4="escultura";
taller5="poesia y escritura";
  constructor() { }

  ngOnInit() {
  }

}
