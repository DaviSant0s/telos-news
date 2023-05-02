import React from 'react';
import './index.css';
import image from './image.png'

export default function News() {
  return (
    <div className='text'>
        <p>Então você está sentindo estresse, ansiedade e às vezes uma alteração de humor muito rápida? Talvez você possa estar sofrendo da Síndrome de Burnout ou Síndrome do Esgotamento! Aqui iremos te explicar de maneira bem sintetizada o que é o burnout, seu significado, alguns sintomas, formas de tratamento e como lidar. Continue lendo!</p>

        <h2>
            Burnout: o que é?
        </h2>

        <p>O burnout ou síndrome do esgotamento profissional é um distúrbio psíquico advindo de condições de trabalho desgastantes. Fazer muitas horas extras, ter uma pressão excessiva e ininterrupta sobre seu cargo são alguns dos motivos que podem te gerar essa sensação de esgotamento e desânimo para o trabalho.</p> 

        <p>Como características principais, possui  o estado de tensão emocional e estresse crônico devido a condições de trabalhos físicos, emocionais e psicológicos desgastantes. Profissões na área da educação, saúde, segurança entre outras estão entre as mais afetadas devido ao alto envolvimento interpessoal. Na quarentena, devido ao covid-19, muitos profissionais têm reclamado do aumento da jornada de trabalho e aumento de atribuições, gerando um grande estresse e desconforto.</p>

        <img src={image} alt="" />

        <h2>Sintomas do Burnout</h2>

        <p>O sintoma mais característico da síndrome é a sensação de esgotamento físico e emocional. Além disso, sintomas como dores de cabeça, cansaço, palpitação, pressão alta, insônia também podem estar associadas ao distúrbio.</p>

        {/* lista */}

        <h2>Tratamento e atitudes</h2>

        <p>Dentre os tratamentos, o uso de antidepressivos e psicoterapia são prescritos, além de atividades físicas regulares serem altamente recomendadas para ajudar a controlar os sintomas.</p> 

        <p>Para lidar com esse momento tão delicado no trabalho, primeiramente deve-se haver sinceridade entre o colaborador e a liderança. Explicar o que se sente, como se sente é muito importante para que o acompanhamento possa ocorrer da melhor maneira possível. Converse com seu líder e seja totalmente honesto!</p> 

        <p>Novos hábitos e mudanças de vida podem auxiliar como por exemplo a inserção de exercícios físicos na rotina. Reserve um tempo para investir em si mesmo e nutrir seu corpo com boas sensações e momentos! Te garanto que fará super bem. </p>

        <p>Quem tem burnout na maioria das vezes não percebe. Então esteja atento aos feedbacks de pessoas que te acompanham e gostam de você. Procure um médico para ter o acompanhamento dos medicamentos e tratamento e não se esqueça que sua saúde mental é tão importante quanto a física, por isso, cuide!</p>


    </div>
  );
}
