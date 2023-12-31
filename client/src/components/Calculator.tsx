import React, { useState } from "react";

function Calculator() {
  const [birthdate, setBirthdate] = useState("");
  const [savingsAmount, setSavingsAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [finalAmount, setFinalAmount] = useState(Number);

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };

  const handleSavingsAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSavingsAmount(e.target.value);
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterestRate(e.target.value);
  };

  const calculateInterest = () => {
    if (!birthdate || savingsAmount === "" || interestRate === "") {
      alert("Bitte füllen Sie jedes Eingabefeld fachgerecht aus!");
      return;
    }
    const amountAsNumber = parseFloat(savingsAmount);
    const interestRateAsNumber = parseFloat(interestRate);
    const birthdateAsNumber = new Date(birthdate).getDate();
    const interest = (amountAsNumber * interestRateAsNumber) / 100;
    const dailyInterest = interest / 360;
    const interestUntilBirthday = dailyInterest * birthdateAsNumber;
    const finalAmount = interest + interestUntilBirthday;
    setFinalAmount(finalAmount);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold mb-4">Marchzinsrechner</h2>
        <div className="mb-4">
          <label htmlFor="birthdate" className="block font-medium text-gray-600">
            Geburtsdatum:
          </label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="savingsAmount" className="block font-medium text-gray-600">
            Sparbetrag:
          </label>
          <input
            type="number"
            id="savingsAmount"
            value={savingsAmount}
            onChange={handleSavingsAmountChange}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="interestRate" className="block font-medium text-gray-600">
            Zinssatz (%):
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={handleInterestRateChange}
            className="border rounded-lg p-2 w-full"
          />
        </div>
        <button
          onClick={() => {
            calculateInterest();
          }}
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Berechnen
        </button>
        {finalAmount !== 0 && (
          <div className="mt-4">
            <p>Bruttozins: {finalAmount.toFixed(2)} CHF</p>
            <p>Nettozins nach Verrechnungssteuer: {(finalAmount * 0.65).toFixed(2)} CHF</p>
            <p>Verrechnungssteuer: {(finalAmount * 0.35).toFixed(2)} CHF</p>
            <p>
              Endbetrag auf Konto {(finalAmount * 0.65 + parseFloat(savingsAmount)).toFixed(2)} CHF
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
