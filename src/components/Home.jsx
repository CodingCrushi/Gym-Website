import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';


const Home = () => {
  return (
    <div id="home">
     <MDBCarousel showIndicators  fade>
      <MDBCarouselItem
        className='w-100 d-block' 
        itemId={1}
        src='/images/BackGround1.jpg'
        alt='...'
      >
        <h4>Get ready to transform your body and mine at our gym!</h4>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block' 
        itemId={2}
        src='/images/BackGround2.jpg'
        alt='...'
      >
        <h4>Don't hold back , push yourself to new limit at our gym</h4>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block' 
        itemId={3}
        src='/images/BackGround3.jpg'
        alt='...'
      >
        <h4>Believe in yourself and trust the process, we'll take you there</h4>
      </MDBCarouselItem>
    </MDBCarousel>
    </div>
  )
}

export default Home
