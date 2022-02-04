import { Component } from '@angular/core';

interface Developer {
  name: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  role: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  developer: Developer = {
    name: 'Carlos Lobo',
    role: 'Front-end developer',
    email: 'cslobosilva@gmail.com',
    phone: '(+57) 3143814357',
    image: './assets/images/carlos_lobo.jpg',
    description:
      'I am a Front-end developer with a passion for creating beautiful and functional web applications. I have a strong background in web development and have worked with a variety of technologies, including HTML, CSS, JavaScript, Angular, and Node.js.',
  };
}
