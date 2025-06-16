import { Component } from '@angular/core';
import {Home} from './home/home';
import {TeachingPhilosophy} from './teaching-philosophy/teaching-philosophy';
import {TechExperiment} from './tech-experiment/tech-experiment';
import {Testimonals} from './testimonals/testimonals';
import {AboutMe} from './about-me/about-me';
import {CourseDevelopment} from './course-development/course-development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    Home,
    TeachingPhilosophy,
    TechExperiment,
    Testimonals,
    AboutMe,
    CourseDevelopment
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

