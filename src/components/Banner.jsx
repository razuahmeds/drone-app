import { Card } from "react-bootstrap";

function Banner() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://goprice.com.bd/wp-content/uploads/2023/09/Drone.png"
        alt="Card image"
      />
      <Card.ImgOverlay></Card.ImgOverlay>
    </Card>
  );
}

export default Banner;
