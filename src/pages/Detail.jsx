import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {dataProduct} from '../components/dummy/dataProduct';
import NavbarUser from '../components/Navbar/NavbarUser';
import '../pages/assets/style.css';
import ethiopia from '../components/dummy/ethiopia.png';
import rwanda from '../components/dummy/rwanda.png';
import guatemala from '../components/dummy/guatemala.png';
import nicaragua from '../components/dummy/nicaragua.png';

export default function Detail() {

  const { id } = useParams();

  return (
    <div>
      <NavbarUser />
      <Container className='pt-5 mt-5'>
        <Row className='mt-5 mb-2'>
          <Col xs={12} md={6}>
              <div className='detailimage'>
                <img src={dataProduct[id].image} alt='product' style={{width:'60%'}} />
              </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{width:'80%'}}>
              <h1 className='mb-3 fw-bold'>{dataProduct[id].name}</h1>
              <p className='mb-5'style={{fontSize:'18px'}}>Stock : {dataProduct[id].stock}</p>
              <p className='detaildesc mb-5'>{dataProduct[id].desc}</p>
              <p className='mb-2 detailprice'>{dataProduct[id].price}</p>
            </div>
            <div>
              <Button className='mt-4 lgbutton brownbutton' style={{width:'80%'}}>
                Add Chart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
