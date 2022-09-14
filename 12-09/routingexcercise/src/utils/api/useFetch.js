import { useState, useEffect } from "react";

export const useFetch = (url, format = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (typeof format === "function") {
          setData(format(data));
        } else {
          setData(data);
        }
        setError(false);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { loading, data, error };
};
