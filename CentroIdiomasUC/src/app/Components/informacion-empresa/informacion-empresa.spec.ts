import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionEmpresa } from './informacion-empresa';

describe('InformacionEmpresa', () => {
  let component: InformacionEmpresa;
  let fixture: ComponentFixture<InformacionEmpresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionEmpresa],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionEmpresa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
