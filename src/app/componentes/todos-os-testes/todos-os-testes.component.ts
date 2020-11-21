import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

//
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
// const ELEMENT_DATA: Tipotestes[] = [
//   {id: '123', name: 'teste1.t', date: '21/11/2020', ok_tests: 12, nok_tests: 10, ok_subtests: 15, nok_subtests: 9},

// ];

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-todos-os-testes',
  templateUrl: './todos-os-testes.component.html',
  styleUrls: ['./todos-os-testes.component.css']
})
export class TodosOsTestesComponent implements OnInit {

  // resultado = [{
  //   id: '123',
  //   name: 'test',
  //   date: '21-11-2020',
  //   ok_tests: '3',
  //   nok_tests: '4',
  //   ok_subtests: '12',
  //   nok_subtets: '10'


  // }];

  // displayedColumns: string[] = [
  //   'id',
  //   'name',
  //   'date',
  //   'ok_tests',
  //   'nok_tests',
  //   'ok_subtests',
  //   'nok_subtestes',

  // ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  constructor( private http: HttpClient, private router: Router) { }




  ngOnInit(){


  }

  getdata(){
    this.http.get('http://localhost:8000/hist-Tests').subscribe((res) => console.log(res));
  }

}
