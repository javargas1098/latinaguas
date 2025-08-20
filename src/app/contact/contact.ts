import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

   acceptedTerms = false;

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm(
      'service_mea8q56',   // Service ID
      'template_xxxxx',    // Template ID
      e.target as HTMLFormElement,
      'public_xxxxx'       // Public Key
    ).then((result: EmailJSResponseStatus) => {
      alert('Mensaje enviado correctamente');
    }, (error) => {
      console.error(error.text);
      alert('Hubo un error al enviar el mensaje');
    });
  }

}
