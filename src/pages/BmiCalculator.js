import React, { useState } from 'react';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBmi = () => {
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) setCategory('Underweight');
    else if (calculatedBmi < 25) setCategory('Normal weight');
    else if (calculatedBmi < 30) setCategory('Overweight');
    else setCategory('Obese');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">BMI Calculator</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block mb-2">Height (cm)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Weight (kg)</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button
          onClick={calculateBmi}
          className="w-full py-2 bg-indigo-600 text-white rounded"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-6 p-4 bg-gray-50 rounded">
            <h3 className="font-bold">Your Results:</h3>
            <p>BMI: <span className="font-bold">{bmi}</span></p>
            <p>Category: <span className="font-bold">{category}</span></p>
            <div className="mt-4">
              <h4 className="font-bold">BMI Categories:</h4>
              <ul className="list-disc pl-5">
                <li>Underweight: BMI less than 18.5</li>
                <li>Normal weight: BMI 18.5–24.9</li>
                <li>Overweight: BMI 25–29.9</li>
                <li>Obese: BMI 30 or greater</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};