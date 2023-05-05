import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper';
import SwithchTabs from '../../../components/switchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel';

const Popular = () => {
  const [endPoint, setEndPoint] = useState('movie');
  const { data, loading } = useFetch(`/${endPoint}/popular`);
  const onTabChange = (tab) => {
    setEndPoint(tab === 'Movie' ? 'movie' : 'tv');
  };
  return (
    <div className="carouselSection">
      <ContentWrapper className="contentWrapper">
        <span className="carouselTitle">Popular</span>
        <SwithchTabs data={['Movie', 'Tv Shows']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default Popular;
