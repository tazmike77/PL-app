import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.http.get('http://localhost:8000/estatisticas').subscribe( res => {

    let dados = (JSON.parse(res.toString()));

    console.log(dados)
     this.totalF = dados['totalFiles'];
     this.totalTestes = dados['totalTests'];
     this.totalTestesOK = dados['totalOkTests'];
     this.totalTestesNOK = dados['totalNotOktests'];
     this.totalsubTestes = dados['totalSubtests'];
     this.totalsubTestesOK = dados['totalOkSubtests'];
     this.totalsubTestesNOK = dados['totalNotOkSubtests'];
  });

  }

  clicando(){
    this.router.navigate(["/"]).then(result=>{window.location.href = 'http://127.0.0.1:8080/graficos/ichartTable.html';});
  }
  clicando2(){
    this.router.navigate(["/"]).then(result=>{window.location.href = 'http://127.0.0.1:8080/graficos/treetable.html';});
  }


}
