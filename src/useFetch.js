import { useState, useEffect } from 'react';


const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) { // error coming back from server
            setError('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          setIsPending(false);
          setData(data);
          // setError(null);
        })
        .catch(err => {
          // auto catches network / connection error
          if(err.name==='AbortError')
          {
             console.log("Fetch aborted")
          } 
          else {

            setIsPending(false);
            setError(err.message);
            abortCont.abort();
            console.log('Process aborted');

          }
         
        }

        )
    }, 200);

    return () => abortCont.abort();

  }, [url])

  return { data, isPending, error };
}

export default useFetch;