import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function RegModal({registerShow, Close}) {
  return (
    <div>
      <Modal show={registerShow} onHide={Close}>
        <Modal.Body className='p-5'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Button variant="primary" type="submit" className='brownbutton lgbutton'>
                    Login
                </Button>
                <Form.Text className=''>Already have an account ? Click <strong style={{color:'black'}} >Here</strong></Form.Text>
            </Form>
        </Modal.Body>
      </Modal>

    </div>
  )
}
