import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBBtn,
} from "mdb-react-ui-kit";
import {Pricing} from "../data"

const Price = () => {
  return (
	<div id="pricing">
	   <MDBContainer fluid className="">
      <MDBRow>
       {Pricing.map(item =>(
        <MDBCol  md="4" className="mb-4 mb-lg-0">
          <MDBCard key={item.id} className="text-black">
            <MDBCardImage src={item.img} position="top"alt="Workout"/>
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4">{item.type}</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">{item.cost}</h6>
              </div>
              <div className="text-center">
                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Quick Look</h5>
                </div>
                <div className="d-flex flex-column mb-4">
                  <ul className="list-unstyled mb-0">
                    <li>{item.access[0]}</li>
                    <li>{item.access[1]}</li>
                    <li>{item.access[2]}</li>
                    <li>{item.access[3]}</li>
                  </ul>
                </div>
              <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">24/7</span>
                  <span>complimentary consultations <b>{item["complimentary consultations"]}</b></span>
              </div>
              </div>
              <div className="d-flex flex-row text-center">
                <MDBBtn color="danger" className="flex-fill ms-2">
                  Buy now
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       ))}
      </MDBRow>
    </MDBContainer>
	</div>
  )
}

export default Price
