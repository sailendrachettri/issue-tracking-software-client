import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminSidebarComponent } from './system-admin-sidebar.component';

describe('SystemAdminSidebarComponent', () => {
  let component: SystemAdminSidebarComponent;
  let fixture: ComponentFixture<SystemAdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemAdminSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
