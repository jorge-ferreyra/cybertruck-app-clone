export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export const BUTTON = {
  primary: 0
}

export const modelsTech = {
  es: {
    models: {
      specify: {
        cyberBeast: {
          description: 'Cyberbeast model',
          title: 'CYBERBEAST',
          price: '99,990',
          autonomy: '515',
          acceleration: '2.7',
          maxSpeed: '209',
          towing: '4,990',
          weight: '3,104',
          charge: 'SE PUEDEN AGREGAR HASTA 206'
        },
        allWheelDrive: {
          description: 'All Wheel Drive model',
          title: 'ALL WHEEL DRIVE',
          price: '79,990',
          autonomy: '547',
          acceleration: '4.3',
          maxSpeed: '180',
          towing: '4,990',
          weight: '2,995',
          charge: 'SE PUEDEN AGREGAR HASTA 235'
        },
        rearWheelDrive: {
          description: 'Rear-Wheel Drive model',
          title: 'REAR-WHEEL DRIVE',
          price: '60,990',
          autonomy: '402',
          acceleration: '6.7',
          maxSpeed: '180',
          towing: '3,402'
        }
      },
      titles: {
        performance: 'RENDIMIENTO',
        autonomy: 'Autonomía (est.)',
        acceleration: 'Aceleración',
        maxSpeed: 'Velocidad Máxima',
        towing: 'Capacidad de Remolque',
        
        dimensions: 'DIMENSIONES',
        weight: 'Peso',
        cargo: 'Carga',
        cargoValue: '3,423.5 LITROS',
        wheels: 'Rines',
        seating: 'Asientos',
        seatingDes: '5 ADULTOS',
      
        charging: {
          title: 'CARGA',
          chargeSpeed: 'Velocidad de Carga',
          superCharge: 'Carga máxima en Supercharger/Tipo de pago',
          paragraphSpeed: 'EN 15 MINUTOS',
          paragraphSuper: '250KW MÁX/PAGO POR USO'
        }
      },
      soon: 'Detalles Disponibles en 2025',
      speedometer: 'KM/H',
      speedName: 'KM',
      weightName: 'KG',
      accelerationSpeed: '0-100',
      details: 'Ver más detalles de '
    }
  },
  en: {
    models: {
      specify: {
        cyberBeast: {
          description: 'Cyberbeast model',
          title: 'CYBERBEAST',
          price: '99,990',
          autonomy: '320',
          acceleration: '2.6',
          maxSpeed: '130',
          towing: '11,000',
          weight: '6,843',
          charge: 'UP TO 128'
        },
        allWheelDrive: {
          description: 'All Wheel Drive model',
          title: 'ALL WHEEL DRIVE',
          price: '79,990',
          autonomy: '340',
          acceleration: '4.1',
          maxSpeed: '112',
          towing: '11,000',
          weight: '6,603',
          charge: 'UP TO 136'
        },
        rearWheelDrive: {
          description: 'Rear-Wheel Drive model',
          title: 'REAR-WHEEL DRIVE',
          price: '60,990',
          autonomy: '250',
          acceleration: '6.5',
          maxSpeed: '112',
          towing: '7,500'
        }
      },
      titles: {
        performance: 'PERFORMANCE',
        autonomy: 'Range (est.)',
        acceleration: 'Acceleration',
        maxSpeed: 'Top Speed',
        towing: 'Towing',

        dimensions: 'DIMENSIONS',
        weight: 'Weight',
        cargo: 'Cargo',
        cargoValue: '120.9 CU FT',
        wheels: 'Wheels',
        seating: 'Seating',
        seatingDes: '5 ADULTS',
      
        charging: {
          title: 'CHARGING',
          chargeSpeed: 'Charging Speed',
          superCharge: 'SuperCharging Max/Payment Type',
          paragraphSpeed: 'ADDED IN 15 MINUTES',
          paragraphSuper: '250KW MAX; PAY PER USE'
        }
      },
      soon: 'Details Available in 2025',
      speedometer: 'MPH',
      speedName: 'Miles',
      weightName: 'LBS',
      accelerationSpeed: '0-60',
      details: 'See more details of '
    }
  }
}

