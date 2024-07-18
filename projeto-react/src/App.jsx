// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Result from './components/Result/Result';

function App() {
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (altura, peso) => {
    if (altura > 0 && peso > 0) {
      const resultadoIMC = peso / (altura * altura);
      setImc(resultadoIMC.toFixed(2));
      definirClassificacao(resultadoIMC);
    } else {
      alert('Por favor, insira altura e peso válidos.');
    }
  };

  const definirClassificacao = (resultadoIMC) => {
    if (resultadoIMC < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
      setClassificacao('Peso normal');
    } else if (resultadoIMC >= 25 && resultadoIMC < 29.9) {
      setClassificacao('Sobrepeso');
    } else {
      setClassificacao('Obesidade');
    }
  };

  return (
    <>
      <Header />
      <Form calcularIMC={calcularIMC} />
     <Result imc={imc} classificacao={classificacao} />
    </>
  );
}

export default App;
