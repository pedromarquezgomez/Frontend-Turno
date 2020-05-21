import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOperarioComponent } from './lista-operario.component';

describe('ListaOperarioComponent', () => {
  let component: ListaOperarioComponent;
  let fixture: ComponentFixture<ListaOperarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOperarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
