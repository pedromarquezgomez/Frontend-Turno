import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalJornadaComponent } from './create-modal-jornada.component';

describe('CreateModalJornadaComponent', () => {
  let component: CreateModalJornadaComponent;
  let fixture: ComponentFixture<CreateModalJornadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModalJornadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
