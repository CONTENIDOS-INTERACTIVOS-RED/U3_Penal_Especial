export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Delitos contra el régimen constitucional y legal',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Rebelión, sedición y asonada',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Rebelión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sedición',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Asonada',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Conspiración y delitos contra el mando legítimo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conspiración',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Seducción, usurpación y retención ilegal de mando',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Llerenas, F. G. & Tamayo, J. (1995). El levantamiento de la huertista: cuatro rebeliones y cuatro jefes militares. Universidad de Guadalajara.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/73391?page=10',
    },
    {
      referencia:
        'Herrero Bervera, C. (2001). Revuelta, rebelión y revolución en 1810: historia social y estudios de caso. Editorial Miguel Ángel Porrúa.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/74850?page=100',
    },
    {
      referencia:
        'Agudo Fernández, E. & Jaén Vallejo, M. (2019). Derecho penal aplicado: parte especial. Dykinson.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/118404?page=304',
    },
    {
      referencia:
        'Gutiérrez Guerrero, M. A. (2016). Régimen constitucional colombiano, su historia y desarrollo. Ediciones USTA.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/68980?page=17',
    },
    {
      referencia:
        'Ramírez López, D., Rangel Angulo, D. V. & Sanabria Villamizar, R. J. (2023). Parámetros de convencionalidad del delito político en Colombia. Justicia, 28(44), 107-126.',
      link: 'https://doi.org/10.17081/just.28.44.6091',
    },
    {
      referencia:
        'Gabás Pallas, R. & Gabás Pallas, R. (Trad.). (2015). Heidegger y el mito de la conspiración mundial de los judíos. Herder Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/85123?page=21',
    },
    {
      referencia:
        'García-Noblejas, J. J. (2006). Medios de conspiración social (3ª ed.). EUNSA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/101430',
    },
    {
      referencia:
        'Posada Maya, R. (2010). Delito político, terrorismo y temas de Derecho penal. Universidad de los Andes.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/6936',
    },
  ],
  glosario: [
    {
      termino: 'Asonada',
      significado:
        'Levantamiento tumultuario y violento para coaccionar a la autoridad, sin intención de sustituir el régimen político.',
    },
    {
      termino: 'Cadena de mando',
      significado:
        'Estructura jerárquica que organiza y distribuye funciones dentro de cuerpos armados o administrativos del Estado.',
    },
    {
      termino: 'Conspiración',
      significado:
        'Acuerdo entre varias personas para promover u organizar una insurrección armada, sin ejecutarla todavía.',
    },
    {
      termino: 'Delito político',
      significado:
        'Conducta punible con finalidad ideológica que atenta contra el régimen constitucional o legal.',
    },
    {
      termino: 'Desobediencia institucional',
      significado:
        'Acción de no acatar órdenes legítimas, afectando el funcionamiento jerárquico del Estado.',
    },
    {
      termino: 'Indulto',
      significado:
        'Mecanismo legal que extingue o conmuta una pena, impuesta por razones políticas o humanitarias.',
    },
    {
      termino: 'Jurisdicción Especial para la Paz (JEP)',
      significado:
        'Órgano transicional encargado de juzgar delitos en el marco del conflicto armado colombiano.',
    },
    {
      termino: 'Movimiento armado',
      significado:
        'Grupo organizado con fines políticos que utiliza la violencia para modificar el régimen constitucional.',
    },
    {
      termino: 'Rebelión',
      significado:
        'Alzamiento armado contra el gobierno con el propósito de derrocarlo, o modificar el orden constitucional.',
    },
    {
      termino: 'Retención ilegal de mando',
      significado:
        'Negarse a entregar un cargo de autoridad luego de haber sido removido legalmente.',
    },
    {
      termino: 'Seducción de mando',
      significado:
        'Inducción a miembros de la fuerza pública para desobedecer órdenes o incumplir funciones.',
    },
    {
      termino: 'Sedición',
      significado:
        'Alzamiento colectivo y público, para impedir temporalmente el ejercicio legítimo de la autoridad estatal.',
    },
    {
      termino: 'Suplantación de autoridad',
      significado:
        'Ejercicio ilegítimo de funciones públicas sin contar con la investidura legal correspondiente.',
    },
  ],
}
