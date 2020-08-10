/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ThemeEngineService } from './theme-engine.service';

describe('Service: ThemeEngine', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeEngineService]
    });
  });

  it('should ...', inject([ThemeEngineService], (service: ThemeEngineService) => {
    expect(service).toBeTruthy();
  }));
});
