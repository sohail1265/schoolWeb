import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandenceComponent } from './attandence.component';

describe('AttandenceComponent', () => {
  let component: AttandenceComponent;
  let fixture: ComponentFixture<AttandenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttandenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
