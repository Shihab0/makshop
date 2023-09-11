import Image from "next/image";

import Slider from "./components/Slider";
import Featured from "./components/Featured";
import Offer from "./components/Offer";

const Home = () => {
  return (
    <main>
      <Slider></Slider>
      <Featured></Featured>
      <Offer></Offer>
    </main>
  );
};
export default Home;
