import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrrateAccountComponent } from './crrate-account.component';

describe('CrrateAccountComponent', () => {
  let component: CrrateAccountComponent;
  let fixture: ComponentFixture<CrrateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrrateAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrrateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
