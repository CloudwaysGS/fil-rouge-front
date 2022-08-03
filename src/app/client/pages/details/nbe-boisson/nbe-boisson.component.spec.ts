import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbeBoissonComponent } from './nbe-boisson.component';

describe('NbeBoissonComponent', () => {
  let component: NbeBoissonComponent;
  let fixture: ComponentFixture<NbeBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbeBoissonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbeBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
