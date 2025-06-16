import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-testimonals',
  imports: [CommonModule],
  templateUrl: './testimonals.html',
  styleUrl: './testimonals.css'
})
export class Testimonals {

  selectedStudent: any = null;

  selectStudent(student: any) {
    this.selectedStudent = student;
  }


  testimonials = [
    { name: 'Kirsten Arnold', image: '/assets/images/testimonials/Kirsten Arnold.jpg', quote: 'Great mix of theory and application.' },
    { name: 'Pratham Singh Benipal', image: '/assets/images/testimonials/PrathamAgain.jpg', quote: 'Built my portfolio and my skills.' },
    { name: 'Pratham Singh Benipal Again', image: '/assets/images/testimonials/Pratham.jpg', quote: 'The most productive course I’ve taken.' },
    { name: 'Sultan Alshamsi', image: '/assets/images/testimonials/Sultan Alshamsi.jpg', quote: 'Challenging, but always supportive.' },
    { name: 'Yunhao Chen', image: '/assets/images/testimonials/Yunhao.jpg', quote: 'Taught me how to think like a programmer.' },
    { name: 'Anupreet Kaur', image: '/assets/images/testimonials/AnupreetKaur.jpg', quote: 'A truly inspiring course experience.' },
    { name: 'Colin Molone', image: '/assets/images/testimonials/ColinMolone.jpg', quote: 'Clear instruction with real applications.' },
    { name: 'Apekshya Khanal', image: '/assets/images/testimonials/Apekshya Khanal.jpg', quote: 'Loved every challenge along the way.' },
    { name: 'Bashar Kherz', image: '/assets/images/testimonials/Bashar Kherz.jpg', quote: 'A practical, hands-on teaching style.' },
    { name: 'Chris Jamo', image: '/assets/images/testimonials/Chris Jamo.jpg', quote: 'Engaging lessons that stick with you.' },

    { name: 'Gio Shamoon', image: '/assets/images/testimonials/Gio Shamoon.jpg', quote: 'Encouraging and skill-focused teaching.' },
    { name: 'Gursimran Kaur', image: '/assets/images/testimonials/Gursimran Kaur.jpg', quote: 'Supportive learning at every step.' },
    { name: 'Jaspinder Kaur', image: '/assets/images/testimonials/Jaspinder Kaur.jpg', quote: 'Built my skills and my confidence.' },

    { name: 'Luca Riggi', image: '/assets/images/testimonials/Luca Riggi.jpg', quote: 'The teaching really connected for me.' },
    { name: 'Lucas', image: '/assets/images/testimonials/Lucas.jpg', quote: 'A great experience from start to finish.' },
    { name: 'Mahammad', image: '/assets/images/testimonials/Mahammad.jpg', quote: 'Explained complex topics simply.' },
    { name: 'Nili', image: '/assets/images/testimonials/Nil.jpg', quote: 'Really practical and well-paced lessons.' },
    { name: 'Pablo', image: '/assets/images/testimonials/Pablo.jpg', quote: 'Prepared me for the real world.' },
    { name: 'Rudra Mehta', image: '/assets/images/testimonials/Rudra Mehta.jpg', quote: 'I recommend this course to everyone.' },
    { name: 'Rushi Patel', image: '/assets/images/testimonials/Rushi Patel.jpg', quote: 'Coding finally made sense to me.' },
    { name: 'Sakshi Patel', image: '/assets/images/testimonials/Sakshi Patel.jpg', quote: 'Very interactive and practical lessons.' },
    { name: 'Sultan', image: '/assets/images/testimonials/Sultan.jpg', quote: 'Appreciated the clarity and pacing.' },

  ];
}
