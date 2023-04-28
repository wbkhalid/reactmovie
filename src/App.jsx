import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { getApiConfigration, getGenres } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/home';
import Details from './pages/details';
import Explore from './pages/explore';
import PageNotFound from './pages/404/PageNotFound';
import SearchResult from './pages/searchResult';
import Header from './components/header';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + 'original',
        poster: res.images.secure_base_url + 'original',
        profile: res.images.secure_base_url + 'original',
      };

      dispatch(getApiConfigration(url));
    });
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
