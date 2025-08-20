import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

  constructor(private translate: TranslateService) {}

  sendQuote(serviceKey: string) {
    const serviceName = this.translate.instant(serviceKey); // 
    const message = `Hola, soy [tu nombre] y estoy interesado en ${serviceName}`;
    const phone = '573108523813'; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }


}
