import {useEffect, useState} from "react";

const useFetch = <T>(url: string): { loading: boolean, data: T } => {
    // TODO should work with POST
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<T>({} as T);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setLoading(false);
        };

        fetchData();
    }, [url]);

    return {loading, data};
};


export default useFetch