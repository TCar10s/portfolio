import { Component } from '@angular/core';
import { Developer } from './interfaces/card.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 'null';

  developer: Developer = {
    name: 'Carlos Lobo',
    role: 'Front-end developer',
    email: 'cslobosilva@gmail.com',
    phone: '(+57) 3143814357',
    image: './assets/images/carlos_lobo.jpg',
    description:
      'I am a Front-end developer with a passion for creating beautiful and functional web applications. I have a strong background in web development and have worked with a variety of technologies, including HTML, CSS, JavaScript, Angular, and Node.js.',
  };

  skills = [
    {
      name: 'Angular',
      level: '85%',
    },
    {
      name: 'JavaScript',
      level: '80%',
    },
    {
      name: 'TypeScript',
      level: '70%',
    },
    {
      name: 'HTML',
      level: '100%',
    },
    {
      name: 'CSS',
      level: '80%',
    },
    {
      name: 'RxJS',
      level: '70%',
    },
  ];

  data = [
    {
      city: 'Helsinki',
      country: 'Finland',
    },
    {
      city: 'New York',
      country: 'USA',
    },
    {
      city: 'London',
      country: 'UK',
    }
  ]

  changeList({ city, country }: { city: string, country: string }) {
    this.value = `${city}, ${country}`;
  }
}
