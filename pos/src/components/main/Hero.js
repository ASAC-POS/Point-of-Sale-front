import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/slider-images/slider1.jpg';
import img2 from '../../assets/slider-images/slider2.jpg';
import img3 from '../../assets/slider-images/slider3.jpg';

function Hero() {
  return (
    <div className='hero' style={{ marginBottom: '1rem' }}>
      <div className='slider'>
        <Carousel fade interval={2000} variant='dark'>
          <Carousel.Item>
            <img
              style={{ objectFit: 'cover', maxHeight: '550px' }}
              className='d-block w-100'
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
              style={{ objectFit: 'cover', maxHeight: '550px' }}
              className='d-block w-100'
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
              style={{ objectFit: 'cover', maxHeight: '550px' }}
              className='d-block w-100'
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
  );
}

export default Hero;
