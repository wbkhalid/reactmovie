import './home.scss';
import HeroBanner from './heroBanner';
import Trending from './trending';
import Popular from './popular';
import TopRated from './topRated';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending/>
      <Popular/>
      <TopRated/>
      
    </div>
  );
};

export default Home;
