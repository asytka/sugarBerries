import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairDeletionComponent } from './hair-deletion.component';

describe('HairDeletionComponent', () => {
  let component: HairDeletionComponent;
  let fixture: ComponentFixture<HairDeletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HairDeletionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HairDeletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
