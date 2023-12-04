import { drones } from "../data/demoData";
import CardInfo from "./CardInfo";

function CardDemo() {
  return (
    <div className="components">
      {drones.map((item, index) => {
        return <CardInfo item={item} key={index} />;
      })}
    </div>
  );
}

export default CardDemo;
