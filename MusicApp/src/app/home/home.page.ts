import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  currentSong: string ='';
  isPlaybackBarOpen: boolean = false;
  isSidebarOpen: boolean = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigate(page: string): void {
    switch (page) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'search':
        this.router.navigate(['/search']);
        break;
      case 'library':
        this.router.navigate(['/biblioteca']);
        break;
      default:
        break;
    }
    console.log('Navegar a:', page);
  }

  openPlaybackBar(song: string): void {
    this.currentSong = song;
    this.isPlaybackBarOpen = true;
  }

  openPlaybackBarFull(): void {
    // Implementa la lógica para abrir la barra de reproducción completa
    console.log('Abrir barra de reproducción completa');
  }

  togglePlayback(): void {
    // Implementa la lógica para pausar o reanudar la reproducción
    console.log('Toggle reproducción');
  }

}
