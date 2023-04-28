import { useEffect, useState } from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImages/Img';
import ContentWrapper from '../../../components/contentWrapper';

const HeroBanner = () => {
  const [query, setQuery] = useState('');
  const [background, setBackground] = useState('');
  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch('/movie/upcoming');

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
     {!loading && <div className="backdrop-img">
        <Img src={background} alt="background Image" />
      </div>}
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
