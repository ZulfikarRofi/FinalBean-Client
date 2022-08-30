import React, { useState, useContext } from 'react';
import { Navbar, Button, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import waysbeanlogo from './waysbean-icon.png'
import { userContext } from '../context/userContext';
import cart from './cart.png';
import user from './user.png';
import './style.css';
import LoginModal from '../modal/LoginModal';
import RegisterModal from '../modal/RegisterModal';

export default function NavbarUser() {
  // const [state] = useContext(userContext);
  // console.log(state)
  // const isLogin = state.isLogin;
  // console.log(isLogin)

  const [logShow, setLogShow] = useState(false);
  const [regShow, setRegShow] = useState(false);


  const handleCloseReg = () => setRegShow(false);
  const handleShowReg = () => setRegShow(true);

  const handleCloseLog = () => setLogShow(false);
  const handleShowLog = () => setLogShow(true);


  return (
    <div>
      <Navbar bg='#F5F5F5' expand='lg' className='px-5 between shadow' fixed='top bg-white'>
        <Navbar.Brand href='/'>
          <img src={waysbeanlogo} alt='waysbean' style={{width:'100%'}} />
        </Navbar.Brand>
        <div>
          <LoginModal loginShow={logShow} Close={handleCloseLog} />
          <RegisterModal registerShow={regShow} Close={handleCloseReg} />
          <Button className='px-5 py-2 brownbutton ms-3' onClick={() => handleShowLog()}>
            Login
          </Button>
          <Button className='px-5 py-2 whitebutton ms-3'onClick={() => handleShowReg()}>
            Register
          </Button>
        </div>
      </Navbar>
    </div>
  )
}
