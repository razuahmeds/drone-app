import { Button, Card, Col, Row } from "react-bootstrap";
import "../styles/AllDrone.css";
import { drones } from "../data/demoData";
import { Link } from "react-router-dom";

function AllDrone() {
  return (
    <div className="allDrone">
      <div className="contents">
        <div className="drone-content">
          <h3
            className="h3-text"
            style={{ margin: "25px 0", fontWeight: "bold", color: "#403735" }}
          >
            All Latest Drone Price List in BD
          </h3>
          <hr className="hr-all" />
          <Row xs={1} md={2} lg={4} className="g-4 ">
            {drones?.map((item, idx) => (
              <Col
                key={idx}
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <Link to={`details/${item.id}`}>
                  <Card style={{ positon: "relative", height: 300 }}>
                    <Button
                      style={{
                        background: "#fff",
                        border: "1px solid #323232",
                        padding: "1px 10px",
                        color: "#5D5D5D",
                        fontWeight: "bold",
                        fontSize: 14,
                        position: "absolute",
                        top: "10px",
                        right: 10,
                      }}
                    >
                      SALE
                    </Button>

                    <Card.Img
                      style={{ height: 200, objectFit: "cover" }}
                      src={item?.img}
                    />
                    <Card.Body
                      style={{ background: "#DBDAD9", textAlign: "center" }}
                    >
                      <h4
                        style={{
                          color: "#11A7F1",
                          fontSize: 15,
                        }}
                      >
                        {item?.title}
                      </h4>
                      <span className="text-decoration-line-through">
                        ৳ {item?.regularPrice}
                      </span>
                      <span>৳ {item?.discountPrice}</span>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AllDrone;
