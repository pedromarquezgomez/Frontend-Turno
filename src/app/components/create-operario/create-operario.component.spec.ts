import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOperarioComponent } from './create-operario.component';

describe('CreateOperarioComponent', () => {
  let component: CreateOperarioComponent;
  let fixture: ComponentFixture<CreateOperarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOperarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
