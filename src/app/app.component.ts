import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postText = [
    'Hallo',
    'Hola amigos',
    'How are you?',
    'Miau',
    'Willst du spielen?',
    'Wie heiß du?',
    'miaauuuuuu',
    'ich habe hunger',
  ];
  catsPics = [
    '/assets/cats/1.png',
    '/assets/cats/2.jpg',
    '/assets/cats/3.jpg',
    '/assets/cats/4.jpg',
    '/assets/cats/5.jpg',
    '/assets/cats/6.jpg',
    '/assets/cats/7.jpg',
    '/assets/cats/8.jpg',
  ];

  buttonClicked() {
    alert('hola');
  }
}
