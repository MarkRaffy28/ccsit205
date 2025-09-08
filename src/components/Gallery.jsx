import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from "../data.json";
import './Gallery.css';

function Gallery() {
  let cardArr = data;
  return (
    <div className="gallery-container">
      {cardArr.map((eachCard) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={"/images/" +eachCard.img+ ".jpg"} />
          <Card.Body>
            <Card.Title>{eachCard.title}</Card.Title>
            <Card.Text>
              {eachCard.text}
            </Card.Text>
            <Button variant="primary" href={(eachCard.link)}>Info</Button>
          </Card.Body>
        </Card>
      ))}   
    </div>
  );
}

export default Gallery;