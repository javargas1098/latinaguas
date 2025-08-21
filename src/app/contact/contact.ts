import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

   acceptedTerms = false;

  sendEmail(event: Event) {
    event.preventDefault();

    emailjs.sendForm(
      'service_mea8q56',   // Service ID
      'template_aji114j',  // Template ID
      event.target as HTMLFormElement,
      'LqLH7mWLLiKWQPIYV'  // Public Key
    )
    .then((result: EmailJSResponseStatus) => {
      alert('✅ Mensaje enviado con éxito');
      (event.target as HTMLFormElement).reset(); // limpiar form
      this.acceptedTerms = false; // reset checkbox
    }, (error: any) => { // 👈 tipo explícito
      alert('❌ Error al enviar el mensaje: ' + JSON.stringify(error));
    });
  }
}