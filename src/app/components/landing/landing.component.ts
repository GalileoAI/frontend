import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface Tile {
  title: string;
  subtitle: string;
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
      subtitle: 'Wybierz plan treningowy',
      icon: '/assets/tile2.png',
      link: '/mam-plan',
      button: 'Działajmy',
    },
    {
      title: 'Szukam ścieki zawodowej',
      subtitle: 'Zobacz losowy plan treningowy',
      icon: '/assets/tile1.png',
      link: '/zaskocz-mnie',
      button: 'Zaskocz mnie',
    },
  ];
}
