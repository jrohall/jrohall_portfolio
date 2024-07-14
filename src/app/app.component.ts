import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpComponent } from './exp/exp.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpComponent, NgbCollapseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jrohall';
}
