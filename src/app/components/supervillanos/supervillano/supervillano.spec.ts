import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupervillanoComponent } from './supervillano';

describe('Supervillano', () => {
  let component: SupervillanoComponent;
  let fixture: ComponentFixture<SupervillanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupervillanoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SupervillanoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
