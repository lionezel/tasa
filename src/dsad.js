import React, { useState } from 'react';

function InterestConversion() {
  const [interestRate, setInterestRate] = useState(0);
  const [periods, setPeriods] = useState(1);
  const [convertedRate, setConvertedRate] = useState(0);

  const handleInterestChange = (event) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const handlePeriodsChange = (event) => {
    setPeriods(parseInt(event.target.value));
  };

  const convertEffectiveToEffective = () => {
    // Lógica para convertir tasas efectivas a efectivas
    setConvertedRate(interestRate * periods);
  };

  const convertEffectiveToNominal = () => {
    // Lógica para convertir tasas efectivas a nominales
    setConvertedRate((Math.pow(1 + interestRate, periods) - 1) * 100);
  };

  const convertNominalToNominal = () => {
    // Lógica para convertir tasas nominales a nominales
    setConvertedRate(interestRate * periods);
  };

  const convertVencidasToAnticipadas = () => {
    // Lógica para convertir tasas vencidas a anticipadas
    setConvertedRate(interestRate / (1 + interestRate * periods));
  };

  return (
    <div>
      <h2>Conversión de Tasas de Interés</h2>
      <div>
        <label>
          Tasa de interés:
          <input type="number" value={interestRate} onChange={handleInterestChange} />
        </label>
      </div>
      <div>
        <label>
          Períodos:
          <input type="number" value={periods} onChange={handlePeriodsChange} />
        </label>
      </div>
      <div>
        <button onClick={convertEffectiveToEffective}>Efectiva a Efectiva</button>
        <button onClick={convertEffectiveToNominal}>Efectiva a Nominal</button>
        <button onClick={convertNominalToNominal}>Nominal a Nominal</button>
        <button onClick={convertVencidasToAnticipadas}>Vencidas a Anticipadas</button>
      </div>
      <div>
        <h3>Tasa convertida: {convertedRate}%</h3>
      </div>
    </div>
  );
}

export default InterestConversion;
