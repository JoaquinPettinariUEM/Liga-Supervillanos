import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscribirSuperjefe } from './escribir-superjefe';

describe('EscribirSuperjefe', () => {
  let component: EscribirSuperjefe;
  let fixture: ComponentFixture<EscribirSuperjefe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscribirSuperjefe],
    }).compileComponents();

    fixture = TestBed.createComponent(EscribirSuperjefe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
