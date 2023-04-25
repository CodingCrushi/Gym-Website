import React from 'react'
import { Row , Col ,  Container } from 'react-bootstrap'
import { MDBAccordion, MDBAccordionItem , MDBBtn} from 'mdb-react-ui-kit';

const Servise = () => {
  return (
	<div >
		<Container id="service" >

	  <Row>
		<Col className="text-center m-2"  lg='5' >
			<div >

		<h1>Services</h1>
		<p>Relax and unwind with our luxurious bath service. Indulge in a variety of scents and therapeutic benefits, 
      perfect for a self-care day or a romantic evening. Add on a massage or facial for the ultimate pampering 
      experience!</p>
		<br />
		<p>But that's not all - we offer a range of services to elevate your wellness journey. From manicures and 
      pedicures to yoga and meditation classes, we have everything you need for a holistic approach to self-care. 
      Step into our tranquil oasis and let us take care of you.</p>
			</div>
      <MDBBtn  outline rounded className="m-3">let's get startted</MDBBtn>{' '}
		</Col >
		<Col className='m-3' lg='5'>
    <MDBAccordion borderless initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='Fitness Classes'>
      Our gym offers a variety of fitness classes to fit any skill level. From high-intensity interval training 
      to Pilates, we have everything you need to stay motivated and reach your fitness goals. Our experienced 
      instructors will guide you through each class and help you push your limits.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Cardio Equipment'>
      Get your heart pumping with our state-of-the-art cardio equipment. From treadmills to stationary bikes, 
      we have everything you need to burn calories and improve your overall health. Our machines are equipped 
      with the latest technology to track your progress and keep you motivated.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Weight Training'>
      Looking to build muscle and tone your body? Our weight training section has everything you need to achieve 
      your goals. With a variety of weights and machines, you can target specific muscle groups and challenge
      yourself with each workout. Our trainers are always available to provide guidance and support.
      </MDBAccordionItem>
    </MDBAccordion>
		</Col>
	  </Row>
		</Container>
	</div>
  )
}

export default Servise
