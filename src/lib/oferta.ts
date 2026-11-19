// Educa content. Line copy comes from the approved FCI landing (src/content/lineas/educa.yaml);
// courses and materials come from the old WordPress site (Wayback 2024-08-29 and the backup uploads).

export const familias = [
  { titulo: 'Habilidades socioemocionales', temas: ['Comunicación asertiva', 'Pensamiento crítico', 'Liderazgo y trabajo en equipo'] },
  { titulo: 'Habilidades digitales', temas: ['Teletrabajo seguro', 'Comercio digital'] },
  { titulo: 'Habilidades técnicas y empresariales', temas: ['Entrevista y pitch', 'Educación financiera'] },
  { titulo: 'Habilidades verdes', temas: ['Sostenibilidad', 'Educación ambiental'] },
] as const;

export const modalidades = ['Cursos asincrónicos', 'Sesiones sincrónicas', 'Cápsulas de refuerzo'] as const;

export const publicos = [
  'Participantes de las rutas',
  'Empresas',
  'Agencias de empleo',
  'Entidades aliadas',
  'Instituciones de formación',
] as const;

export interface Curso {
  nombre: string;
  clases: number;
  nivel: string;
  temas: readonly string[];
  materiales?: boolean;
}

export const cursos: readonly Curso[] = [
  {
    nombre: 'Diplomado Constructor Social de Territorios de Paz',
    clases: 2,
    nivel: 'Principiante',
    temas: ['Derechos humanos', 'Gobierno'],
    materiales: true,
  },
  { nombre: 'Diplomado Ruta de Paz', clases: 9, nivel: 'Todos los niveles', temas: ['Derechos humanos', 'Gobierno'] },
  { nombre: 'Logística', clases: 1, nivel: 'Todos los niveles', temas: ['Administración'] },
];

export interface Capitulo {
  titulo: string;
  archivo: string;
  paginas: number;
  peso: string;
}

export interface Modulo {
  nombre: string;
  tema: string;
  capitulos: readonly Capitulo[];
}

export const modulos: readonly Modulo[] = [
  {
    nombre: 'Módulo 1',
    tema: 'Dimensión ambiental',
    capitulos: [
      { titulo: 'Contextualización de la dimensión ambiental', archivo: 'modulo-1-capitulo-1-dimension-ambiental.pdf', paginas: 20, peso: '0,9 MB' },
      { titulo: 'Realidad ambiental en el contexto local', archivo: 'modulo-1-capitulo-2-realidad-ambiental-local.pdf', paginas: 26, peso: '0,8 MB' },
      { titulo: 'Bienestar animal y tenencia responsable de mascotas', archivo: 'modulo-1-capitulo-3-bienestar-animal.pdf', paginas: 6, peso: '0,2 MB' },
      { titulo: 'Gobernanza ambiental', archivo: 'modulo-1-capitulo-4-gobernanza-ambiental.pdf', paginas: 5, peso: '0,3 MB' },
    ],
  },
  {
    nombre: 'Módulo 2',
    tema: 'Educación y comunicación comunitaria',
    capitulos: [
      { titulo: 'Educación comunitaria: andragogía social', archivo: 'modulo-2-capitulo-1-educacion-comunitaria.pdf', paginas: 6, peso: '0,1 MB' },
      { titulo: 'Comunicación virtual', archivo: 'modulo-2-capitulo-2-comunicacion-virtual.pdf', paginas: 7, peso: '0,2 MB' },
    ],
  },
];
