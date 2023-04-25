import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { about } from "../data"

const About = () => {
  return (
    <div id="about">
      <MDBContainer >
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {about.map(item => (
          <MDBCol key={item.id}>
            <MDBCard className='h-100 '>
              <MDBCardImage src={item.img} alt='...'position='top'/>
            <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardText>{item.desc}</MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
          <MDBBtn  color='danger'>let's get start</MDBBtn>
          </MDBCardFooter>
        </MDBCard>
          </MDBCol>
        ))}
    </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default About
