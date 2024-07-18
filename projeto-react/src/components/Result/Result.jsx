// src/components/Result/Result.jsx

import React from 'react';
import './result.css';

function Result({ imc, classificacao }) {
  return (
    <div class="result">
      <h2 class="imc">IMC: {imc}</h2>
      <h3>Classificação: {classificacao}</h3>
    </div>
  );
}

export default Result;
