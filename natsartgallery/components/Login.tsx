import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default function Login()  {
    return (
        <Form>
            <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text>Please enter the email address you have with us</Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
                <Form.Text>Please enter your password</Form.Text>
            </Form.Group>
            <Button>Logout</Button>
        </Form>
    );
}
