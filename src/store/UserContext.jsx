import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const UserContext = createContext();

// Create Context Provider
export const UserProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [totalCount, setTotalCount] = useState(0);

    // Search
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchFilteredData, setSearchFilteredData] = useState([]);

    // Search by specific field
    const [activeFieldSearch, setActiveFieldSearch] = useState('');
    const [fieldSearchKey, setFieldSearchKey] = useState('');
    const [fieldSearchTerm, setFieldSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const pageOffset = (currentPage - 1) * pageSize;

            // Specific fields only
            const select = [
                'firstName',
                'lastName',
                'maidenName',
                'age',
                'gender',
                'email',
                'phone',
                'username',
                'birthDate',
                'bloodGroup',
                'eyeColor',
                'university',
            ];

            const params = {
                limit: pageSize,
                skip: pageOffset,
                select: select.toString(),
            };

            let toUrl = '';
            if (fieldSearchTerm.length !== 0 && fieldSearchKey.length !== 0) {
                toUrl = 'https://dummyjson.com/users/filter';
                params['key'] = fieldSearchKey;
                params['value'] = fieldSearchTerm;
            } else {
                toUrl = 'https://dummyjson.com/users';
            }

            const url = new URL(toUrl);
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

            const response = await axios.get(url.toString());
            const data = response.data;

            if (data && data.users) {
                setTotalCount(data.total);
                setData(data.users);
                setIsLoading(false);
            }
        }

        fetchData();

    }, [currentPage, pageSize, fieldSearchKey, fieldSearchTerm]);

    useEffect(() => {
        const filteredData = data.filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

        setSearchFilteredData(filteredData);
    }, [searchTerm]);

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
        fieldSearchKey,
        setFieldSearchKey,
        fieldSearchTerm,
        setFieldSearchTerm,
        activeFieldSearch,
        setActiveFieldSearch
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
