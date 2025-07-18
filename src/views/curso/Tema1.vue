<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Rebelión, sedición y asonada'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El estudio de los delitos de rebelión, sedición y asonada, permite comprender cómo el ordenamiento jurídico colombiano sanciona aquellas conductas que atentan contra la estabilidad institucional, el régimen constitucional y el funcionamiento legítimo de las autoridades públicas. Estos delitos, regulados en el Código Penal colombiano, no se limitan únicamente a la desobediencia de normas, sino que representan ataques organizados, deliberados y, en muchos casos, violentos, contra los fundamentos mismos del Estado de Derecho (Llerenas & Tamayo, 1995). 
    
        p(data-aos="fade-left") En términos generales, se trata de delitos de carácter político y colectivo, en los que un grupo de personas, no necesariamente organizado como grupo armado permanente, actúa con el propósito de desestabilizar o alterar el orden institucional. Aunque tienen elementos comunes como la afectación del orden público y la participación múltiple de individuos, cada uno responde a una finalidad y estructura diferentes:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


    .bg-full-width.bg-fondo-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.svg', alt='', style="max-width: 938px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7%" y="40%" numero="+")
                h5 La rebelión
                p Tiene como objetivo derrocar el régimen constitucional o sustituirlo por otro. 
    
              .bg-color-white.box-shadow.p-3(x="26%" y="6.5%" numero="+")
                h5 La asonada
                p Implica un levantamiento tumultuario y violento que no necesariamente tiene fines políticos de largo alcance, pero sí perturba el orden y la autoridad legítima, en un momento determinado.
    
              .bg-color-white.box-shadow.p-3(x="93%" y="41.5%" numero="+")
                h5 La sedición
                p Busca impedir temporalmente, el ejercicio legítimo de autoridad, sin llegar a una ruptura estructural del orden político. 


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Estas conductas presentan una especial complejidad en su interpretación y aplicación, debido a que pueden estar motivadas por convicciones ideológicas, políticas, sociales o incluso, religiosas. Es precisamente esta dimensión política la que ha generado debates en el ámbito jurídico nacional e internacional, especialmente en contextos de transición o conflicto armado, donde es necesario distinguir entre delincuencia común y acciones de carácter político, protegidas por tratados internacionales en determinadas circunstancias.
    
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El análisis jurídico de estos delitos exige no solo conocer sus elementos estructurales, sino también entender el contexto social en el que se presentan. Las causas de la rebelión, la dinámica de la sedición y las circunstancias de una asonada deben examinarse a la luz de principios como la proporcionalidad, la responsabilidad individual y el respeto a los derechos humanos. Además, es fundamental tener claridad sobre el tratamiento penal diferenciado que puede aplicarse en razón de eventuales procesos de paz, indultos o amnistías, lo cual ha sido una constante en la historia jurídica y política de Colombia.


    p(data-aos="fade-left").mb-4 Por lo tanto, el abordaje académico de estos delitos no se agota en su descripción legal, sino que demanda una reflexión más amplia sobre su significado dentro del sistema democrático y sobre la tensión permanente entre el mantenimiento del orden público y la garantía de los derechos políticos y civiles de la ciudadanía.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Rebelión


    .row.mb-5.align-items-center
      .col-lg-8
        .bg-color-7.p-4(data-aos="fade-left").mb-4
          p.mb-0.text-white El delito de rebelión, consagrado en el Artículo 467 del Código Penal colombiano, representa una de las infracciones más graves contra el orden constitucional y legal del Estado, no solo por el uso de medios violentos, sino por la carga simbólica y política que implica alzar las armas contra el gobierno legítimamente constituido. Esta figura penal no solo tipifica un atentado contra la legalidad formal, sino que encarna una amenaza directa al régimen democrático, al sistema de separación de poderes y al principio de soberanía nacional. Se trata de una conducta que desafía abiertamente la autoridad del Estado, mediante la fuerza, con la finalidad explícita de sustituir el régimen constitucional vigente, lo que la convierte en un acto de insurrección de carácter político, ideológico y estructural (Llerenas & Tamayo, 1995).
        
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    
    AcordionA(tipo="b").mb-5
      .div(titulo="Según el Código Penal")
        .row
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.png", style="max-width: 293px").mx-auto

          .col-lg
            p.mb-0 Incurre en el delito de rebelión quien se alza en armas con el propósito de derrocar al Gobierno o de suprimir o modificar, total o parcialmente, el orden constitucional establecido. Esta descripción incorpora tanto elementos objetivos como subjetivos, que deben ser interpretados a la luz de la teoría general del delito, del contexto histórico y político, y de los principios del derecho penal contemporáneo. En su dimensión objetiva, el verbo rector alzarse en armas, remite a una conducta activa, sostenida y organizada, que implica el uso real o inminente de la fuerza. No se trata de una protesta aislada, ni de una manifestación violenta espontánea, sino de un acto coordinado, generalmente colectivo, que recurre al uso de armas como medio para subvertir el poder del Estado. La rebelión no se configura por la simple tenencia de armas, ni por la ideología disidente, sino por la puesta en marcha de un proyecto insurreccional que busque quebrar la estructura del poder institucional. En ese sentido, se exige una manifestación efectiva de oposición armada, orientada a deslegitimar al gobierno, derrocar sus autoridades o sustituir el sistema político por otro de naturaleza distinta (Herrero Bervera, 2001).
    
      .div(titulo="En cuanto al elemento subjetivo")
        .row
          .col-lg-auto
            img(src="@/assets/curso/tema1/7.png", style="max-width: 293px").mx-auto

          .col-lg
            p.mb-0 El delito de rebelión requiere un dolo específico, es decir, una intención deliberada y consciente de derrocar al Gobierno o suprimir el régimen constitucional. Esta intención distingue la rebelión de otras conductas como el terrorismo, el secuestro con fines económicos o el concierto para delinquir, que pueden compartir medios violentos, pero no persiguen una transformación estructural del orden político. La rebelión es, en ese sentido, un delito de carácter político, en el que la finalidad no es el beneficio individual ni el lucro, sino la instauración de un modelo alternativo de organización del poder. Esta intención puede inferirse del discurso ideológico del grupo rebelde, de su estructura jerárquica, de los objetivos expresados públicamente, de los blancos estratégicos de sus ataques como instalaciones militares, sedes del gobierno, o infraestructuras de comunicación estatal y de su rechazo a los mecanismos institucionales de participación democrática.
    
      .div(titulo="Ejemplo")
        .row
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.png", style="max-width: 293px").mx-auto

          .col-lg
            p.mb-0 Un ejemplo paradigmático en la historia reciente de Colombia, es el accionar de las Fuerzas Armadas Revolucionarias de Colombia FARC, cuyo surgimiento se remonta a la década de 1960 y cuya actividad armada se prolongó por mucho tiempo. Esta organización guerrillera, sostuvo una lucha armada extensa contra el Estado, con el objetivo expreso de derrocar las instituciones democráticas y sustituir el modelo económico y político colombiano por uno socialista de corte marxista leninista. Durante décadas, las FARC llevaron a cabo acciones bélicas, tomas de municipios, secuestros, sabotajes y enfrentamientos armados con las fuerzas del Estado. A pesar de las múltiples afectaciones que su accionar causó a la población civil, el carácter político de su lucha fue reconocido tanto nacional como internacionalmente, lo que permitió que, en el marco del proceso de paz iniciado formalmente en La Habana en el 2012, se habilitaran mecanismos de justicia transicional como la amnistía y el indulto para los delitos políticos no atroces (Herrero Bervera, 2001).
    

    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Precisamente, una de las características más importantes del delito de rebelión es su reconocimiento como delito político, lo que implica un tratamiento diferenciado frente a otros delitos comunes.



    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7.order-lg-1
              p La Constitución Política de Colombia, en armonía con los estándares internacionales de los derechos humanos, establece que los delitos políticos, en tanto expresión de conflictos de orden ideológico, pueden ser objeto de medidas excepcionales como la amnistía, el indulto o la suspensión de la pena, siempre que no estén vinculados a graves violaciones a los derechos humanos, crímenes de guerra o delitos de lesa humanidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7.order-lg-1
              p En este sentido, la Corte Suprema de Justicia ha sostenido que el fundamento del tratamiento especial, no radica en la aprobación del medio utilizado la violencia armada, sino en el reconocimiento de la naturaleza política del fin perseguido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              p De ahí que, en contextos de transición hacia la paz, la rebelión pueda ser objeto de mecanismos restaurativos, siempre y cuando se asegure la verdad, la reparación a las víctimas y las garantías de no repetición.

    p(data-aos="fade-left").mb-4 Desde una perspectiva procesal, el juzgamiento de la rebelión presenta particularidades significativas:

    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Protección Internacional y Asilo Político")
            p En primer lugar, los procesados por este delito, pueden solicitar medidas de protección internacional, como el asilo político, cuando logran demostrar que su alzamiento fue parte de una lucha política y no implicó actos de barbarie o violaciones graves al derecho humanitario.
    
          .div(titulo="Justicia Transicional y JEP en Colombia")
            p Asimismo, en Colombia, quienes enfrentan cargos por rebelión, pueden acogerse a figuras procesales alternativas o a tratamientos especiales contemplados por la justicia transicional, como los ofrecidos por la Jurisdicción Especial para la Paz JEP, creada tras la firma del Acuerdo Final de Paz en el 2016.
    
          .div(titulo="Régimen Sancionatorio Diferenciado de la JEP y Exclusiones")
            p Esta jurisdicción reconoce el carácter político de la rebelión y establece un régimen sancionatorio diferenciado, orientado más a la verdad, la reparación y la reintegración, que al castigo punitivo tradicional. Sin embargo, este tratamiento se reserva únicamente para quienes no hayan incurrido en delitos internacionales o graves infracciones al derecho internacional humanitario, como masacres, desapariciones forzadas, violencia sexual sistemática o reclutamiento de menores (Agudo Fernández & Jaén Vallejo, 2019).


    p(data-aos="fade-left").mb-4 Es importante diferenciar el delito de rebelión de otras figuras penales que, aunque pueden estar relacionadas, no comparten sus mismos elementos estructurales:

    .bg-full-width.bg-color-3.mb-0
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La sedición
                p.mb-0 También implica un alzamiento contra la autoridad, pero sin el uso de armas ni la intención de derrocar el régimen constitucional. Su finalidad es alterar el orden público o impedir el cumplimiento de las leyes, pero no sustituir el sistema político.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La asonada
                p.mb-0 Se refiere a manifestaciones tumultuarias o disturbios callejeros con violencia, pero sin organización militar ni finalidad política definida. Estas distinciones son fundamentales, dado que cada tipo penal implica una valoración distinta del bien jurídico lesionado, del nivel de amenaza al Estado y de la respuesta sancionatoria que debe ofrecer el sistema penal.


    .row.mb-5.align-items-center
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-5.p-4.py-lg-5(data-aos="fade-left").mb-4
          p.mb-0 La experiencia colombiana ha mostrado que el delito de rebelión suele surgir en contextos de exclusión, pobreza, desigualdad estructural y falta de canales efectivos de participación política. Si bien, ninguna causa justifica el uso de la violencia, resulta innegable que los fenómenos de insurgencia armada tienen raíces sociales, económicas y políticas profundas que deben ser abordadas integralmente. Por eso, en los escenarios de construcción de paz, el tratamiento penal de la rebelión no puede limitarse a la lógica de la retribución, sino que debe incorporar principios restaurativos, garantías de justicia, y caminos viables para la reinserción social de los excombatientes, en consonancia con el mandato constitucional de paz (Agudo Fernández & Jaén Vallejo, 2019). 


    .row.mb-5
      .col-lg-8
        .bg-color-6.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 En conclusión, el delito de rebelión constituye una infracción grave y compleja dentro del ordenamiento jurídico penal colombiano, que combina elementos de violencia armada, motivación política e impacto institucional. Su tratamiento requiere un equilibrio entre el principio de legalidad penal y los fines superiores de la justicia y la reconciliación. Comprender sus elementos normativos, su desarrollo histórico, su diferenciación respecto de otras conductas afines y su abordaje en el marco del derecho nacional e internacional, resulta esencial para garantizar una aplicación justa y eficaz del derecho penal. En contextos de justicia transicional o de negociación política, el manejo adecuado del delito de rebelión, puede marcar la diferencia entre una prolongación del conflicto o una oportunidad real para la paz, la reconstrucción del tejido social y el fortalecimiento del Estado democrático de derecho.
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in").mb-4.mb-lg-0


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Sedición


    p(data-aos="fade-left").mb-4 La comprensión de los delitos que afectan el orden institucional y la autoridad pública es esencial para el estudio del Derecho Penal en Colombia.


    .bg-full-width.bg-color-8.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/15.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Sedición
            p.mb-4(data-aos="fade-right") En el PDF sobre Sedición, se analiza en profundidad esta conducta punible que, sin implicar una intención revolucionaria, representa un alzamiento colectivo dirigido a obstruir el ejercicio legítimo del poder estatal. A través de fundamentos normativos, elementos estructurales y ejemplos aplicados, se expone cómo el Derecho Penal sanciona estas formas de desobediencia organizada, que ponen en riesgo el funcionamiento de las instituciones democráticas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Sedición


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Asonada


    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") El delito de asonada, recogido en el Artículo 469 del Código Penal colombiano, constituye una figura normativa que funciona como barrera de contención entre el legítimo derecho a la protesta y el uso arbitrario de la fuerza colectiva para coaccionar a la autoridad. 
    
    
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 La tipificación de esta conducta responde a la necesidad de preservar la estabilidad institucional y de salvaguardar el principio de que las decisiones estatales deben adoptarse a través de los canales democráticos y no bajo la presión de la violencia. Aunque su enunciado normativo parezca conciso, su alcance práctico es mucho más extenso, pues abarca una amplia gama de situaciones en las que la indignación social, la frustración o la inconformidad traspasan el umbral de la legalidad y se convierten en actos que lesionan el orden público y la seguridad de las personas (Ramírez López, Rangel Angulo & Sanabria Villamizar, 2023). 

        p(data-aos="fade-left") La asonada exige la concurrencia de al menos tres elementos sustanciales:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")


    TabsC.color-acento-contenido.mb-0
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Pluralidad de Agentes" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Pluralidad de Agentes
            p En primer lugar, se requiere una pluralidad de agentes que actúen de manera tumultuaria, generando una masa crítica capaz de producir intimidación. Esta pluralidad no se limita únicamente al número de participantes, sino que implica una actuación coordinada o simultánea que genere un efecto intimidatorio sobre las autoridades o la población.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/17.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Violencia Material" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Violencia Material
            p En segundo término, esta masa debe recurrir a la violencia material, ya sea mediante agresiones directas, destrucción de instalaciones, o amenazas creíbles que constriñan la voluntad de las autoridades. La violencia material puede manifestarse de diversas formas, desde actos de vandalismo hasta amenazas que generen temor legítimo en las autoridades.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Propósito Coactivo" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Propósito Coactivo
            p Finalmente debe acreditarse que el acto violento tenga un propósito coactivo inmediato, es decir, que busque forzar a las autoridades a realizar, abstenerse de realizar o suspender alguna de sus funciones. Este elemento subjetivo es fundamental para distinguir la asonada de otras manifestaciones de violencia colectiva que no persiguen este objetivo específico.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='')


    .bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/icono.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas tres notas permiten distinguir la asonada de los disturbios espontáneos que, aun siendo violentos, carecen de un propósito de presión institucional, así como de la rebelión, que pretende la sustitución del régimen constitucional, y de la sedición, que busca la paralización prolongada de la autoridad.


    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En la práctica forense, uno de los retos centrales radica en identificar cuándo una protesta, inicialmente legítima, se convierte en asonada. Un ejemplo revelador ocurrió en el marco de una huelga de transportadores, donde un grupo de manifestantes bloqueó vías principales durante varios días. Mientras los bloqueos, aunque ilícitos en materia de tránsito, no configuran per se asonada, la situación cambió radicalmente cuando los participantes incendiaron vehículos oficiales con el objetivo expreso de obligar a la Alcaldía a retirar un decreto de restricción vehicular. La quema de bienes públicos para forzar la derogatoria de un acto administrativo constituye un uso de violencia colectiva con finalidad coactiva, lo que encuadra dentro del tipo penal. En otra ocasión, comerciantes de un municipio que exigían la revocatoria de un alza impositiva invadieron y saquearon la secretaría de hacienda local. El acto no se orientó a derrocar a las autoridades ni a usurpar sus funciones, sino a obligarlas a revocar la medida. Esa presión violenta, estructurada en masa, culminó en la formulación de cargos por asonada.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/20.svg', alt='')



    .row.align-items-center.mb-5
      .col-lg-auto
        img(src="@/assets/curso/tema1/21.svg", style="max-width: 85px").mx-auto
      .col-lg
        p.mb-0 No obstante, la lógica de protección del derecho a la protesta obliga a un examen minucioso de la proporcionalidad estatal. Así lo subrayó la Corte Suprema de Justicia al estudiar un caso en que un grupo de campesinos bloqueó la entrada a una oficina de restitución de tierras, limitándose a sentarse pacíficamente y a levantar pancartas. La Policía retiró a los manifestantes y la Fiscalía inició investigaciones por asonada. El Alto Tribunal concluyó que no se configuraba el delito porque, pese a la afectación temporal de la actividad administrativa, no se usó la violencia ni se amenazó a los funcionarios. La manifestación se mantuvo dentro de los márgenes del Artículo 37 Constitucional. Esta distinción es importante para evitar que el tipo penal se convierta en instrumento de persecución política.


    .row.mb-5
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 La dogmática penal resalta que la asonada es un delito de resultado cortado, esto es, basta la mera conducta de violencia con intención coactiva; no es necesario que la autoridad ceda ante la presión ni que se produzcan los efectos deseados. Esta característica se explica desde la teoría de los delitos de peligro abstracto, pues el legislador castiga el riesgo que supone la sustitución de los canales democráticos por la fuerza tumultuaria, aun cuando no llegue a consumarse la imposición del reclamo. Además, se trata de un delito plurisubjetivo de convergencia, donde la conducta individual se diluye en la acción colectiva. No es imprescindible probar autoría concreta de cada participante; la teoría del dominio funcional del hecho permite atribuir responsabilidad a quien, mediante actos de liderazgo, instigación o contribución material, integra la masa violenta y coopera de modo sustancial con el propósito de coacción (Ramírez López, Rangel Angulo & Sanabria Villamizar, 2023).
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-color-7.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4.text-white
            p.mb-0(data-aos="fade-up") La extensión del tipo penal se revela también en la posibilidad de concurso con otros delitos. Cuando la asonada deriva en lesiones personales, daño en bien ajeno o perturbación de transportes, la jurisprudencia permite sancionar ambos comportamientos de manera independiente, aplicando las reglas del concurso real. Esto responde al principio de lesividad acumulada. La asonada lesiona el orden público institucional, mientras las conductas concomitantes lesionan bienes jurídicos adicionales, lo que justifica la aplicación de penas distintas y acumulables.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/23.png', alt='')


    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b").acordion-a-2
          .div(titulo="Graduación punitiva")
            p En cuanto a la graduación punitiva, la pena básica de 12 a 24 meses de prisión, puede incrementarse si concurren circunstancias agravantes. Entre ellas se destaca la utilización de armas letales o explosivos, la afectación de servicios públicos esenciales, por ejemplo, la destrucción de redes de energía que abastecen a hospitales, o la participación de servidores públicos. Este último agravante cobra especial relevancia cuando miembros de la fuerza pública, en lugar de contener la violencia, se suman a la presión tumultuaria o facilitan la coerción contra sus propias autoridades. La doctrina considera que estos agravantes reflejan un reproche social mayor, pues potencian la peligrosidad de la conducta y dificultan la contención estatal.
          .div(titulo="Dimensión criminológica")
            p La dimensión criminológica de la asonada, revela fenómenos sociales complejos. Muchas veces surge en entornos de precariedad, ausencia de canales de interlocución efectivos y desconfianza hacia las instituciones. Este contexto no exime de responsabilidad penal, pero exige políticas públicas que fortalezcan los mecanismos de diálogo y la presencia estatal en territorios históricamente marginados. La Organización de las Naciones Unidas ha llamado la atención sobre la necesidad de garantizar que las fuerzas de seguridad respondan con criterios de legalidad, necesidad y proporcionalidad, a fin de evitar que la represión desmedida de disturbios legitime nuevas formas de violencia colectiva.
          .div(titulo="Análisis comparado")
            p El análisis comparado muestra que la figura de la asonada tiene equivalentes en otros ordenamientos. El Código Penal español establece el delito de desórdenes públicos agravados cuando se actúa en grupo con violencia grave para impedir o coaccionar la actuación de la autoridad. El Código Penal argentino tipifica un delito similar bajo la denominación de turbación del orden público. Estas figuras, aunque con matices propios, comparten la preocupación por limitar la violencia de masas sin criminalizar la protesta legítima (Ramírez López, Rangel Angulo & Sanabria Villamizar, 2023).
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/24.png", alt="").mb-4.mb-lg-0


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 En Colombia, la mayor parte de sentencias condenatorias por asonada se originan en contextos urbanos donde confluyen factores de inconformidad social y presencia mediática. Sin embargo, también existen fallos por asonada rural, como el registrado en una vereda del Cauca, donde pobladores iracundos atacaron un puesto de salud y amenazaron al personal médico para exigir la asignación de ambulancias. El tribunal sostuvo que la penetración violenta de un establecimiento sanitario, sumada a la coacción sobre los funcionarios, configuraba la conducta, pese a que no se trataba de una protesta masiva en una capital de departamento.
    
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 La doctrina penal insiste en que la respuesta judicial debe ser diferenciada. No es lo mismo la actuación de un líder que convoca, dirige y participa activamente en la violencia, que la de un sujeto que se integra a la masa por curiosidad o miedo, sin contribución relevante. La teoría del autor de atrás o inspirador quien planifica y dirige sin presentarse en la escena también ha sido objeto de decisiones jurisprudenciales, pues su aporte intelectual puede ser tan determinante como la violencia directa de quienes golpean o destruyen.


    .bg-full-width.bg-color-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/26.svg", style="max-width: 100px").mx-auto
          .col-lg.text-white
            p.mb-0 Finalmente, es importante subrayar la relevancia del principio de oportunidad. La Fiscalía puede considerar la aplicación de este mecanismo cuando los daños sean menores, la violencia no haya causado lesiones serias y los acusados reparen integralmente los perjuicios. Esta salida alternativa busca centrar la persecución penal en los casos más graves y permite que la justicia adopte medidas restaurativas que restablezcan la confianza entre comunidad y autoridad.
    
    
    
    
    


    
    

    

    
    
    
    
    
    
    
    

        

    



    

    
    


  
    

    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
