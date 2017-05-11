import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrarComponent } from './user-registrar.component';

describe('UserRegistrarComponent', () => {
  let component: UserRegistrarComponent;
  let fixture: ComponentFixture<UserRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