export const i18n = {
  es: {
    perma: {
      autonomy: 'Autonomía (est.)',
      speedName: 'KM',
      acceleration: 'Aceleración',
      accelerationSpeed: '0-100',
      speedometer: 'KM/H',
      maxSpeed: 'Velocidad Máxima',
      details: 'Ver más detalles de '
    },
    firstSection: {
      paragraph: ', una de las empresas más influyentes en la industria de los vehículos automotores eléctricos, presenta un camión que desafía a la mayoría de los modelos tradicionales.'
    },
    secondSection: {
      paragraphPart1: 'En noviembre de 2019, ',
      paragraphPart2: ' presento esta camioneta pickup eléctrica con un diseño unico y futurista. Cuenta con una carroceria del tipo exoesqueleto compuesta por paneles de acero inoxidable de hasta 1.8 mm que soportan disparos subsónicos de balas de 9 mm.Con tan solo 6 días de su presentación ya tenía 250.000 reservas. En octubre de 2023 cuenta con más de un millón de ellas y se aproxima una capacidad de fabricar 125.000 en 2024 y 250.000 en 2025.',
      paragraphPart3: 'Las entregas empezaron en diciembre de 2023 y se ofrecieron 3 versiones: '
    },
    thirdSection: {
      box: {
        title: 'Sistema eléctrico de 48V',
        paragraphPart1: 'El cambio de arquitectura a 48 Voltios implica el uso del 25% del cobre necesitado para un vehiculo de 12 Voltios. Si para el ',
        paragraphPart2: ' usaba 82 kilogramos en 1600 metros de cables, se necesitaría 1.820.000 toneladas de cobre para producir 20 millones de vehículos para el 2030. Con la siguiente formula diseñada en Tesla para diseñar los vehículos con esta arquitectura, se aproxima el ahorro de 1.3 millones de toneladas de cobre para fabricar todos sus vehículos.'
      }
    },
    fourthSection: {
      before: {
        title: 'Antes...',
        paragraph: 'Hace más de 4 años que se hizo una prueba del Cybertruck sobre su resistencia ante impactos. Este video fue muy viral ya que la propuesta futurista se veía bastante débil de lo que se proponía y sin dudas fue una demostración de una falta de seguridad por parte de Tesla...'
      },
      after: {
        title: 'Después!',
        paragraph: 'Pero las cosas cambiaron meses antes de la salida al mercado, se demostró una comparativa de una camioneta genérica con el Cybertruck y los resultados son contundentes. Cuenta con una carrocería que emplea láminas de acero inoxidable con aleaciones de cromo-níquel no magnético. Esto hace que su diseño sea bastante robusto para pruebas de balas, el mismo video lo comprueba...'
      }
    },
    fifthSection: {
      firstBox: {
        title: 'Interior',
        paragraphPart1: 'El prototipo del interior del Cybertruck ceunta con una pantalla de 18,5 pulgadas. Su software manipula gran parte de la accesibilidad de la camioneta como abrir el vaúl frontal, abrir el puerto de carga, navegación digital y mucho más.',
        paragraphPart2: 'También cuenta con otra pantalla de 9,4 pulgadas para los pasajeros traseros en donde también se puede acceder a ciertas funcionalidades. El sistema de audio tiene 15 altavoces incluyendo 2 subwoofers, dispone de dos cargadores inalámbricos para teléfonos e incorpora un filtro HEPA y la función Bioweapon Mode que filtra el 99,97% de las partículas en el aire.',
        paragraphPart3: 'No cuenta con el tablero de velocimetro como en los vehiculos tradicionales ya que este se encuentra en la pantalla central. El interior dispone de tiras luminosas LED de ambiente a las que se puede cambiar de color desde la pantalla.'
      },
      lastBox: {
        title: `Volante "yoke"`,
        paragraphPart1: 'El volante del prototipo era similar a los usados en aviación (yoke) y tenía la circunferencia partida. En el modelo de producción es un volante oblongo con las partes superior e inferior rectas.',
        paragraphPart2: 'Junto al volante no dispone de palancas de intermitentes o de limpiaparabrisas. Esas funciones se realizan desde los botones hápticos incorporados al volante. Cuenta con vocina en el centro y tiene un microfono para comandos de voz, caracteristica peculiar del software por ejemplo para abrir la guantera que está motorizada.',
        paragraphPart3: `Todo el techo es de cristal tintado con filtros inflarrojos y ultravioletas, los cristales acústicos "Gorrila Glass" soportan golpes como el de una pelota de beisbol lanzada a 113 km/h y granizo de clase 4.`
      }
    },
    sixthSection: {
      doubts: {
        title: 'Si ténes alguna duda sobre Tesla o Cybertruck, ¡Mandanos tu consulta!',
        paragraphPart1: ' es una de las empresas más competitivas de estadosunidos con sede en Austin, Texas. El núcleo de la empresa está en la ingeniería del sistema de propulsión del vehículo eléctrico que incluye: paquete de baterías, motor, electrónica de potencia y software de control que permite que todos los componentes formen un sistema.',
        paragraphPart2: 'Tesla se fundó para acelerar la transición hacia el transporte sostenible, influenciando unos principios para influir en la industria desde un punto de vista basado en la energía renovable:',
        listPart1: 'Comenzar con un proyecto pequeño fabricando pocas unidades a un precio alto.',
        listPart2: 'Fabricar un vehículo en mayor volumen de unidades y a un costo menor que en el paso 1.',
        listPart3: 'Vehículo producido en gran volumen y a un precio accesible.'
      },
      form: {
        name: 'Nombre',
        surname: 'Apellido',
        title: 'Título',
        description: 'Descripción',
        nameInput: 'Ingrese un nombre...',
        surnameInput: 'Ingrese un apellido...',
        mailInput: 'Ingrese un mail...',
        titleInput: 'Ingrese el titulo...',
        descriptionInput: 'Ingrese aquí la descripción...',
        submitInput: 'Enviar'
      }
    },
    footerSection: {
      page: 'Página Oficial',
      vehicles: 'Vehículos Disponibles',
      store: 'Tienda',
      events: 'Eventos',
      about: 'Acerca De',
      order: 'Ordenar',
      contact: 'Contacto',
      terms: 'Términos Legales y de Privacidad',
      profile: {
        title: 'Página hecha por Jorge Ferreyra',
        socialNet: 'Redes Sociales'
      }
    }
  },
  en: {
    perma: {
      autonomy: 'Range (est.)',
      speedName: 'Miles',
      acceleration: 'Acceleration',
      accelerationSpeed: '0-60',
      speedometer: 'MPH',
      maxSpeed: 'Top Speed',
      details: 'See more details of '
    },
    firstSection: {
      paragraph: ', one of the most influential companies in the electric motor vehicle industry, presents a truck that challenges most traditional models.'
    },
    secondSection: {
      paragraphPart1: 'In November 2019, ',
      paragraphPart2: ' present this electric pickup truck with a unique and futuristic design. It has an exoskeleton type body composed of stainless steel panels of up to 1.8 mm that withstand subsonic shots of 9 mm bullets. Just 6 days after its presentation it already had 250,000 reservations. In October 2023 it has more than one million of them and the capacity to manufacture 125,000 in 2024 and 250,000 in 2025 is approaching.',
      paragraphPart3: 'Deliveries began in December 2023 and 3 versions were offered: '
    },
    thirdSection: {
      box: {
        title: '48V Electrical System',
        paragraphPart1: 'The change in architecture to 48 Volts implies the use of 25% of the copper needed for a 12 Volt vehicle. If for the ',
        paragraphPart2: ' used 180 lbs in 1,600 meters of cables, 1,820,000 tons of copper would be needed to produce 20 million vehicles by 2030. With the following formula designed at Tesla to design vehicles with this architecture, it is approximate saving 1.3 million tons of copper to manufacture all its vehicles.'
      }
    },
    fourthSection: {
      before: {
        title: 'Before...',
        paragraph: 'More than 4 years ago, the Cybertruck was tested for its impact resistance. This video was very viral since the futuristic proposal looked quite weak than what was proposed and without a doubt it was a demonstration of a lack of security on the part of Tesla...'
      },
      after: {
        title: 'After!',
        paragraph: 'But things changed months before the market launch, a comparison of a generic truck with the Cybertruck was demonstrated and the results are overwhelming. It has a body that uses stainless steel sheets with non-magnetic chromium-nickel alloys. This makes its design quite robust for bullet tests, the same video proves it...'
      }
    },
    fifthSection: {
      firstBox: {
        title: 'Inside',
        paragraphPart1: `The prototype of the Cybertruck interior has an 18.5-inch screen. Its software manipulates much of the truck's accessibility such as opening the front trunk, opening the charging port, digital navigation and much more.`,
        paragraphPart2: 'It also has another 9.4-inch screen for rear passengers where certain functionalities can also be accessed. The audio system has 15 speakers including 2 subwoofers, has two wireless phone chargers and incorporates a HEPA filter and the Bioweapon Mode function that filters 99.97% of particles in the air.',
        paragraphPart3: 'It does not have the speedometer dashboard as in traditional vehicles since it is located on the central screen. The interior has ambient LED lighting strips whose color can be changed from the screen.'
      },
      lastBox: {
        title: 'Yoke Steering Wheel',
        paragraphPart1: `The prototype's steering wheel was similar to those used in aviation (yoke) and had a split circumference. In the production model it is an oblong steering wheel with straight upper and lower parts.`,
        paragraphPart2: 'Next to the steering wheel there are no turn signal or windshield wiper levers. These functions are performed from the haptic buttons incorporated into the steering wheel. It has a speaker in the center and has a microphone for voice commands, a peculiar feature of the software, for example to open the glove box, which is motorized.',
        paragraphPart3: `The entire roof is made of tinted glass with infrared and ultraviolet filters, the "Gorrila Glass" acoustic crystals withstand blows like that of a baseball thrown at 70 MPH and class 4 hail.`
      }
    },
    sixthSection: {
      doubts: {
        title: 'If you have any questions about Tesla or Cybertruck, send us your question!',
        paragraphPart1: 'is one of the most competitive companies in the United States based in Austin, Texas. The core of the company is in the engineering of the electric vehicle propulsion system which includes: battery pack, motor, power electronics and control software that allows all components to form a system.',
        paragraphPart2: 'Tesla was founded to accelerate the transition towards sustainable transportation, influencing a few principles to influence the industry from a point of view based on renewable energy:',
        listPart1: 'Start with a small project manufacturing few units at a high price.',
        listPart2: 'Manufacture a vehicle in a greater volume of units and at a lower cost than in step 1.',
        listPart3: 'Vehicle produced in large volume and at an affordable price.'
      },
      form: {
        name: 'Name',
        surname: 'Surname',
        title: 'Title',
        description: 'Description',
        nameInput: 'Enter a name...',
        surnameInput: 'Enter a surname...',
        mailInput: 'Enter a mail...',
        titleInput: 'Enter a title...',
        descriptionInput: 'Enter a description here...',
        submitInput: 'Submit'
      }
    },
    footerSection: {
      page: 'Official Website',
      vehicles: 'Available Vehicles',
      store: 'Store',
      events: 'Events',
      about: 'About',
      order: 'Order!',
      contact: 'Contact',
      terms: 'Legal and Privacy Terms',
      profile: {
        title: 'Page made by Jorge Ferreyra',
        socialNet: 'Social Networks'
      }
    }
  }
}