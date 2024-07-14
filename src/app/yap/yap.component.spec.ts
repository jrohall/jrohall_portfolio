import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YapComponent } from './yap.component';

describe('YapComponent', () => {
  let component: YapComponent;
  let fixture: ComponentFixture<YapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
