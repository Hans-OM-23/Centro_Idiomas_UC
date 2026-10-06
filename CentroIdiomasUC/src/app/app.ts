import { Component, signal } from '@angular/core';
import { InformacionEmpresa } from './Components/informacion-empresa/informacion-empresa';
import { InformacionEstudiantes } from './Components/informacion-estudiantes/informacion-estudiantes';
import { OfertaIdiomas } from './Components/oferta-idiomas/oferta-idiomas';
import { PresentacionDocentes } from './Components/presentacion-docentes/presentacion-docentes';

@Component({
  imports: [InformacionEmpresa, InformacionEstudiantes, OfertaIdiomas, PresentacionDocentes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('CentroIdiomasUC');
}
