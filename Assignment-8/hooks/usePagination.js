// src/hooks/usePagination.js
import { useState } from 'react';

const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(data.length / itemsPerPage);

    const next = () => {
        if (currentPage < pages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return { currentData, next, prev, currentPage, pages };
};

export default usePagination;