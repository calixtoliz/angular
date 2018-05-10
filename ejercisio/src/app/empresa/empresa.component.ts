import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
sector="industrial";
sector1="alimentos";
sector3="automovil";
sector4="fabricacion";
  constructor() { }

  ngOnInit() {
  }

}
