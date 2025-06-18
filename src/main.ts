import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import AOS from 'aos';


//Waiting for the DOM to be ready before loading AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
});




bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
