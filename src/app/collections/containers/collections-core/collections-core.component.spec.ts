import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsCoreComponent } from './collections-core.component';

describe('CollectionsCoreComponent', () => {
  let component: CollectionsCoreComponent;
  let fixture: ComponentFixture<CollectionsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
