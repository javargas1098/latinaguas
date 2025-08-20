import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

selectedLang = 'es';
slides = [
    { title: 'Planta de tratamiento', image: '/assets/torre.png', description: 'Sistema compacto de tratamiento de aguas fabricado en fibra de vidrio, diseñado especialmente para atender las necesidades de pequeñas comunidades, conjuntos residenciales o instalaciones industriales que requieren una solución eficiente y confiable. Su estructura en fibra de vidrio garantiza alta resistencia a la corrosión, incluso en ambientes agresivos, además de ofrecer una larga vida útil con un mantenimiento mínimo.' },
    { title: 'Proyecto 2', image: '/assets/torre.png', description: 'Descripción proyecto 2' },
    { title: 'Proyecto 3', image: '/assets/torre.png', description: 'Descripción proyecto 3' },
  ];

 currentIndex = 0;
selectedProject: any = null;

  
constructor(private translate: TranslateService) {}
  
ngOnInit() {
      const savedLang = localStorage.getItem('lang') || 'es';
      this.selectedLang = savedLang;
      this.translate.use(savedLang);
}
  
changeLang(event: Event) {
      const target = event.target as HTMLSelectElement;
      const lang = target.value;
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
      this.selectedLang = lang;
}

scrollToAbout() {
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}

 get translates() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  goTo(i: number) {
    this.currentIndex = i % this.slides.length;
  }

  openDialog(project: any) {
    this.selectedProject = project;
  }

  closeDialog() {
    this.selectedProject = null;
  }
}
