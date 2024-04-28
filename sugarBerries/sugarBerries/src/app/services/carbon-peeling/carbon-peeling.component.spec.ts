import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonPeelingComponent } from './carbon-peeling.component';

describe('CarbonPeelingComponent', () => {
  let component: CarbonPeelingComponent;
  let fixture: ComponentFixture<CarbonPeelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarbonPeelingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarbonPeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
