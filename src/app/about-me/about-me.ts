import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css'
})
export class AboutMe {

  openSlideshow() {
    const win = window.open('', '_blank', 'width=800,height=600');
    if (!win) return;

    win.document.write(`
    <html>
    <head>
      <title>Photo Slideshow</title>
      <style>
        body {
          margin: 0;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        img {
          max-width: 100%;
          max-height: 100%;
          transition: opacity 0.5s ease-in-out;
        }
      </style>
    </head>
    <body>
      <img id="slide" src="../../assets/images/1.jpg">
      <script>
        const images = [
          "../../assets/images/1.jpg",
          "../../assets/images/2.jpg",
          "../../assets/images/3.jpg",
          "../../assets/images/4.jpg",
          "../../assets/images/5.jpg",
          "../../assets/images/6.jpg",
          "../../assets/images/7.jpg",
          "../../assets/images/8.jpg",
          "../../assets/images/9.jpg",

        ];
        let index = 0;
        const slide = document.getElementById("slide");
        setInterval(() => {
          index = (index + 1) % images.length;
          slide.style.opacity = 0;
          setTimeout(() => {
            slide.src = images[index];
            slide.style.opacity = 1;
          }, 300);
        }, 3000);
      </script>
    </body>
    </html>
  `);
  }

}
