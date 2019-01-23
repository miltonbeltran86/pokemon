import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSimilarsComponent } from './poke-similars.component';

describe('PokeSimilarsComponent', () => {
  let component: PokeSimilarsComponent;
  let fixture: ComponentFixture<PokeSimilarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeSimilarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSimilarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
