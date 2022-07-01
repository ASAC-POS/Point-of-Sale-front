import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/slider-images/1.jpg';
import img2 from '../../assets/slider-images/2.jpg';
import img3 from '../../assets/slider-images/3.jpg';
import './hero.scss';

function Hero() {
  return (
    <div className='wrapper'>
      <div className='hero' style={{ marginBottom: '1rem' }}>
        <div className='slider'>
          <Carousel controls={false} fade interval={4000}>
            <Carousel.Item>
              <img
                className='d-block w-100 slider-img'
                src={img1}
                alt='First slide'
              />
              <Carousel.Caption>
                <h5>Comprehensive, Cloud-based Solution</h5>
                <p>Manage your store operations any where, anytime</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 slider-img'
                src={img3}
                alt='Second slide'
              />
              <Carousel.Caption>
                <h5>Be aware of all operations</h5>
                <p>Get an insight to all of your store operations</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100 slider-img'
                src={img2}
                alt='Third slide'
              />
              <Carousel.Caption>
                <h5>Simple, safe & easy to use</h5>
                <p>Get red off the hastle of managing your store's cash flow</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Hero;
