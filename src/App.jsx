import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfigration, getGenres } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
      dispatch(getApiConfigration(res));
    });
  };
  return <div>{url?.total_results}</div>;
};

export default App;
