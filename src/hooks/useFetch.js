import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState(null);
    useEffect(async ()=>{
        try {
            setLoading(true)
            const response=await fetch(url);
            if(!( response).ok)
            {
                throw new Error("Reaponse is not okay")
            }
            const json=await response.json();
            setData(json);
            setLoading(false)
        } catch (err) {
            setError(err)
            setLoading(false)
        }

    },[url])

    return {data,loading,error}

}

export default useFetch