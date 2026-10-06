import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionEstudiantes } from './informacion-estudiantes';

describe('InformacionEstudiantes', () => {
  let component: InformacionEstudiantes;
  let fixture: ComponentFixture<InformacionEstudiantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionEstudiantes],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionEstudiantes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
