import {useEffect, useState} from 'react';
import axios from 'axios'


export const useDataApi = (urlRequest) => {
    const [data, setData] = useState({items:[], totalItems: 0});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [url, setUrl] = useState(urlRequest);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                let result = await axios(url);

                    if (result.data.items) {
                        setData({items: [...data.items, ...result.data.items], totalItems: result.data.totalItems});
                    }
                }
            catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        }
        if (url) {
            fetchData();
        }
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};





