import { Component } from '@angular/core';
import { NavBarComponent } from '../global/nav-bar/nav-bar.component';

@Component({
  selector: 'app-proj',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './proj.component.html',
  styleUrl: './proj.component.css'
})
export class ProjComponent {

}
