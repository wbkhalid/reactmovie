import { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper';
import SwithchTabs from '../../../components/switchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel';

const Trending = () => {
  const [endPoint, setEndPoint] = useState('day');
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const onTabChange = (tab) => {
    setEndPoint(tab === 'Days' ? 'day' : 'week');
  };
  return (
    <div className="carouselSection">
      <ContentWrapper className="contentWrapper">
        <span className="carouselTitle">Trending</span>
        <SwithchTabs data={['Days', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
