export interface Developer {
  name: string;
  description: string;
  image: string;
  email: string;
  phone: string;
  role: string;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Experience {
  company: string;
  position: string;
  time: string;
  description: string;
  logo: string;
}

export interface Hobbie {
  name: string;
  description: string;
  image: string;
}
