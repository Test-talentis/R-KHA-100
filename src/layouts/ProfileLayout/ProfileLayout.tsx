import { Col, ListGroup, Row } from 'react-bootstrap'
import { Outlet, NavLink } from 'react-router-dom'

function ProfileLayout() {
  return (
   <Row>
    <Col md="3" className='mb-2'>
        <ListGroup>
            <ListGroup.Item as={NavLink} to="" end>
                Profile
            </ListGroup.Item>
            <ListGroup.Item as={NavLink} to="orders">
                Orders
            </ListGroup.Item>
        </ListGroup>
    </Col>
    <Col>
        <Outlet/>
    </Col>
   </Row>
  )
}

export default ProfileLayout