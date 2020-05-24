import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOperarioComponent } from './upload-operario.component';

describe('UploadOperarioComponent', () => {
  let component: UploadOperarioComponent;
  let fixture: ComponentFixture<UploadOperarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadOperarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOperarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
