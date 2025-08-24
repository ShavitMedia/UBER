import React, { useState } from 'react';

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setDescription('');
      setAmount('');
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-2"
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
        />
      </div>
      <button
        onClick={addExpense}
        className="w-full bg-white text-black p-2 rounded hover:bg-gray-200"
      >
        Adicionar Despesa
      </button>
      <ul className="mt-4">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between p-2 border-b border-gray-700">
            <span>{expense.description}</span>
            <span>R$ {expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold">
        Total: R$ {totalExpenses.toFixed(2)}
      </div>
    </div>
  );
}

export default Expenses;
