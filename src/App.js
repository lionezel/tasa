import React, { useState } from 'react';

function InterestConversion() {
  const [interestRate, setInterestRate] = useState(0);
  const [initialPeriods, setInitialPeriods] = useState(1);
  const [targetPeriods, setTargetPeriods] = useState(1);
  const [convertedRateInitial, setConvertedRateInitial] = useState(0);
  const [convertedRateTarget, setConvertedRateTarget] = useState(0);

  const handleInterestChange = (event) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const handleInitialPeriodsChange = (event) => {
    setInitialPeriods(parseInt(event.target.value));
  };

  const handleTargetPeriodsChange = (event) => {
    setTargetPeriods(parseInt(event.target.value));
  };

  const convertEffectiveToEffective = () => {
    // Lógica para convertir tasas efectivas a efectivas
    setConvertedRateInitial(interestRate * initialPeriods);
    setConvertedRateTarget(interestRate * targetPeriods);
  };

  const convertEffectiveToNominal = () => {
    // Lógica para convertir tasas efectivas a nominales
    setConvertedRateInitial((Math.pow(1 + interestRate, initialPeriods) - 1) * 100);
    setConvertedRateTarget((Math.pow(1 + interestRate, targetPeriods) - 1) * 100);
  };

  const convertNominalToNominal = () => {
    // Lógica para convertir tasas nominales a nominales
    setConvertedRateInitial(interestRate * initialPeriods);
    setConvertedRateTarget(interestRate * targetPeriods);
  };

  const convertVencidasToAnticipadas = () => {
    // Lógica para convertir tasas vencidas a anticipadas
    setConvertedRateInitial(interestRate / (1 + interestRate * initialPeriods));
    setConvertedRateTarget(interestRate / (1 + interestRate * targetPeriods));
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
          Períodos Inicial:
          <input type="number" value={initialPeriods} onChange={handleInitialPeriodsChange} />
        </label>
        <label>
          Períodos Target:
          <input type="number" value={targetPeriods} onChange={handleTargetPeriodsChange} />
        </label>
      </div>
      <div>
        <button onClick={convertEffectiveToEffective}>Efectiva a Efectiva</button>
        <button onClick={convertEffectiveToNominal}>Efectiva a Nominal</button>
        <button onClick={convertNominalToNominal}>Nominal a Nominal</button>
        <button onClick={convertVencidasToAnticipadas}>Vencidas a Anticipadas</button>
      </div>
      <div>
        <h3>Tasa convertida con {initialPeriods} períodos: {convertedRateInitial}%</h3>
        <h3>Tasa convertida con {targetPeriods} períodos: {convertedRateTarget}%</h3>
      </div>
    </div>
  );
}

export default InterestConversion;
