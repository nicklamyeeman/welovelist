import axios from "axios";
import { useEffect, useState } from "react";

export const MyApp = () => {
  // use axios to get response from url :https://intra.epitech.eu/auth-dc00b3fef81384303b490160a5af9577537b9519/module/2021/M-PRO-950/PAR-10-1/?format=json

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://intra.epitech.eu/auth-dc00b3fef81384303b490160a5af9577537b9519/module/2021/M-PRO-950/PAR-10-1/?format=json")
      .then(response => {
        setData(response.data);
        setLoading(false);
      }
      ).catch(error => {
        setError(error);
        setLoading(false);
      }
      );
    }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}