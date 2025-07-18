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
