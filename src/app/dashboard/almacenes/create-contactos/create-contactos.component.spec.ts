import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContactosComponent } from './create-contactos.component';

describe('CreateContactosComponent', () => {
  let component: CreateContactosComponent;
  let fixture: ComponentFixture<CreateContactosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateContactosComponent]
    });
    fixture = TestBed.createComponent(CreateContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
