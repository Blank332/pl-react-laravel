import React from 'react';

function Dashboard() {
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        // Add more books as needed
    ];

    const members = [
        { id: 101, name: 'John Doe', email: 'john@example.com' },
        { id: 102, name: 'Jane Smith', email: 'jane@example.com' },
        // Add more members as needed
    ];

    const loans = [
        { id: 201, book: 'The Great Gatsby', member: 'John Doe', dueDate: '2023-12-01' },
        { id: 202, book: 'To Kill a Mockingbird', member: 'Jane Smith', dueDate: '2023-12-15' },
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-semibold mb-4">Welcome to the Library Dashboard!</h1>
            <p className="text-gray-600 mb-8">This is the admin view.</p>

            {/* Books */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Books</h2>
                <ul className="list-disc list-inside">
                    {books.map(book => (
                        <li key={book.id} className="mb-2">{`${book.title} by ${book.author}`}</li>
                    ))}
                </ul>
            </div>

            {/* Members */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Members</h2>
                <ul className="list-disc list-inside">
                    {members.map(member => (
                        <li key={member.id} className="mb-2">{`${member.name} (${member.email})`}</li>
                    ))}
                </ul>
            </div>

            {/* Loans */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Loans</h2>
                <ul className="list-disc list-inside">
                    {loans.map(loan => (
                        <li key={loan.id} className="mb-2">{`${loan.book} - Borrowed by ${loan.member}, Due on ${loan.dueDate}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
