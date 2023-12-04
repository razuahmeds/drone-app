import { Link, useParams } from "react-router-dom";
import { getSignData } from "../data/demoData";
import "../styles/droneDetails.css";
import { useState } from "react";

function DroneDetails() {
  const drone_id = useParams().drone_id;

  console.log({ drone_id });

  const data = getSignData(Number(drone_id));

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="details">
      <div className="details-container">
        <p className="breadcrum">Home / Drone / {data?.title}</p>

        <div className="drone-cover">
          <img className="image" src={data?.img} alt="" />

          <div className="info">
            <h4>{data?.title}</h4>
            <h5>Price in Bangladesh</h5>

            <p>
              <span className="text-decoration-line-through">
                ৳ {data.regularPrice}
              </span>
              <span>৳ {data.discountPrice}</span>
            </p>

            <h3>Key Features</h3>
            <ul>
              {data?.features.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
            <div className="card-add">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="minus-btn"
              >
                -
              </button>
              <input
                type="number"
                className="quantity"
                name=""
                id=""
                value={quantity}
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="plus-btn"
              >
                +
              </button>
              <Link to={`/DroneCart`}>
                <button className="buy-btn">Buy Now</button>
              </Link>
            </div>
          </div>
        </div>

        <h1 className="saftitle">{data.saftitle}</h1>
        <p className="details">{data.details}</p>
        <h4 className="">{data.Design}</h4>
        <p className="details">{data.DesignP}</p>
        <h4>{data.Camera}</h4>
        <p className="details">{data.cameraP}</p>
        <h4>{data.Flight}</h4>
        <p className="details">{data.FlightP}</p>
        <h4>{data.Battery}</h4>
        <p className="details">{data.Batteryp}</p>
      </div>
    </div>
  );
}

export default DroneDetails;
