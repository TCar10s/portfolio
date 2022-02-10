import { Component } from '@angular/core';
import { Developer, Experience, Hobbie } from './interfaces/card.interface';

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
    },
  ];

  experiences: Experience[] = [
    {
      company: 'SAP',
      position: 'Front-end developer',
      time: 'November 2020 - Present',
      description:
        'Development of single page applications (SPAs) using Angular and implementing best practices.',
      logo: './assets/images/wposs.jpg',
    },
  ];

  hobbies: Hobbie[] = [
    {
      name: 'Coding',
      description: 'I love to code and learn new technologies.',
      image: './assets/images/coding.jpeg',
    },
    {
      name: 'Chess',
      description: 'I love playing chess and learning new techniques.',
      image: './assets/images/chess.jpeg',
    },
    {
      name: 'Rubik',
      description: 'I love playing Rubik\'s cube and learning new techniques.',
      image: './assets/images/rubik.jpeg',
    },
    {
      name: 'Gaming',
      description: 'I love playing video games and learning new techniques.',
      image: './assets/images/gaming.jpg',
    }
  ];
}
