import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselsRemovalComponent } from './vessels-removal.component';

describe('VesselsRemovalComponent', () => {
  let component: VesselsRemovalComponent;
  let fixture: ComponentFixture<VesselsRemovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VesselsRemovalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VesselsRemovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
