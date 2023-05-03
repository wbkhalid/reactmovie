import './home.scss';
import HeroBanner from './heroBanner';
import Trending from './trending';

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner />
      <Trending/>
      <div style={{height:'1100px'}}>hllll</div>
    </div>
  );
};

export default Home;
