import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User2 } from './user2';

describe('User2', () => {
  let component: User2;
  let fixture: ComponentFixture<User2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
