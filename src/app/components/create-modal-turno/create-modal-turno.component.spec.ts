import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalTurnoComponent } from './create-modal-turno.component';

describe('CreateModalTurnoComponent', () => {
  let component: CreateModalTurnoComponent;
  let fixture: ComponentFixture<CreateModalTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModalTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
