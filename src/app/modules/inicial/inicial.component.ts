import { Component, OnInit } from '@angular/core';
import * as metasJson from '../../data/metas.json';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  public metas = metasJson;

  constructor() { }

  ngOnInit(): void {
  }

}
