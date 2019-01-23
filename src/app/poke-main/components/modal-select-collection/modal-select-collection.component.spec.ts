import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectCollectionComponent } from './modal-select-collection.component';

describe('ModalSelectCollectionComponent', () => {
  let component: ModalSelectCollectionComponent;
  let fixture: ComponentFixture<ModalSelectCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSelectCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
