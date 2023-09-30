import { Component } from '@angular/core';

interface Tile {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  tiles: Tile[] = [
    {
      title: 'Mam plan',
      subtitle: 'Wybierz plan treningowy',
      icon: 'directions_run',
      link: '/mam-plan',
    },
    {
      title: 'Zaskocz mnie',
      subtitle: 'Zobacz losowy plan treningowy',
      icon: 'casino',
      link: '/zaskocz-mnie',
    },
  ];
}
