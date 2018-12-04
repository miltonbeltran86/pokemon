import { TestBed } from '@angular/core/testing';

import { PokeSearchService } from './poke-search.service';

describe('PokeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeSearchService = TestBed.get(PokeSearchService);
    expect(service).toBeTruthy();
  });
});
