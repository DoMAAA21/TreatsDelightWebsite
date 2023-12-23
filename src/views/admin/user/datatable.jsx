import React, { useState } from 'react';

const dummyData = [
    { id: 1, title: 'Lorem Ipsum 1' },
    { id: 2, title: 'Lorem Ipsum 2' },
    { id: 3, title: 'Lorem Ipsum 3' },
    { id: 4, title: 'Lorem Ipsum 4' },
    { id: 5, title: 'Lorem Ipsum 5' },
    { id: 6, title: 'Lorem Ipsum 6' },
    { id: 7, title: 'Lorem Ipsum 7' },
    { id: 8, title: 'Lorem Ipsum 8' },
    { id: 9, title: 'Lorem Ipsum 9' },
    { id: 10, title: 'Lorem Ipsum 10' },
    { id: 11, title: 'Lorem Ipsum 11' },
    { id: 12, title: 'Lorem Ipsum 12' },
    { id: 13, title: 'Lorem Ipsum 13' },
    { id: 14, title: 'Lorem Ipsum 14' },
    { id: 15, title: 'Lorem Ipsum 15' },
    { id: 16, title: 'Lorem Ipsum 16' },
    { id: 17, title: 'Lorem Ipsum 17' },
    { id: 18, title: 'Lorem Ipsum 18' },
    { id: 19, title: 'Lorem Ipsum 19' },
    { id: 20, title: 'Lorem Ipsum 20' },
];

const DataTable = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const pageSize = 10;

    const filteredData = dummyData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pageCount = Math.ceil(filteredData.length / pageSize);

    const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1); // Reset page when searching
                }}
                className="p-2 m-2 border border-gray-300"
            />
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="p-2">ID</th>
                        <th className="p-2">Title</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item) => (
                            <tr key={item.id}>
                                <td className="p-2">{item.id}</td>
                                <td className="p-2">{item.title}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2" className="p-4 text-center">
                                No available data.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex justify-between p-4">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Previous
                </button>
                <div className="text-lg font-bold">
                    Page {page} of {pageCount}
                </div>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, pageCount))}
                    disabled={page === pageCount}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTable;
