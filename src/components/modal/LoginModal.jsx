import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function LoginModal({loginShow, Close}) {
  return (
    <div>
      <Modal show={loginShow} onHide={Close} >
        <Modal.Body className='p-5 justify-content-center'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className='brownbutton lgbutton'>
                    Login
                </Button>
                <Form.Text className=''>Don't have account ? Click <strong style={{color:'black'}} >Here</strong></Form.Text>
            </Form>
        </Modal.Body>
      </Modal>

    </div>
  )
}
