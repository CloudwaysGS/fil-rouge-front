import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBoissonComponent } from './all-boisson.component';

describe('AllBoissonComponent', () => {
  let component: AllBoissonComponent;
  let fixture: ComponentFixture<AllBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBoissonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
