import React from 'react'
import { Container , Row , Col , Table} from 'react-bootstrap'
import {schedule} from "../data"

const Schedule = () => {
  return (
	<Container id="sechedule">
	  <Row>
		<Col  className="text-center " lg="5" >
      <h2>Classes Schedule</h2>
  	 	<p>Our gym offers flexible scheduling with early morning and late evening 
        hours to accommodate busy work schedules. Various classes and training 
        sessions are available throughout the day. Check our online schedule or 
        call us to find the perfect time for your workout.</p>
  	 	<img src="images/schedule1.png" className=" "  alt="schedule" />
		</Col>
    <Col className=" text-center" lg="5" >
		<Table striped>
      <thead>
        <tr>
          <th>#</th>  
          <th>Coaches</th>
          <th>Timeline</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map(item => (
          <tr key={item.id}>
            <td>{item.Day}</td>
            <td>{item.Coaches}</td>
            <td>{item.Timeline}</td>
          </tr>
        ))}
      </tbody>
    </Table>
		</Col>
	  </Row>
	</Container>
  )
}

export default Schedule
