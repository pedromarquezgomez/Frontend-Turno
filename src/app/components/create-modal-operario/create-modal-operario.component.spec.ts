import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalOperarioComponent } from './create-modal-operario.component';

describe('CreateModalOperarioComponent', () => {
  let component: CreateModalOperarioComponent;
  let fixture: ComponentFixture<CreateModalOperarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModalOperarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
