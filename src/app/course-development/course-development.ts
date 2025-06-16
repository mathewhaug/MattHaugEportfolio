import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {SafePipePipe} from '../safe-pipe-pipe';

@Component({
  selector: 'app-course-development',
  imports: [
    NgForOf,
    SafePipePipe,
    NgIf
  ],
  templateUrl: './course-development.html',
  styleUrl: './course-development.css'
})
export class CourseDevelopment {
  selectedPdfUrl: string | null = null;
  expandedImage: string | null = null;


  courses = [
    {
      name: 'MAD 411 - Android App Development with Kotlin',
      pdfUrl: '/assets/outlines/MAD411OUTLINE.pdf'
    },
    {
      name: 'MAD 511 - Advanced Android Development',
      pdfUrl: '/assets/outlines/MAD511OUTLINE.pdf'
    },
    {
      name: 'MAD 307 - Angular',
      pdfUrl: '/assets/outlines/MAD307OUTLINE.pdf'
    },
    {
      name: 'WEB 230 - Javascript I',
      pdfUrl: '/assets/outlines/WEB230OUTLINE.pdf'
    }
  ];

  openPdf(course: any) {
    window.open(course.pdfUrl, '_blank');
  }

  closePdf() {
    this.selectedPdfUrl = null;
  }

  moduleImages = [
    '/assets/images/modules/module.jpg',
    '/assets/images/modules/module2.jpg',
    '/assets/images/modules/module3.jpg',
    '/assets/images/modules/module4.jpg'
  ];

  expandImage(img: string) {
    this.expandedImage = img;
  }
}
