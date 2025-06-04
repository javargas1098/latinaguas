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

}
