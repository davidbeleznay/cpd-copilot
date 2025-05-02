import { useState } from 'react'

const initialCPDState = {
  forestry: { total: 0, required: 30, deadline: 'Nov 30, 2025' },
  engineering: { total: 0, required: 60, deadline: 'Jun 30, 2026' }
};

function App() {
  const [cpd, setCpd] = useState(initialCPDState);

  const addSample = () => {
    setCpd(prev => ({
      forestry: { ...prev.forestry, total: prev.forestry.total + 3 },
      engineering: { ...prev.engineering, total: prev.engineering.total + 3 }
    }));
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">🧠 CPD Copilot Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['forestry', 'engineering'].map(key => (
          <div key={key} className="p-4 bg-white shadow rounded">
            <h2 className="text-lg font-semibold capitalize">{key}</h2>
            <div className="bg-gray-200 h-2 rounded mt-2 mb-1">
              <div className="bg-green-500 h-2 rounded" style={{ width: `${(cpd[key].total / cpd[key].required) * 100}%` }}></div>
            </div>
            <p>{cpd[key].total} / {cpd[key].required} hours logged</p>
            <p className="text-sm text-gray-500">Deadline: {cpd[key].deadline}</p>
          </div>
        ))}
      </div>
      <button onClick={addSample} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Add Sample Climate Readiness Activity</button>
    </div>
  );
}

export default App;