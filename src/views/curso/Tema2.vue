<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Conspiración y delitos contra el mando legítimo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-full-width.bg-color-12.mb-4
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg
              p(data-aos="fade-left").mb-4 Para el estudio de esta temática, lo invitamos a escuchar el siguiente pódcast.

              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Conspiración y delitos contra el mando legítimo"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
      
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in", style="max-width: 600px")


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-7.p-4(data-aos="fade-left").mb-4.text-white
            p.mb-3 Este tema aborda figuras que reflejan una visión anticipatoria del Derecho Penal frente a amenazas estructurales. Su estudio es clave para comprender cómo se protege el funcionamiento del Estado desde una dimensión penal que no solo castiga el resultado, sino también el riesgo organizado y deliberado. A lo largo de los Artículos 471 y 472 del Código Penal, se desarrollan estos delitos con base en criterios como la afectación a la autoridad, el acuerdo criminal y la perturbación del ejercicio legítimo del poder, lo que exige un tratamiento jurídico riguroso, contextualizado y respetuoso del principio de proporcionalidad.


      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Conspiración

      .row.mb-4
        .col-lg-8
          .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 La conspiración, consagrada en el Artículo 471 del Código Penal colombiano, constituye una figura penal de especial relevancia dentro de los delitos que buscan proteger la estabilidad del Estado y la permanencia del régimen constitucional. A diferencia de otros delitos políticos como la rebelión o la sedición, la conspiración se encuentra en un estadío previo, anterior a la ejecución de actos violentos o manifestaciones públicas de alzamiento. Su particularidad radica en que no exige la materialización del ataque armado ni la puesta en marcha del plan insurreccional, sino que se consuma con la simple existencia de un acuerdo voluntario y consciente entre dos o más personas que deciden promover, organizar o apoyar un movimiento armado con el propósito de derrocar al gobierno constitucional o alterar gravemente el orden institucional vigente. Esta característica convierte a la conspiración en una forma de criminalización anticipada, sustentada en la necesidad de prevenir daños de enorme envergadura antes de que puedan desarrollarse plenamente.
          
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in").mb-4.mb-lg-0


      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/4.svg', alt='')
          .col-lg
            .p-4
              p.mb-4(data-aos="fade-up") En ese sentido, la conspiración es un delito de peligro abstracto, que responde a una lógica de defensa preventiva del Estado frente a amenazas organizadas que, de consolidarse, podrían derivar en escenarios de guerra interna, toma violenta de instituciones públicas, fractura del orden constitucional o pérdida de control territorial.

              p.mb-0(data-aos="fade-up") La tipificación de esta conducta como punible busca garantizar que el Estado pueda intervenir oportunamente cuando existan signos objetivos de coordinación para un ataque estructurado contra sus bases políticas, incluso si aún no se han producido los actos ejecutivos.
      
      p(data-aos="fade-left").mb-4 Esta anticipación se justifica por el alto nivel de riesgo que representa una concertación con fines armados, puesto que una vez que dicha estructura se pone en marcha, su neutralización suele ser más costosa en términos institucionales, sociales y humanos (Gabás Pallas, 2015).

      p(data-aos="fade-left").mb-4 Dogmáticamente, la conspiración exige la concurrencia de elementos estructurales bien definidos:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-1.png")
              .col-lg-7.order-lg-1
                p El primero de ellos es la pluralidad de agentes, porque el delito no puede cometerse individualmente. La figura penal parte de la existencia de una concertación entre al menos dos personas que, de manera voluntaria, deliberada y con conocimiento de causa, acuerdan colaborar en un proyecto de carácter subversivo. La simple presencia simultánea de varias personas no configura conspiración; lo determinante es que exista un propósito compartido, una voluntad común de actuar en contra del orden constitucional. 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-2.png")
              .col-lg-7.order-lg-1
                p En segundo lugar, el acuerdo debe estar dirigido específicamente a organizar o respaldar un movimiento armado. No basta con manifestaciones de descontento, expresiones ideológicas radicales o críticas al gobierno. La finalidad debe estar orientada al uso de la violencia armada como medio para modificar el régimen político o institucional. 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema2/slide-3.png")
              .col-lg-7.order-lg-1
                p En tercer lugar, el dolo debe ser directo, lo que implica que cada uno de los concertados debe actuar con plena conciencia del carácter ilícito del acuerdo y con la intención decidida de contribuir al proyecto insurreccional. No se admite, por tanto, el dolo eventual ni la culpa. La responsabilidad penal surge cuando el sujeto abraza voluntariamente el objetivo subversivo, sin que le sea indiferente la consumación del plan.
      

      .row.mb-5
        .col-lg-4
          figure        
            img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-6.p-4(data-aos="fade-left").mb-4
            p.mb-0 Desde el punto de vista probatorio, la demostración de una conspiración exige evidencias sólidas que permitan reconstruir el acuerdo criminal. La jurisprudencia ha insistido en que no se puede derivar la existencia de una conspiración de simples afinidades ideológicas, de simpatías políticas o de la pertenencia a grupos de oposición. Lo que debe probarse es la existencia de una coordinación funcional y estructurada, orientada a desarrollar una acción armada contra el Estado. Por ejemplo, cuando se cuenta con interceptaciones de llamadas, correos electrónicos, mensajes cifrados, actas de reuniones clandestinas, distribución de funciones, acopio de armamento, esquemas de financiamiento o elaboración de mapas estratégicos, se puede inferir con claridad la existencia de un plan conspirativo. Lo relevante es demostrar que no se trata de un simple ejercicio de la libertad de expresión o de asociación, sino de un paso concreto hacia la ejecución de una empresa criminal organizada (García-Noblejas, 2006).


      .row.mb-4
        .col-lg-8
          .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Un ejemplo que permite ilustrar con mayor claridad esta figura, es el caso en que un grupo de individuos, vinculados ideológicamente a una organización radical, se reúnen de forma reiterada para planear la toma violenta de una instalación militar con el fin de despojarla de armamento y crear una célula guerrillera autónoma. Aunque el ataque no se haya realizado, el solo hecho de que se hayan distribuido roles, planeado rutas de acceso, elaborado esquemas de vigilancia y definido objetivos específicos, es suficiente para configurar el delito de conspiración. De igual forma, si un grupo clandestino diseña una estrategia para atacar convoyes del Ejército en zonas rurales con la finalidad de expulsar la presencia institucional de un territorio y facilitar el dominio de actores armados ilegales, se estaría frente a un caso típico de conspiración, incluso si el ataque aún no se ha producido.
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in").mb-4.mb-lg-0


      .row.align-items-center.mb-5
        .col-lg-auto
          img(src="@/assets/curso/tema2/7.svg", style="max-width: 85px").mx-auto
        .col-lg
          p.mb-0 La conspiración tiene puntos de contacto con otros delitos, como la pertenencia a grupos armados ilegales, el entrenamiento para actividades ilícitas o el uso indebido de uniformes e insignias oficiales. Sin embargo, su especificidad radica en que no requiere que el sujeto haga parte formal de una organización armada ilegal ni que haya participado en actos materiales de guerra. Lo que la configura es el acuerdo, la voluntad compartida de organizar una acción armada contra el régimen constitucional. En ese sentido, una persona puede ser condenada por conspiración sin que haya disparado un arma, sin que haya ingresado al campo de batalla o sin que haya sido capturada en flagrancia; basta con demostrar que participó activamente en la planificación de una acción subversiva y que compartía el propósito político de quebrantar el orden democrático (García-Noblejas, 2006). 


      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="En cuanto a su penalidad")
              p El Código Penal colombiano, establece una sanción privativa de libertad que oscila entre 1 y 2 años de prisión. Esta pena puede incrementarse cuando el sujeto activo ejerce una función de liderazgo dentro del acuerdo, si participa como organizador o reclutador, o si ostenta una posición de mando en la estructura conspirativa. Del mismo modo, la condición de funcionario público, en especial si se trata de miembros de la fuerza pública que traicionan su deber constitucional, constituye una agravante significativa. En contraposición, si el individuo demuestra que se desvinculó del pacto de forma voluntaria antes de que se iniciaran los actos preparatorios o ejecutivos, puede beneficiarse de una rebaja de pena, dado que su conducta posterior evidencia un desistimiento activo.
      
            .div(titulo="Desde el plano procesal")
              p El delito de conspiración habilita la adopción de medidas cautelares y detención preventiva, debido a su estrecha vinculación con la seguridad del Estado y al riesgo potencial que representa para la comunidad. Las autoridades judiciales pueden ordenar capturas, interceptaciones, seguimientos y allanamientos dentro del marco legal, en procura de impedir la evolución de la amenaza hacia su fase ejecutiva. Sin embargo, esta potestad de intervención anticipada debe ser ejercida con especial prudencia y sustentada en pruebas sólidas, para evitar que se vulnere el derecho a la libertad individual por sospechas infundadas o prejuicios ideológicos. La delgada línea entre el ejercicio legítimo de la disidencia y la concertación criminal obliga a los jueces y fiscales a valorar cuidadosamente el contexto, el contenido de las comunicaciones, el nivel de organización y el grado de desarrollo del plan (García-Noblejas, 2006).
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4.pb-lg-5(data-aos="fade-left").mb-4
            p.mb-0 En contextos de justicia transicional, como el que vivió Colombia a partir del Acuerdo Final de Paz del 2016, el delito de conspiración ha sido objeto de un análisis especial. Dado que muchas estructuras armadas surgen precisamente a partir de pactos conspirativos previos, la participación en estas fases iniciales puede ser tenida en cuenta para el reconocimiento de responsabilidad dentro de mecanismos como la Jurisdicción Especial para la Paz, siempre que los hechos no impliquen violaciones al derecho internacional humanitario o crímenes de lesa humanidad. Asimismo, en el marco de la Ley de amnistía para delitos políticos, la conspiración ha sido incluida dentro del conjunto de conductas susceptibles de tratamiento diferencial, siempre que se demuestre su motivación política y no concurra ninguna de las exclusiones establecidas por el Derecho penal internacional.


      p(data-aos="fade-left").mb-4 En conclusión, la conspiración tipificada en el Artículo 471 del Código Penal colombiano es un delito de naturaleza preventiva, que permite al Estado actuar frente a amenazas organizadas antes de que estas deriven en acciones armadas contra el régimen democrático.


      .bg-full-width.bg-color-13.mb-0
        .px-4.px-md-5.py-4

          .row.justify-content-center.align-items-center
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Su configuración exige un acuerdo probado, con dolo directo y finalidad subversiva, lo que la distingue de meras expresiones políticas o actos simbólicos. La penalización anticipada que caracteriza a esta figura, se encuentra justificada por el nivel de riesgo que representa para la institucionalidad, siempre que se respete el principio de legalidad y el debido proceso. En el análisis judicial de la conspiración deben prevalecer criterios de prudencia, proporcionalidad y razonabilidad, a fin de garantizar que la protección del Estado de Derecho no se convierta en una herramienta de persecución ideológica ni en un obstáculo a la libertad política. 
        
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema2/10.svg', alt='')


      .bg-color-6.mb-5
        .px-4.px-md-5.py-4
          p.mb-0(data-aos="fade-up") La existencia de esta figura penal, aplicada con responsabilidad y equilibrio, permite conjugar la defensa de la democracia con la garantía de los derechos fundamentales, asegurando un orden social justo, pluralista y respetuoso del disenso legítimo.



      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Seducción, usurpación y retención ilegal de mando


      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/11.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El Artículo 472 del Código Penal colombiano, contempla una tríada de conductas que, aunque pueden pasar desapercibidas en el imaginario colectivo por no implicar violencia física directa ni levantamientos armados, tienen un impacto profundo sobre la estructura jerárquica y el funcionamiento institucional del Estado. Las figuras penales allí consagradas: la seducción de miembros de la fuerza pública, la usurpación de mando y la retención ilegal del mismo constituyen ataques sutiles pero peligrosos contra la legalidad, la obediencia debida, la autoridad legítima y la seguridad interna, especialmente en cuerpos armados y policiales. A diferencia de delitos como la rebelión o la sedición, que se expresan de forma abierta y colectiva, estas conductas operan desde dentro, afectando la estabilidad de las instituciones mediante actos que socavan la confianza, rompen la cadena de mando y debilitan el principio de subordinación (Posada Maya, 2010). 


      .row.align-items-start.mb-5
        .col-lg-8
      
          AcordionA(tipo="b")
            .div(titulo="La seducción de miembros de la fuerza pública")
              p Se presenta cuando una persona, sin importar si pertenece o no al Estado, intenta influenciar indebidamente a militares, policías o personal uniformado para que incumplan sus deberes, revelen información reservada o actúen en contravía de sus órdenes institucionales. Esta influencia puede adoptar diversas formas, desde ofrecimientos económicos, favores personales o familiares, hasta presiones ideológicas o promesas de protección. Lo relevante jurídicamente no es que el intento de seducción tenga éxito, sino que exista una conducta voluntaria orientada a inducir la desobediencia o la traición funcional.
      
            .div(titulo="Ejemplo")
              p En contextos donde operan grupos armados ilegales, es frecuente que estos intenten corromper a miembros del Ejército o de la Policía, ofreciéndoles dinero a cambio de información sobre operativos, rutas de patrullaje o zonas de influencia. También se han documentado casos en los que una persona cercana a un uniformado le solicita omitir la captura de un familiar, impedir un allanamiento o encubrir un acto ilícito. Estas conductas, aunque se presenten en espacios privados o sin publicidad, afectan gravemente la disciplina institucional y la seguridad nacional, debido a que abren puertas a la infiltración, a la corrupción interna y a la pérdida de control estatal sobre el uso legítimo de la fuerza. La jurisprudencia ha señalado que este tipo penal exige una intención manifiesta de desviar la conducta del funcionario y que la prueba debe centrarse en los medios usados para inducirlo, así como en el contexto institucional donde se presenta la tentativa de seducción con el propósito de esta conducta debe estar orientada a cometer el delito de rebelión o de sedición.
      
            .div(titulo="La usurpación de mando")
              p Sanciona a quien se hace pasar por autoridad militar, policial o funcional sin contar con la investidura legal para ejercer ese rol, ejecutando actos que son propios del cargo que afirma ostentar. La conducta no se limita a utilizar un uniforme o a identificarse falsamente como autoridad, sino que requiere que la persona realice acciones concretas que impliquen el ejercicio ilegítimo del poder público. Esto puede incluir impartir órdenes, detener personas, cobrar sanciones, firmar documentos oficiales, o presentarse ante una comunidad como responsable de la seguridad o del control de un área determinada.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0



      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/13.png", alt="").mb-4.mb-lg-0
        .col-lg-8

      
          AcordionA(tipo="b")
            .div(titulo="En Colombia")
              p Algunos casos han involucrado a personas que, simulando ser miembros activos de la Policía Nacional, han montado retenes ilegales en carreteras donde exigían documentos y cobraban supuestas multas a los ciudadanos. En otros escenarios, individuos han usurpado funciones en contextos de conflictos sociales, haciéndose pasar por representantes de la fuerza pública en medio de protestas o desalojos para intimidar o reprimir a la población. Incluso se han dado situaciones más sofisticadas, donde se usan documentos falsos, carnés adulterados, o respaldos falsos de supuestas resoluciones administrativas. Estas formas de usurpación, más allá de suplantar identidades, erosionan la credibilidad de las instituciones, generan desconfianza ciudadana y pueden facilitar la comisión de otros delitos, como la extorsión, el secuestro o el fraude. El Derecho penal protege, en este caso, la fe pública, la legalidad en el ejercicio del poder y la correcta delimitación de las funciones del Estado, previniendo que actores no autorizados tomen decisiones que afecten derechos fundamentales.
      
            .div(titulo="La retención ilegal de mando")
              p Es una figura que sanciona al servidor público que, habiendo sido designado legalmente para un cargo de mando, se niega a entregar dicha función cuando ha sido removido, suspendido o reemplazado por la autoridad competente. Aunque pueda parecer una conducta meramente administrativa o una forma de desacuerdo institucional, en realidad constituye una prolongación indebida del ejercicio del poder y una violación al principio de legalidad. Esta conducta suele presentarse en contextos de tensión política o administrativa, donde quien ostentaba un cargo de dirección considera injusto su retiro y decide continuar ejerciendo funciones como si aún tuviera legitimidad jurídica. Además, pueden generar dualidad de mando, desorientación en los subordinados, conflictos jerárquicos e incluso parálisis institucional (Posada Maya, 2010).


      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Estas tres conductas, aunque diferentes en su manifestación, comparten una misma preocupación la protección del orden constitucional, de la jerarquía legítima en el Estado y de los principios fundamentales del servicio público. La legitimidad del poder no se deriva únicamente del hecho de ostentar un cargo, sino de hacerlo dentro del marco normativo y con apego a la legalidad. Cualquier alteración a esa estructura, ya sea por seducción, suplantación o retención indebida, rompe el equilibrio institucional, afecta la eficacia del aparato estatal y deteriora la confianza ciudadana en las entidades públicas. De allí que el legislador colombiano haya considerado estas conductas merecedoras de reproche penal, aún si no derivan en lesiones físicas o materiales inmediatas, dado que el daño que producen es institucional, progresivo y de largo alcance.
          
          p(data-aos="fade-left") Desde el punto de vista procesal, el juzgamiento de estas conductas exige un manejo riguroso de la prueba, puesto que no siempre se cuenta con evidencia directa de los actos cometidos:

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in").mb-4.mb-lg-0


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/15.png")
              .col-lg-7
                p En el caso de la seducción de mando, la prueba puede consistir en interceptaciones, testimonios, registros de conversaciones o documentos que evidencien el ofrecimiento de beneficios. 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/16.png")
              .col-lg-7
                p En la usurpación de funciones, es frecuente el uso de pruebas documentales, peritajes sobre uniformes o identificaciones, y declaraciones de las víctimas que fueron engañadas por el supuesto funcionario. 
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/17.png")
              .col-lg-7
                p En lo que respecta a la retención de mando, se puede recurrir a comunicaciones institucionales, resoluciones de remoción, actas de posesión del nuevo titular, y cualquier prueba que demuestre que el anterior funcionario se negó a cesar sus funciones pese a estar legalmente obligado a hacerlo. 


      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              p.mb-0 En todos los casos, los operadores judiciales deben evaluar con cuidado el contexto en que se presenta la conducta, distinguiendo los casos de crítica legítima al poder o de controversia administrativa de aquellos en los que se quebranta de forma dolosa la legalidad institucional. La línea divisoria puede ser delgada, especialmente en contextos donde hay confrontaciones políticas o conflictos internos, por lo cual se exige una interpretación prudente, sistemática y orientada a la protección de la función pública.


      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left") En definitiva, el Artículo 472 del Código Penal colombiano, constituye una herramienta jurídica esencial para preservar la legitimidad del ejercicio del poder dentro del Estado de Derecho. Su finalidad no es castigar el disenso, ni penalizar el debate democrático, sino evitar que se vulneren las estructuras de mando a través de prácticas encubiertas que comprometen la obediencia institucional, la legalidad en el desempeño de cargos públicos y la integridad funcional de las fuerzas encargadas de proteger la vida, la libertad y la seguridad de los ciudadanos. La existencia de estos tipos penales permite que el orden constitucional no solo se preserve frente a amenazas armadas, sino también frente a formas silenciosas de corrupción, manipulación o desconocimiento de la autoridad legítimamente constituida. 
      
          .bg-color-6.p-4(data-aos="fade-left")
            p.mb-0 En un contexto democrático, donde el poder debe ejercerse dentro de límites jurídicos claramente definidos, garantizar el respeto por la cadena de mando y por los procedimientos de acceso y relevo en los cargos públicos es una condición innegociable para la estabilidad institucional y la convivencia pacífica (Posada Maya, 2010).
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      
      
      .row.mb-4
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Es importante que las conductas antes mencionadas no son asiladas y para que se configuren el tipo penal establecido en el Artículo 472, es necesario que estas siempre tengan el propósito de cometer el delito de rebelión o de sedición pues de no existir esta intención no se está ante la presencia del delito político. 
      
      
      
      
      
      
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>


      
      

      
      
      
      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://revistas.javerianacali.edu.co/index.php/criteriojuridico/article/view/907/762" target="_blank" rel="noopener noreferrer") Restrepo Orrego, L. A. (2018). Aproximación desde Michel Foucault a la transformación contemporánea del delito político en Colombia: de un mecanismo de normalización a un mecanismo de rechazo. Criterio Jurídico, 11(1), 165-182. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span Arboleda Vallejo, M., & Ruiz Salazar, J. A. (2025). Manual de Derecho Penal Especial. Editorial Leyer.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=ugt9N2XOhaM" target="_blank" rel="noopener noreferrer") Historias de Adelina. (2021). Conspiraciones en la Independencia: Verdades y Mitos. Parte 1 [video]. YouTube.

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=9fexGmfJ2k4" target="_blank" rel="noopener noreferrer") andresoasis. (2014). 9 May 2012 Caso Daktari: paramilitares colombianos revelan detalles de la conspiración [video]. YouTube. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes principios SOLID promueve la separación de responsabilidades en una clase?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Principio de Inversión de Dependencias',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Principio de Sustitución de Liskov',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Principio de Responsabilidad Única',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Principio de Abierto/Cerrado',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El Principio de Responsabilidad Única promueve la separación de responsabilidades.',
            mensaje_incorrecto:
              'Incorrecto. El principio correcto es el de Responsabilidad Única.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el objetivo principal del patrón de diseño Singleton?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Crear múltiples instancias de una clase para mejorar el rendimiento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar que una clase tenga una única instancia accesible globalmente',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Delegar la creación de objetos a una subclase',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evitar el uso de interfaces',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El objetivo del Singleton es garantizar una única instancia global.',
            mensaje_incorrecto:
              'Incorrecto. El objetivo principal es garantizar una única instancia accesible globalmente.',
          },
          {
            id: 3,
            texto:
              '¿Qué característica distingue al patrón Factory Method de otros patrones creacionales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Proporciona una instancia única',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Permite a las subclases decidir qué objeto instanciar',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Reemplaza las relaciones entre objetos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Define objetos como estructuras planas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El Factory Method permite a las subclases decidir qué objeto instanciar.',
            mensaje_incorrecto:
              'Incorrecto. La característica clave es que permite a las subclases decidir qué objeto instanciar.',
          },
          {
            id: 4,
            texto:
              '¿Qué elemento de un diagrama de clases representa una relación de herencia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Línea continua con rombo', esCorrecta: false },
              {
                id: 'b',
                texto: 'Línea discontinua con flecha',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Línea con triángulo blanco apuntando hacia la superclase',
                esCorrecta: true,
              },
              { id: 'd', texto: 'Línea curva con punto', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! La herencia se representa con una línea y triángulo blanco hacia la superclase.',
            mensaje_incorrecto:
              'Incorrecto. La relación de herencia se representa con una línea y triángulo blanco.',
          },
          {
            id: 5,
            texto:
              '¿Qué describe principalmente un diagrama de secuencia en UML?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La estructura estática del sistema',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El ciclo de vida de una clase',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La interacción temporal entre objetos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'La relación entre módulos físicos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El diagrama de secuencia describe la interacción temporal entre objetos.',
            mensaje_incorrecto:
              'Incorrecto. El diagrama de secuencia describe la interacción temporal entre objetos.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
