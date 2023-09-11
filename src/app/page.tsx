import Image from "next/image";
import Notification from "./components/Notification";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Notification></Notification>
      <Navbar></Navbar>
      <h1>Hello world</h1>
      <Footer></Footer>
    </main>
  );
}
