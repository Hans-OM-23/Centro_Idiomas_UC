import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfertaIdiomas } from './oferta-idiomas';

describe('OfertaIdiomas', () => {
  let component: OfertaIdiomas;
  let fixture: ComponentFixture<OfertaIdiomas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertaIdiomas],
    }).compileComponents();

    fixture = TestBed.createComponent(OfertaIdiomas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
