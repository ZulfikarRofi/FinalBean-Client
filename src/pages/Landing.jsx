import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import NavbarUser from '../components/Navbar/NavbarUser'
import banner from '../pages/assets/Jumbotron.png';
import { dataProduct } from '../components/dummy/dataProduct'
import '../pages/assets/style.css'
import convertRupiah from 'rupiah-format';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div>
        <NavbarUser />
        <Container className='pt-5 mt-5 pb-5'>
            <Row className='py-5 d-flex justify-content-center mb-3'>
                <img src={banner} alt='banner' />
            </Row>
            <Row className='d-flex justify-content-center'>
                {dataProduct?.map((item, index) => (
                <Col>
                    <Link to={`/detail/${item.id}`} className='text-decoration-none'>
                        <Card
                        className="p-0 mb-2 cardproduct"
                        style={{ width: "18rem", borderRadius:"0px"}}
                        >
                        <Card.Img variant="top" src={item.image} style={{borderRadius:'0'}} />
                        <Card.Body className="cardproduct">
                            <Card.Title className="text-danger text-decoration-none cardtitle">
                                {item.name}
                            </Card.Title>
                            <Card.Text className="text-danger text-decoration-none cardtext">
                                {convertRupiah.convert(item.price)}
                            </Card.Text>
                            <Card.Text className="text-danger text-decoration-none cardtext">
                                Stock : {item.stock}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Link>
                </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}
