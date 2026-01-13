import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Users2 } from './users2';

describe('Users2', () => {
  let component: Users2;
  let fixture: ComponentFixture<Users2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Users2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Users2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
