import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.child}
      <Footer />
    </div>
  );
}
