import React, { useEffect } from 'react';
import Input from '../Input';
import SearchIcon from '../../../assets/ic_Search.png';
import { useSearch } from '../../../domain/hooks/useSearch';
import { useQuery } from '../../../domain/hooks/useQuery';

// TODO: cambiara formulario

const SearchInput = () => {
    const query = useQuery();
    const { querySearch, setQuerySearch, goToListPage } = useSearch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuerySearch(e.target.value);
    }

    useEffect(() => {
        const querySearch = query.get('search')
        if (querySearch) {
            setQuerySearch(querySearch)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return (
        <Input
            value={querySearch}
            onChange={handleChange}
            action={goToListPage}
            actionIcon
            icon={<img src={SearchIcon} alt="icon"/>}
        />
    );
};

export default SearchInput;