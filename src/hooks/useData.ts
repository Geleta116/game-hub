import { useEffect, useState } from "react";
import apiClient from "../services/api_key";
import { AxiosRequestConfig, CanceledError } from "axios";



interface fetchResponse<T>{
count: number;
results: T[];
}


const useData  = <T>(endpoint: string, deps?: any[], requestConfig?:AxiosRequestConfig ) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient.get<fetchResponse<T>>(endpoint, { signal: controller.signal ,...requestConfig})
            .then(res => {
                setData(res.data.results)
                setLoading(false)  
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setLoading(false)
            });
    }, deps? [...deps] : [])

    return { data, error, isLoading }
}

export default useData;