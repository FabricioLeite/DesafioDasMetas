import { Component, OnInit } from '@angular/core';
import * as metasJson from '../../data/metas.json';

@Component({
  selector: 'app-metas-liberadas',
  templateUrl: './metas-liberadas.component.html',
  styleUrls: ['./metas-liberadas.component.scss']
})
export class MetasLiberadasComponent implements OnInit {
  public metas = metasJson;

  constructor() { }

  ngOnInit(): void {
  }

}
