import { Component } from '@angular/core';
import { NavBarComponent } from '../global/nav-bar/nav-bar.component';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.css'
})
export class DevComponent {

}
