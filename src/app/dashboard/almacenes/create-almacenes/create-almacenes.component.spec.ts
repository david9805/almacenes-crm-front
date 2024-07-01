import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlmacenesComponent } from './create-almacenes.component';

describe('CreateAlmacenesComponent', () => {
  let component: CreateAlmacenesComponent;
  let fixture: ComponentFixture<CreateAlmacenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAlmacenesComponent]
    });
    fixture = TestBed.createComponent(CreateAlmacenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
