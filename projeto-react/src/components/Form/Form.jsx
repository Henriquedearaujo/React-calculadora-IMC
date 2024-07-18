// src/components/Form/Form.jsx

import React, { useState } from 'react';
import './form.css';

function Form({ calcularIMC }) {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularIMC(altura, peso);
  };

  return (
    <form onSubmit={handleSubmit} class="form">
      <div class='form-group'>
        <label htmlFor="altura" >Altura (em metros):</label>
        <input
          type="number"
          placeholder="1,0"
          id="altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          step="0.01"
          class="input"
          required
        />
      </div>
      <div class='form-group'>
        <label class="label" htmlFor="peso">Peso (em kg):</label>
        <input
          type="number"
          placeholder="00"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          step="1.0"
          class="input"
          required
        />
      </div>
      <button type="submit" class="button">Calcular IMC</button>
    </form>
  );
}

export default Form;
