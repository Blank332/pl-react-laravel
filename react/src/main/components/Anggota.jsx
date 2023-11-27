import React from 'react';

function AnggotaPage() {
  const anggotas = [
    { id: 101, name: 'John Doe', email: 'john@example.com' },
    { id: 102, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more anggotas as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">anggotas</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {anggotas.map(anggota => (
            <tr key={anggota.id}>
              <td className="py-2 px-4 border-b">{anggota.id}</td>
              <td className="py-2 px-4 border-b">{anggota.name}</td>
              <td className="py-2 px-4 border-b">{anggota.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AnggotaPage;
