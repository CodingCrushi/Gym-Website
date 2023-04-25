import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';


const Footer = () => {
  return (
    <div id="contact">
       <MDBFooter className='text-center' color='white' bgColor='black'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p className='m-2'>
            Our gym isn't just about physical strength, but mental resilience
            and determination to reach your full potential
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>RESOURCES</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    BLOG
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    WHAT'S NEW
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    ARCHIVE
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    BETA PROGRAM
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>COATS</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    AUTUMN COATS
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    COATS FOR MEN
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    COATS FOR WOMEN
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    WINTER COATS
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>OTHER SERVICE</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    SHORTS
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    JUMPERS
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    SHOES
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    T-SHIRT
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>CLASSES</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    FITNESS CLASSES
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    AEROBIC CLASSES
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    FITNESS CLASSES
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Homayoun:
          FitZone.com
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
