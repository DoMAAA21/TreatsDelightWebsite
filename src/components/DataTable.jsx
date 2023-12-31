import React, { useState } from 'react';

const DataTable = ({ columns, rows }) => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const pageSize = 10;

    const filteredData = rows.filter((item) =>
        Object.values(item).some(
            (value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortColumn) {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            } else {
                return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
            }
        }

        return 0;
    });

    const pageCount = Math.ceil(sortedData.length / pageSize);

    const paginatedData = sortedData.slice((page - 1) * pageSize, page * pageSize);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    return (
        <div>
            <div className="flex justify-end items-center p-2 m-2">
                <div className="relative">
                    <input
                        type="text"
                        placeholder=""
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setPage(1);
                        }}
                        className="p-2 pr-10 border border-gray-300 rounded-md"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="absolute right-3 top-2 h-6 w-6 text-gray-500"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4-4"
                        />
                    </svg>

                </div>


            </div>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-blue-900 text-white">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.field}
                                className="p-2 cursor-pointer w-40"
                                onClick={() => handleSort(column.field)}
                            >
                                {column.label}
                                {sortColumn === column.field && (
                                    <span className="ml-1">
                                        {sortOrder === 'asc' ? '↑' : '↓'}
                                    </span>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200`}
                            >
                                {columns.map((column) => (
                                    <td key={column.field} className="p-2 text-center">
                                        {item[column.field]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} className="p-4 font-bold text-center">
                                No available data.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex justify-between p-4 items-center">

                <div className="text-md">
                    Page {page} of {pageCount}
                </div>
                <div className="space-x-4">
                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => setPage((prev) => Math.min(prev + 1, pageCount))}
                        disabled={page === pageCount}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default DataTable;
