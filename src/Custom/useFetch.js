import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const Getdata = React.useCallback(async () => {
    setLoading(false);
    const data = await fetch(url);
    const respdata = await data.json();
    console.log(respdata);
    setData(respdata);
  });

  useEffect(() => {
    Getdata();
  }, [url]);

  return {data,loading};
}

export default useFetch;
