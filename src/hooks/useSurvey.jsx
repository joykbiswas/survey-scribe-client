import  { useEffect, useState } from 'react';
import { axiosSecure } from './useAxiosSecure';

const useSurvey = () => {
    const [surveys, setSurveys] = useState([]);
  useEffect(() => {
    axiosSecure("/survey")
    .then((res) => setSurveys(res.data));
  }, []);
    return surveys;
};

export default useSurvey;