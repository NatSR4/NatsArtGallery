import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ImageCards() {
    return (
        <>
        <Card>
            <Card.Img variant='' src="../public/Drawings/IMG_3959.JPG" />
            <Card.Body>
                <Card.Title>Margaret Hamilton</Card.Title>
                <Card.Text> Spring 2019</Card.Text>
                <Button>TBD</Button>
            </Card.Body>
        </Card>
        </>
    );
}