import React, { useState } from 'react';
import Expenses from './components/Expenses';
import Goals from './components/Goals';

function App() {
  const [activeTab, setActiveTab] = useState('expenses');

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-black text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Controle de Gastos</h1>
      <div className="flex justify-around mb-6 border-b border-gray-700">
        <button
          onClick={() => setActiveTab('expenses')}
          className={`p-2 ${activeTab === 'expenses' ? 'border-b-2 border-white' : 'text-gray-400'}`}
        >
          Despesas
        </button>
        <button
          onClick={() => setActiveTab('goals')}
          className={`p-2 ${activeTab === 'goals' ? 'border-b-2 border-white' : 'text-gray-400'}`}
        >
          Metas
        </button>
      </div>
      {activeTab === 'expenses' ? <Expenses /> : <Goals />}
    </div>
  );
}

export default App;
