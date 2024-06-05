import React, { useState } from 'react';

export const CalculoIMC = () => {

  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);

  const calculateIMC = () => {
    if (!weight || !height) {
      alert('Por favor, introduce tu peso y altura.');
      return;
    }

    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100;

    const calculatedIMC = weightInKg / (heightInMeters * heightInMeters);
    setIMC(calculatedIMC.toFixed(2));
  };

  const getImageForIMC = () => {
    if (!imc) return null;

    if (imc < 18.5) {
      return <img src="src/img/Bajo Peso.png" alt="Bajo peso" />;
    } else if (imc >= 18.5 && imc < 24.9) {
      return <img src="src/img/Normal.png" alt="Normal" />;
    } else if (imc >= 25 && imc < 29.9) {
      return <img src="src/img/SobrePeso.png" alt="Sobrepeso" />;
    } else {
      return <img src="src/img/Obesidad.png" alt="Obesidad" />;
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <label>
        Peso (kg):
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      <br />
      <label>
        Altura (cm):
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />
      <button onClick={calculateIMC}>Calcular IMC</button>
      {imc && <p>Tu IMC es: {imc}</p>}
      {getImageForIMC()}
    </div>
  );
};



