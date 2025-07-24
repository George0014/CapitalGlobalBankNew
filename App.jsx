import { useState } from 'react';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState('dashboard');

  const login = (e) => {
    e.preventDefault();
    if (username === 'Andre312' && password === 'Dre4u') {
      setLoggedIn(true);
    } else {
      alert('Incorrect username or password.');
    }
  };

  if (!loggedIn) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={login} className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">Capital Global Bank</h1>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 w-full mb-4" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mb-4" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full rounded">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8 font-sans bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Welcome to Capital Global Bank</h1>
      {view === 'dashboard' && (
        <>
          <div className="bg-white p-6 rounded shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Account Balance</h2>
            <p className="text-2xl text-green-600">$30,000,000</p>
          </div>
          <div className="bg-white p-6 rounded shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">Withdrawable Balance</h2>
            <p className="text-2xl text-green-600">$28,934,089</p>
          </div>
          <button onClick={() => setView('withdraw')} className="bg-yellow-500 text-white px-4 py-2 rounded">Withdraw</button>
        </>
      )}
      {view === 'withdraw' && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Withdrawal Form</h2>
          <input type="text" placeholder="Enter amount" className="border p-2 w-full mb-4" />
          <button onClick={() => alert('Authorization Code needed to complete withdrawal. Please contact your account officer.')} className="bg-red-600 text-white px-4 py-2 rounded">Submit Withdrawal</button>
          <button onClick={() => setView('dashboard')} className="ml-4 text-blue-600">Back to Dashboard</button>
        </div>
      )}
    </div>
  );
}
