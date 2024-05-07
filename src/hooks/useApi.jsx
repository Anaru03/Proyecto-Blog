import { useState, useEffect } from 'react';

const useApi = (url, method, data = null, headers = null) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [dataApi, setDataApi] = useState(data);

    const fetchData = async (dataFetch) => {
        try {
            let options = {
                method: method.toUpperCase(),
                headers: headers || { 'Content-Type': 'application/json' }
            };
            if (dataFetch) {
                options.body = JSON.stringify(dataFetch);
            }

            const res = await fetch(url, options);
            const jsonData = await res.json();

            if (!res.ok) {
                throw new Error(jsonData.message || 'Algo salió mal en la petición');
            }

            setResponse(jsonData);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if(data !== dataApi) {
            setDataApi(data);
            fetchData(data);
        }
    }, [data]);

    return { response, error, isLoading, fetchData };
};

export default useApi;