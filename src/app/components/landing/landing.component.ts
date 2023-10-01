import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Tile {
  title: string;
  icon: string;
  link: string;
  button: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  router = inject(Router);

  goToClick(url: string) {
    this.router.navigate(['/' + url]);
  }

  tiles: Tile[] = [
    {
      title: 'Mam na siebie plan',
      icon: '/assets/tile2.png',
      link: '/mam-plan',
      button: 'Zobacz propozycje',
    },
    {
      title: 'Szukam ścieżki zawodowej',
      icon: '/assets/tile1.png',
      link: '/zaskocz-mnie',
      button: 'Znajdź pomysły',
    },
  ];
}
