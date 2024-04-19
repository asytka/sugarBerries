import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SertificatesComponent } from './sertificates.component';

describe('SertificatesComponent', () => {
  let component: SertificatesComponent;
  let fixture: ComponentFixture<SertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SertificatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
