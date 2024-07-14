import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../global/nav-bar/nav-bar.component';

@Component({
  selector: 'app-yap',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './yap.component.html',
  styleUrls: ['./yap.component.css']
})
export class YapComponent {

  submitForm() {
    /*
    if (this.contactForm.valid) {
      this.contactService.PostMessage(this.contactForm.value).subscribe(response => {
        console.log('Email sent successfully', response);
        window.location.reload();
      }, error => {
        console.error('Error sending email', error);
      });
    }
    */
  }
}
