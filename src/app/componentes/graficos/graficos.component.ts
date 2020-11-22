import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css'],
})
export class GraficosComponent implements OnInit {

constructor() { }

readTextFile(file, callback) {
  const rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

ngOnInit(): void {
  const container = document.getElementById('container');
  let data = null;

  this.readTextFile('/data.json', (text) => {
    data = JSON.parse(text);
    console.log(data);
    const jsonGrid = new JSONGrid(data, container);
    jsonGrid.render();
  });
}




}
