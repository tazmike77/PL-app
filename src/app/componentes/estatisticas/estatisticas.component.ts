import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {


  totalF = 0;
  totalTestes = 0;
  totalTestesOK = 0;
  totalTestesNOK = 0;

  totalsubTestes = 0;
  totalsubTestesOK = 0;
  totalsubTestesNOK = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
