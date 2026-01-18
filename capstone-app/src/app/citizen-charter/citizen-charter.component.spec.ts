import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenCharterComponent } from './citizen-charter.component';

describe('CitizenCharterComponent', () => {
  let component: CitizenCharterComponent;
  let fixture: ComponentFixture<CitizenCharterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenCharterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
