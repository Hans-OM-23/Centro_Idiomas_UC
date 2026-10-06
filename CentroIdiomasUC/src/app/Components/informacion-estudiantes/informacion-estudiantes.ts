import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonio {
  nombre: string;
  idioma: string;
  carrera: string;
  calificacion: number;
  comentario: string;
  avatar: string;
  logro: string;
}

export interface NoticiaEvento {
  tipo: 'Noticia' | 'Evento' | 'Taller';
  fecha: string;
  titulo: string;
  descripcion: string;
  icono: string;
  lugar: string;
}

@Component({
  imports: [CommonModule],
  selector: 'app-informacion-estudiantes',
  styleUrl: './informacion-estudiantes.css',
  templateUrl: './informacion-estudiantes.html',
})
export class InformacionEstudiantes {
  // Estado reactivo para el Simulador de Matrícula (Valor Agregado)
  readonly idiomaSimulador = signal<'Inglés' | 'Francés' | 'Portugués' | 'Italiano'>('Inglés');
  readonly modalidadSimulador = signal<string>('Virtual Síncrono');
  readonly condicionSimulador = signal<'estudiante_uc' | 'pronto_pago' | 'publico_general'>('estudiante_uc');
  readonly mostrarConfirmacion = signal<boolean>(false);

  // Precios base referenciales por mes
  readonly preciosBase: Record<string, number> = {
    'Inglés': 240,
    'Francés': 230,
    'Portugués': 210,
    'Italiano': 210,
  };

  // Cálculo reactivo de inversión con descuento
  readonly calculoCotizacion = computed(() => {
    const idioma = this.idiomaSimulador();
    const modalidad = this.modalidadSimulador();
    const condicion = this.condicionSimulador();

    const base = this.preciosBase[idioma] || 220;
    let porcentajeDescuento = 0;
    let nombreCondicion = 'Público General';

    if (condicion === 'estudiante_uc') {
      porcentajeDescuento = 0.20; // 20% dscto
      nombreCondicion = 'Comunidad Continental (Estudiantes / Egresados)';
    } else if (condicion === 'pronto_pago') {
      porcentajeDescuento = 0.25; // 25% dscto
      nombreCondicion = 'Matrícula Anticipada (Pronto Pago)';
    } else {
      porcentajeDescuento = 0;
      nombreCondicion = 'Tarifa Regular (Público General)';
    }

    const montoDescuento = Math.round(base * porcentajeDescuento);
    const cuotaFinal = base - montoDescuento;

    const duracionMeses = (idioma === 'Inglés' || idioma === 'Francés') ? 4 : 3;

    return {
      idioma,
      modalidad,
      condicionTexto: nombreCondicion,
      precioOriginal: base,
      porcentajeDescuento: Math.round(porcentajeDescuento * 100),
      montoDescuento,
      cuotaFinal,
      duracionMeses,
      inversionTotalNivel: cuotaFinal * duracionMeses,
    };
  });

  // Modalidades según idioma para el simulador
  modalidadesPorIdioma(idioma: string): string[] {
    switch (idioma) {
      case 'Inglés':
        return ['Presencial', 'Virtual Síncrono', 'Híbrido'];
      case 'Francés':
        return ['Presencial', 'Virtual'];
      case 'Portugués':
      case 'Italiano':
        return ['Virtual Síncrono'];
      default:
        return ['Virtual Síncrono'];
    }
  }

  readonly listaIdiomasSimulador: ('Inglés' | 'Francés' | 'Portugués' | 'Italiano')[] = [
    'Inglés',
    'Francés',
    'Portugués',
    'Italiano'
  ];

  cambiarIdiomaSimulador(idioma: string): void {
    if (idioma === 'Inglés' || idioma === 'Francés' || idioma === 'Portugués' || idioma === 'Italiano') {
      this.idiomaSimulador.set(idioma);
      const modalidades = this.modalidadesPorIdioma(idioma);
      if (!modalidades.includes(this.modalidadSimulador())) {
        this.modalidadSimulador.set(modalidades[0]);
      }
    }
  }

  cambiarModalidadSimulador(mod: string): void {
    this.modalidadSimulador.set(mod);
  }

  cambiarCondicionSimulador(cond: 'estudiante_uc' | 'pronto_pago' | 'publico_general'): void {
    this.condicionSimulador.set(cond);
  }

  abrirConfirmacion(): void {
    this.mostrarConfirmacion.set(true);
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacion.set(false);
  }

  // Lista de Testimonios
  readonly testimonios: Testimonio[] = [
    {
      nombre: 'Luciana Torres',
      idioma: 'Inglés Avanzado (C1)',
      carrera: 'Ingeniería de Sistemas e Informática',
      calificacion: 5,
      comentario: 'La preparación para exámenes internacionales superó mis expectativas. Logré 105 en el TOEFL iBT y fui aceptada para una maestría becada en Alemania.',
      avatar: 'LT',
      logro: 'Acreditación TOEFL iBT 105 pts'
    },
    {
      nombre: 'Carlos Huamán',
      idioma: 'Portugués Interactivo',
      carrera: 'Administración y Negocios Internacionales',
      calificacion: 5,
      comentario: 'La modalidad virtual síncrona me permitió llevar clases de noche después de trabajar. El CELPE-Bras fue clave para postular a una multinacional brasileña.',
      avatar: 'CH',
      logro: 'Certificación Oficial CELPE-Bras'
    },
    {
      nombre: 'Valeria Quispe',
      idioma: 'Francés General',
      carrera: 'Derecho',
      calificacion: 5,
      comentario: 'Los docentes tienen una paciencia y metodología comunicativa excepcional. No solo te enseñan la gramática, sino toda la cultura y fonética del idioma.',
      avatar: 'VQ',
      logro: 'Nivel DELF B2 Aprobado'
    }
  ];

  // Noticias y Eventos
  readonly noticiasEventos: NoticiaEvento[] = [
    {
      tipo: 'Noticia',
      fecha: 'Ciclo Regular 2026-II',
      titulo: 'Apertura de Matrículas e Inicio de Clases',
      descripcion: 'Abierto el proceso de admisión y matrícula para todas las modalidades (Presencial, Virtual Síncrono e Híbrido) con beneficios por pronto pago.',
      icono: 'bi-calendar-check',
      lugar: 'Campus Continental / Aula Virtual'
    },
    {
      tipo: 'Taller',
      fecha: 'Viernes 24 de Octubre - 18:00 hrs',
      titulo: 'Masterclass: Estrategias de Speaking para TOEFL e IELTS',
      descripcion: 'Sesión interactiva gratuita impartida por examinadores certificados. Técnicas de fluidez, pronunciación y resolución de reactivos reales.',
      icono: 'bi-mic-fill',
      lugar: 'Vía Microsoft Teams'
    },
    {
      tipo: 'Evento',
      fecha: 'Sábado 15 de Noviembre - 10:00 hrs',
      titulo: 'Festival Cultural Lingüístico Continental',
      descripcion: 'Encuentro cultural con gastronomía francesa e italiana, música brasileña en vivo y círculos de conversación en inglés con hablantes nativos.',
      icono: 'bi-globe2',
      lugar: 'Auditorio Principal Campus Huancayo / Streaming'
    }
  ];
}
