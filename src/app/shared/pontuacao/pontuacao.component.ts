import { Component, OnInit } from '@angular/core';
import * as metasJson from '../../data/pontuacao.json';

@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.scss']
})
export class PontuacaoComponent implements OnInit {
  public pontuacao = metasJson;

  constructor() { }

  ngOnInit(): void {
  }

  definePontoCss(item){
    var retorno = "ponto-vermelho";

    if (item.pontos == item.totalPontos)
      retorno = "ponto-verde"
    else if (item.pontos > 0)
      retorno = "ponto-cinza"
    
    return retorno;
  }
}
