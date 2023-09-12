import React, { useState } from "react";

function Calculator() {
  const [birthdate, setBirthdate] = useState("");
  const [savingsAmount, setSavingsAmount] = useState("");

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };

  const handleSavingsAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSavingsAmount(e.target.value);
  };

  const calculateInterest = () => {
    console.log(birthdate);
    console.log(savingsAmount);
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
        <button
          onClick={calculateInterest}
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Berechnen
        </button>
      </div>
    </div>
  );
}

export default Calculator;
