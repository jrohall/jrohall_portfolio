import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbComponent } from './ab.component';

describe('AbComponent', () => {
  let component: AbComponent;
  let fixture: ComponentFixture<AbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
