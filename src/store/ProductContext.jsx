import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const ProductContext = createContext();

// Create Context Provider
export const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0);

    // Search
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchFilteredData, setSearchFilteredData] = useState([]);


    const [categoryOptions, setCategoryOptions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            const pageOffset = (currentPage - 1) * pageSize;

            // Specific fields only
            const select = [
                'title',
                'brand',
                'category',
            ];

            const params = {
                limit: pageSize,
                skip: pageOffset,
                select: select.toString(),
            };

            let toUrl = '';

            if (selectedCategory !== 'all') {
                toUrl = `https://dummyjson.com/products/category/${selectedCategory}`;
            } else {
                toUrl = 'https://dummyjson.com/products';
            }

            const url = new URL(toUrl);
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

            const response = await axios.get(url.toString());
            const data = response.data;

            if (data && data.products) {
                setTotalCount(data.total);
                setData(data.products);
                setIsLoading(false);
            }
        }

        fetchData();

    }, [currentPage, pageSize, selectedCategory]);

    useEffect(() => {
        const filteredData = data.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

        setSearchFilteredData(filteredData);
    }, [searchTerm]);

    // Fetch categories from DummyJSON API
    useEffect(() => {
        const fetchCategories = async () => {
            const url = 'https://dummyjson.com/products/categories';
            const response = await axios.get(url);
            const data = response.data;

            if (data.length !== 0) {
                setCategoryOptions(data);
            }
        }

        fetchCategories();
    }, []);

    const contextValue = {
        data,
        setData,
        isLoading,
        currentPage,
        setCurrentPage,
        pageSize,
        setPageSize,
        totalCount,
        setTotalCount,
        searchTerm,
        setSearchTerm,
        isSearchVisible,
        setIsSearchVisible,
        searchFilteredData,
        setSearchFilteredData,
        categoryOptions,
        setCategoryOptions,
        selectedCategory,
        setSelectedCategory
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};
