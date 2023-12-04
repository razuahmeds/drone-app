import AllDrone from "../components/AllDrone";
import Banner from "../components/Banner";
import DronePrice from "../components/DronePrice";
import ToyDrones from "../components/ToyDrones";

function Home() {
  return (
    <div>
      <Banner />
      <DronePrice />
      <AllDrone />
      <ToyDrones />
    </div>
  );
}

export default Home;
