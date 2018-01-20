import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavgiationComponent } from './navgiation.component';

describe('NavgiationComponent', () => {
  let component: NavgiationComponent;
  let fixture: ComponentFixture<NavgiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavgiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavgiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
