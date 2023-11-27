import React from 'react';

function PeminjamanPage() {
  const peminjamans = [
    { id: 201, book: 'The Great Gatsby', member: 'John Doe', dueDate: '2023-12-01' },
    { id: 202, book: 'To Kill a Mockingbird', member: 'Jane Smith', dueDate: '2023-12-15' },
    // Add more peminjamans as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">peminjamans</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Book</th>
            <th className="py-2 px-4 border-b">Member</th>
            <th className="py-2 px-4 border-b">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {peminjamans.map(peminjaman => (
            <tr key={peminjaman.id}>
              <td className="py-2 px-4 border-b">{peminjaman.id}</td>
              <td className="py-2 px-4 border-b">{peminjaman.book}</td>
              <td className="py-2 px-4 border-b">{peminjaman.member}</td>
              <td className="py-2 px-4 border-b">{peminjaman.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PeminjamanPage;
