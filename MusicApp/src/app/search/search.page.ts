import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchText: string = '';

  search(): void {
    // Aquí puedes implementar la lógica de búsqueda utilizando el valor de 'searchText'
    console.log('Realizando búsqueda:', this.searchText);
    // Resto de la lógica de búsqueda...
  }
}
