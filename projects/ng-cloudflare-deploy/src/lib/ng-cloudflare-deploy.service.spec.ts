import { TestBed } from '@angular/core/testing';

import { NgCloudflareDeployService } from './ng-cloudflare-deploy.service';

describe('NgCloudflareDeployService', () => {
  let service: NgCloudflareDeployService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCloudflareDeployService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
