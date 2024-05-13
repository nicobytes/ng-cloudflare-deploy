import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCloudflareDeployComponent } from './ng-cloudflare-deploy.component';

describe('NgCloudflareDeployComponent', () => {
  let component: NgCloudflareDeployComponent;
  let fixture: ComponentFixture<NgCloudflareDeployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCloudflareDeployComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgCloudflareDeployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
