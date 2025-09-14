import data from "../data.json";
import './Gallery.css';

function Gallery() {
  let cards = data;
  return (
    <div className="gallery-container">
      {cards.map((card, index) => (
        <div className={`card ${card.size}`}>
          <img className="card-image" src={card.img} alt={`image_${index}`} />
         </div>  
      ))}   
    </div>
  );
}

export default Gallery;