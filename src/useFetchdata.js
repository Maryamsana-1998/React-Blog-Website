import { useState, useEffect } from "react";
import dataFetch from "./dataFetch"
import useSWR from "swr";

const useFetchdata = (url) => {

    const { pending, setPending } = useState(true);
    const [mounted, setMounted] = useState(false);


    const { data ,err } = useSWR(mounted ? url : null, dataFetch)
    //console.log(blogs)

    useEffect(() => {
      setTimeout(()=>{
        setMounted(true)
      },200)
    }, [url])
   

    /* useEffect(() => {
        setTimeout(() => {
        const { data: blogs, err } = useSWR(url ,dataFetch);
        if(blogs !== null)
        {
            setData(blogs);
            setPending(false);
        }
        else{
            setError(err);
        }
        }, 2000)
    }, [url]) */

    return { data, err, pending };
}

export default useFetchdata;