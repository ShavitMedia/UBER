import React, { useState } from 'react';

function Goals() {
  const [dailyGoal, setDailyGoal] = useState('');
  const [weeklyGoal, setWeeklyGoal] = useState('');
  const [monthlyGoal, setMonthlyGoal] = useState('');

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Metas</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Meta Diária"
          value={dailyGoal}
          onChange={(e) => setDailyGoal(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Meta Semanal"
          value={weeklyGoal}
          onChange={(e) => setWeeklyGoal(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Meta Mensal"
          value={monthlyGoal}
          onChange={(e) => setMonthlyGoal(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Metas Atuais:</h3>
        <p>Diária: {dailyGoal}</p>
        <p>Semanal: {weeklyGoal}</p>
        <p>Mensal: {monthlyGoal}</p>
      </div>
    </div>
  );
}

export default Goals;
