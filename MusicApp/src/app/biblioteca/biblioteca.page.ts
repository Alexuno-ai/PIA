import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor() { }
  playlistName: string = '';

  createPlaylist(): void {
    if (this.playlistName.trim() !== '') {
      
      console.log('Crear lista de reproducción:', this.playlistName);
      
    }
  }
  ngOnInit() {
  }

}
