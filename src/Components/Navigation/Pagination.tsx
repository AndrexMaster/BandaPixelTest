import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (number: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    const { currentPage, totalPages, onPageChange } = props;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-4">
            <button
                className={`px-3 py-1 mx-1 rounded ${currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-200'}`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`px-3 py-1 mx-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button
                className={`px-3 py-1 mx-1 rounded ${currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-200'}`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
