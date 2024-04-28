import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndosphereComponent } from './endosphere.component';

describe('EndosphereComponent', () => {
  let component: EndosphereComponent;
  let fixture: ComponentFixture<EndosphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndosphereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndosphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
