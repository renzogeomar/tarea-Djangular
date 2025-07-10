import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud');
  movies = [
    { id: 1, title: 'peli1', desc: 'Una peli muy buena', year: 2021 },
    { id: 2, title: 'peli2', desc: 'Otra peli interesante', year: 2022 }
  ];
  constructor(private api:Api) {
    this.getMovies();
  }
  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        console.log(data);
        // this.movies = data; // Descomenta si data contiene un array válido
      },
      error => {
        console.error(error);
      }
    );
  }
}
