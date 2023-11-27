import React from 'react';

function BukuPage() {
  const bukus = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    // Add more bukus as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">bukus</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Author</th>
          </tr>
        </thead>
        <tbody>
          {bukus.map(buku => (
            <tr key={buku.id}>
              <td className="py-2 px-4 border-b">{buku.id}</td>
              <td className="py-2 px-4 border-b">{buku.title}</td>
              <td className="py-2 px-4 border-b">{buku.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BukuPage;
