import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoInicialDivComponent } from './logo-inicial-div.component';

describe('LogoInicialDivComponent', () => {
  let component: LogoInicialDivComponent;
  let fixture: ComponentFixture<LogoInicialDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoInicialDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoInicialDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
