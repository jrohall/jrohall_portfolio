import { Component } from '@angular/core';
import { NavBarComponent } from '../global/nav-bar/nav-bar.component';
import { NgbAccordionBody, NgbAccordionCollapse, NgbAccordionButton, NgbAccordionConfig, NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem, NgbAccordionToggle, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exp',
  standalone: true,
  imports: [NavBarComponent, NgbAccordionBody, NgbAccordionButton, NgbAccordionItem, NgbAccordionHeader],
  templateUrl: './exp.component.html',
  styleUrl: './exp.component.css'
})
export class ExpComponent {

}
