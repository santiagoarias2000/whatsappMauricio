const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const flowDespedida = addKeyword("muchas", "gracias","hasta","luego", {
  sesitive: true,
}).addAnswer("Muchas gracias por comunicase con nostros.");

const flowMensaje = addKeyword("4", "dejar", "Dejar mensaje", {
  sesitive: true,
}).addAnswer(
  "*Deje* *su* *mensaje* *en* *un* *solo* *párrafo* *tan* *largo* *como* *desee* \n_Sus_ _datos_ _de_ _contacto_ _ya_ _están_ _guardados_ _no_ _tiene_ _que_ _enviarlos_ _en_ _el_ _mensaje._"
);

const flowSeguridad = addKeyword(["1", "seguridad"], {
  sesitive: true,
})
  .addAnswer(
    "•Implementación de las Juntas Zonales de Seguridad por cada sector del casco urbano."
  )
  .addAnswer(
    "•Creación de la Secretaría de Seguridad, Convivencia y Justicia de Aguachica."
  )
  .addAnswer(
    "•Se impulsará la creación del Observatorio Municipal del Delito."
  );

const flowDeporte = addKeyword(["2", "deporte"], { sesitive: true })
  .addAnswer("Puesta en marcha del primer proyecto piloto de las ciclovías.")
  .addAnswer(
    "•Dotación de juegos infantiles y gimnasios biosaludables en los distintos parques del municipio."
  )
  .addAnswer(
    "•Fomentaremos la actividad física y la atención de salud mental en niños, niñas, jóvenes y población adulto mayor."
  );

const flowEducacion = addKeyword(["3", "educacion", "educación"], {
  sesitive: true,
})
  .addAnswer(
    "•Ingeniería de datos, marketing digital, ingeniería robótica, desarrollo de software y programación."
  )
  .addAnswer(
    "•Modernización en la infraestructura de las instituciones educativas del sector urbano y rural"
  )
  .addAnswer(
    "•Adelantaremos el proceso de titulación de las escuelas que no se encuentren en el inventario del municipio y/o departamento."
  )
  .addAnswer(
    "•Ampliación de la educación virtual mediante convenios con la Universidad Popular del Cesar (UPC), el Servicio Nacional de Aprendizaje (SENA), la Universidad Nacional, Abierta y a Distancia (UNAD) y la Universidad del Magdalena. "
  );

const flowCultura = addKeyword(["4", "cultura"], { sesitive: true })
  .addAnswer(
    "•Construcción de la Casa de la Cultura y Arte de Aguachica, un espacio que impartirá formación en artes, cultura y tecnología a niños, niñas y jóvenes del municipio."
  )
  .addAnswer(
    "•Desde la alianza público- privada- gestionaremos el proceso formativo en las disciplinas de las artes plásticas y visuales"
  );

const flowSalud = addKeyword(["4", "salud"])
  .addAnswer(
    "•Gestionaremos la construcción del Centro de Salud en el corregimiento de Barranca Lebrija en conjunto con el Gobierno Nacional y el Gobierno Departamental."
  )
  .addAction(
    "•Inversión en la construcción y dotación de equipos biomédicos para mejorar la oferta de atención médica en la red hospitalaria del municipio."
  )
  .addAnswer(
    "•Con el programa de atención en salud dental Aguachica Vuelve a Sonreír, atenderemos en los diferentes sectores del casco urbano y rural a la población infantil y adultos mayores."
  );

const flowInclusion = addKeyword(["6", "inclusion"], { sesitiv: true })
  .addAnswer(
    "•Garantizaremos la atención nutricional a los adultos mayores mediante la apertura de comedores comunitarios."
  )
  .addAnswer(
    "•Promoveremos la financiación y sostenibilidad de los emprendimientos de los jóvenes del municipio a través de créditos educativos que no estén en la oferta de la universidad pública."
  )
  .addAnswer(
    "•Consolidaremos los programas de salud pública a madres gestantes y lactantes en los Centros de Desarrollo Infantil (CDI)."
  )
  .addAnswer(
    "•Aguachica será reconocida como territorio de paz y autoridad mediante la atención prioritaria a las víctimas del conflicto armado. "
  );

