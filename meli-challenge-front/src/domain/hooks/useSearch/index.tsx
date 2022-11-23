import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
    const naviagte = useNavigate();
    const [querySearch, setQuerySearch] =  useState<string>();

    const goToListPage = () => {
        naviagte(`/items?search=${querySearch}`)
    }

    return {
        querySearch,
        setQuerySearch,
        goToListPage,
    };


};
