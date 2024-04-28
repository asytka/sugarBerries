import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooRemovalComponent } from './tattoo-removal.component';

describe('TattooRemovalComponent', () => {
  let component: TattooRemovalComponent;
  let fixture: ComponentFixture<TattooRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattooRemovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TattooRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
