import { useEffect, useState } from "react";
import axios from "axios";

function GetData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWM4NGVmYTg2MTYyZThjNzhhMjNkYzRmYTM4NjQ2YiIsInN1YiI6IjY1Mzc3YjNiYWUzNjY4MDEyYzY2ODViZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1xJSt03a6Oawtdx2Sx7RVaJJLygumOUVaxv8eik4-Uk",
        },
      };
      try {
        const response = await axios.get(url, options);
        if (!response.data) {
          throw new Error("Veri Alınamadı");
        }
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
}

export default GetData;
