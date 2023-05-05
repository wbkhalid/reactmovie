import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper';
import SwithchTabs from '../../../components/switchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel';

const TopRated = () => {
  const [endPoint, setEndPoint] = useState('movie');
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndPoint(tab === 'Movie' ? 'movie' : 'tv');
  };
  return (
    <div className="carouselSection">
      <ContentWrapper className="contentWrapper">
        <span className="carouselTitle">TopRated</span>
        <SwithchTabs data={['Movie', 'Tv Shows']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
    </div>
  );
};

export default TopRated;
