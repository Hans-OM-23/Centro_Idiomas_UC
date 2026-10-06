import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IdiomaOferta {
  id: string;
  nombre: string;
  nombreNativo: string;
  lema: string;
  imagen: string;
  badge: string;
  colorAccent: string;
  programas: string[];
  niveles: string[];
  modalidades: string[];
  duracionPorNivel: string;
  certificacion: string;
  descripcion: string;
  caracteristicas: string[];
}

@Component({
  imports: [CommonModule],
  selector: 'app-oferta-idiomas',
  styleUrl: './oferta-idiomas.css',
  templateUrl: './oferta-idiomas.html',
})
export class OfertaIdiomas {
  readonly selectedIdioma = signal<IdiomaOferta | null>(null);

  readonly listaIdiomas: IdiomaOferta[] = [
    {
      id: 'ingles',
      nombre: 'Inglés',
      nombreNativo: 'English',
      lema: 'El idioma global indispensable para el éxito profesional, académico y empresarial.',
      imagen: 'images/ingles.jpg',
      badge: 'Mayor Demanda',
      colorAccent: '#1e40af',
      programas: [
        'Inglés General',
        'Inglés de Negocios (Business English)',
        'Preparación para exámenes internacionales (TOEFL / IELTS / Cambridge)'
      ],
      niveles: ['Básico (A1-A2)', 'Intermedio (B1-B2)', 'Avanzado (C1)'],
      modalidades: ['Presencial', 'Virtual Síncrono', 'Híbrido'],
      duracionPorNivel: '4 meses por nivel',
      certificacion: 'Acreditación TOEFL / IELTS / Cambridge English',
      descripcion: 'Domina las cuatro habilidades comunicativas (speaking, listening, reading, writing) con estándares internacionales y metodología inmersiva.',
      caracteristicas: [
        'Clubs de conversación semanales con docentes nativos',
        'Simulacros periódicos tipo TOEFL e IELTS sin costo adicional',
        'Acceso a biblioteca digital de Oxford University Press'
      ]
    },
    {
      id: 'frances',
      nombre: 'Francés',
      nombreNativo: 'Français',
      lema: 'La lengua de la diplomacia, la investigación científica y la proyección europea.',
      imagen: 'images/frances.jpg',
      badge: 'Proyección Académica',
      colorAccent: '#0f766e',
      programas: [
        'Francés General',
        'Preparación DELF/DALF'
      ],
      niveles: ['A1', 'A2', 'B1', 'B2'],
      modalidades: ['Presencial', 'Virtual'],
      duracionPorNivel: '4 meses por nivel',
      certificacion: 'Diploma oficial DELF / DALF (Ministerio de Educación de Francia)',
      descripcion: 'Enfoque comunicativo y cultural que te prepara para oportunidades de posgrado, becas internacionales y residencias académicas.',
      caracteristicas: [
        'Preparación específica para exámenes oficiales DELF A1 a B2',
        'Talleres de pronunciación, fonética y expresión escrita',
        'Eventos de inmersión cultural francófona y cine-debate'
      ]
    },
    {
      id: 'portugues',
      nombre: 'Portugués',
      nombreNativo: 'Português',
      lema: 'Abre las puertas al gigante sudamericano y expande tu red de negocios en el Mercosur.',
      imagen: 'images/portugues.jpg',
      badge: 'Mercado Regional',
      colorAccent: '#15803d',
      programas: [
        'Portugués Interactivo',
        'Preparación CELPE-Bras'
      ],
      niveles: ['Básico', 'Intermedio', 'Avanzado'],
      modalidades: ['Virtual Síncrono'],
      duracionPorNivel: '3 meses por nivel',
      certificacion: 'Certificación oficial CELPE-Bras (MEC Brasil)',
      descripcion: 'Aprende con velocidad y solidez gracias a la cercanía lingüística, perfeccionando gramática, fluidez conversacional y giros idiomáticos.',
      caracteristicas: [
        'Clases 100% en vivo con interacción continua',
        'Módulos de conversación situacional y negocios en Brasil',
        'Entrenamiento con pruebas reales del CELPE-Bras'
      ]
    },
    {
      id: 'italiano',
      nombre: 'Italiano',
      nombreNativo: 'Italiano',
      lema: 'Explora el arte, la gastronomía, el diseño y la rica tradición cultural de Italia.',
      imagen: 'images/italiano.jpg',
      badge: 'Cultura & Arte',
      colorAccent: '#b45309',
      programas: [
        'Italiano Culinario, Turístico y Cultural'
      ],
      niveles: ['A1', 'A2', 'B1', 'B2'],
      modalidades: ['Virtual Síncrono'],
      duracionPorNivel: '3 meses por nivel',
      certificacion: 'Preparación para certificaciones oficiales CILS / CELI',
      descripcion: 'Una experiencia de aprendizaje apasionante con vocabulario técnico para turismo, gastronomía, patrimonio artístico y conversación diaria.',
      caracteristicas: [
        'Sesiones interactivas con énfasis en cultura y turismo italiano',
        'Material multimedia exclusivo de la Sociedad Dante Alighieri',
        'Práctica continua de dicción, entonación y comprensión auditiva'
      ]
    }
  ];

  seleccionarIdioma(idioma: IdiomaOferta): void {
    this.selectedIdioma.set(idioma);
  }

  cerrarModal(): void {
    this.selectedIdioma.set(null);
  }
}
