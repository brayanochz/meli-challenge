import React, { useEffect, useState } from 'react';
import Input from '../Input';
import { useQuery } from '../../../domain/hooks/useQuery';

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const query = useQuery();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value;
        setSearchQuery(search);
    }

    useEffect(() => {
        const search = query.get('search')
        if (search && search !== null ) {
            return setSearchQuery(search);
        }
    },[])

    return (
        <form className='search-input' action={`/items`} method="get" target='_blank'>
            <Input
                value={searchQuery}
                onChange={handleSearchChange}
                actionIcon
                icon={<img src="/ic_Search.png" alt="icon"/>}
            />
        </form>
    );
};

export default SearchInput;