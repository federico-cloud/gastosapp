import { useEffect, useState } from "react";
import { monthService } from "../api/";

export const useMonths = () => {
  const [months, setMonths] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonths = async () => {
      try {
        const data = await monthService.getMonths();
        setMonths(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMonths();
  }, []);

  return { months, loading, error };
};
