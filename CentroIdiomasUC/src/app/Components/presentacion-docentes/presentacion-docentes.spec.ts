import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentacionDocentes } from './presentacion-docentes';

describe('PresentacionDocentes', () => {
  let component: PresentacionDocentes;
  let fixture: ComponentFixture<PresentacionDocentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentacionDocentes],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentacionDocentes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
