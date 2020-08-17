import { Component, OnInit, Input } from '@angular/core';
import * as metasJson from '../../data/metas.json';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements OnInit {
  public metas = metasJson;
  private content;

  @Input() metasExibir;

  constructor() { }

  ngOnInit(): void {
    this.content = this;
    let dogs = this.metas.default.filter((item) => {
      return this.metasExibir.includes(item.id);
    })
    this.metas = dogs;
    // this.metas.default = this.metas.default.filter(this.filtro);
  }

  filtro(value) {
    return this.metasExibir.includes(value.id); 
  }
}