const flowPrograma = addKeyword("5", "programa", "gobierno", {
  sesitive: true,
})
  .addAnswer(
    "*¿Cuénteme* *que* *le* *gustaría* *saber* *de* *mi* *programa* *de* *gobierno?* _Escribe_ _la_ _pregunta_ _en_ _un_ _solo_ _mensaje_"
  )
  .addAnswer(
    [
      "1) Seguridad",
      "2) Deporte",
      "3) Educación",
      "4) Cultura",
      "5) Salud",
      "6) Inclusión social",
    ],
    null,
    null,
    [flowSeguridad, flowDeporte, flowEducacion, flowCultura, flowSalud]
  );

const flowGrupowhasapp = addKeyword("1", "grupo", "whats app", {
  sesitive: true,
})
  .addAnswer(
    "Únase a nuestra comunidad en WhatsApp. \n\nAl ingresar, podrá unirse a los grupos de su interés. \n\nPor favor, tenga paciencia mientras el administrador le da acceso."
  )
  .addAnswer("Link: https://chat.whatsapp.com/L9nOauuHQ8TEE6VMRdmczH");

const flowApoyadifusion = addKeyword(
  "2",
  "apoyar en difusion",
  "apoyar en difusión",
  {
    sesitive: true,
  }
).addAnswer(
  "¡Nos emociona que quiera compartir nuestro mensaje! \n\n*Estamos* *diseñando* *todo* *nuestro* *material* *para* *compartir,* *regrese* *en* *unos* *días* *para* *descargar* *material* *a* *través* *de* *este* *chat*"
);

const flowInvita = addKeyword("3", "invita", { sesitive: true }).addAnswer(
  "Quiero compartirle un enlace para que apoyemos la candidatura de Mauricio Perez a la Alcaldía De Aguachica 🔥🔥💪🏼❤️🤍\n\nSería muy bueno si se anima a unirse y participar\n\nLink: https://linktr.ee/mauricioferez"
);

const flowcompartir = addKeyword(["2", "compartir"], {
  sesitive: true,
}).addAnswer("¡Mil gracias! \n\nLink: https://linktr.ee/mauricioferez");

const flowTerminar = addKeyword(["1", "terminar", "carlos"], {
  sesitive: true,
})
  .addAnswer("¡Mil gracias por comunicarse con nosotros!")
  .addAnswer(
    [
      "1) Grupo de WhatsApp",
      "2) Apoyar en difusión",
      "3) Invita a un amigo",
      "4) Dejar mensaje",
      "5) Programa de gobierno",
    ],
    null,
    null,
    [flowGrupowhasapp, flowApoyadifusion, flowInvita, flowMensaje, flowPrograma]
  );

const flowString2 = addKeyword(["1", "siguiente"], {
  sesitive: true,
})
  .addAnswer(
    "¡Mil gracias! \n\nSi quiere ayudarnos a hacer crecer nuestra comunidad, puede hacerlo invitando a sus amigos.\n\n Nuestro sistema le dará una URL para reenviar 💪🏼"
  )
  .addAnswer(["1) Terminar✖️", "2) Compartir con amigos📤"], null, null, [
    flowcompartir,
    flowTerminar,
  ]);

const flowContinuacion = addKeyword(["1", "continuar", "continuar"], {
  sesitive: true,
}).addAnswer(
  ["¿En que barrio vive? Al final del mensaje escriba *siguiente*."],
  null,
  null,
  [flowString2]
);

const flowPrincipal = addKeyword(["hola", "ole", "alo"])
  .addAnswer(
    "🙌!Gracias por participar! Su apoyo es definitivo para *Aguachica*."
  )
  .addAnswer(
    [
      "*Para* *confirmar* *asistencia* *a* *eventos*, *votar* *a* *consultas*  *y* *otras* *opciones* *primero* *deberá* *registrarte.* \nAl participar, acepta nuestra política de uso de datos",
      "1) 👉 escriba continuar *Continuar.*",
    ],
    null,
    null,
    [flowContinuacion]
  );

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal, flowTerminar, flowDespedida]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
