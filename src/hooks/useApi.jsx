import { useState, useEffect } from 'react';

const useApi = (url, method, data = null) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let options = {
                    method: method.toUpperCase(),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                if (data) {
                    options.body = JSON.stringify(data);
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

        fetchData();
    }, [url, method, data]);
    
    return { response, error, isLoading };
};

export default useApi;
