import {
	MDBContainer,
	MDBCol,
	MDBRow,
  } from 'mdb-react-ui-kit';

const Gallery = () => {
  return (
	<MDBContainer id="gallery">
	  <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='/images/Gallery1.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt="Gallery"
        />

        <img
          src='/images/Gallery2.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt="Gallery"
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='/images/Gallery3.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt="Gallery"
        />

        <img
          src='/images/Gallery4.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt="Gallery"
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0 '>
        <img
          src='/images/Gallery5.jpg'
          className='w-100 shadow-1-strong rounded mb-4'
          alt="Gallery"
        />
        <img
          src='/images/Gallery6.jpg'
          className='w-100 shadow-1-strong rounded mb-4 '
          alt="Gallery"
        />
      </MDBCol>
    </MDBRow>
	</MDBContainer>
  )
}

export default Gallery
