import { Component } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent {
  names = ['Movi', 'Sarah', 'Luna', 'Kyle', 'Frederik', 'Gin', 'Tonic', 'Ada'];
  images = [
    '/assets/cats/8.jpg',
    '/assets/cats/7.jpg',
    '/assets/cats/6.jpg',
    '/assets/cats/5.jpg',
    '/assets/cats/4.jpg',
    '/assets/cats/3.jpg',
    '/assets/cats/2.jpg',
    '/assets/cats/1.png',
  ];
  text = [
    'spiel gerne abends',
    'liebt Tunfisch',
    'ist 5 jahre alt',
    'hat 2 schwestern',
    'jagt gerne mause',
    'miau miau',
    'schmuse katze',
    'ist 2 jahre alt',
  ];
}
