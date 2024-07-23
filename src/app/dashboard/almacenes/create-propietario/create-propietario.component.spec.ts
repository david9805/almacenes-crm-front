import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePropietarioComponent } from './create-propietario.component';

describe('CreatePropietarioComponent', () => {
  let component: CreatePropietarioComponent;
  let fixture: ComponentFixture<CreatePropietarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePropietarioComponent]
    });
    fixture = TestBed.createComponent(CreatePropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
