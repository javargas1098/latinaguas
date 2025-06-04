import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
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
