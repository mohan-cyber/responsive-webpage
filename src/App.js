import Footer from "./components/Footer";
import MobileSideBar from "./components/MobileSideBar";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import MyAccount from "./screens/MyAccount";

function App() {
  return (
    <div>
      <Navbar />
      <MobileSideBar />
      <div className="flex">
        <SideBar />
        <MyAccount />
      </div>
      <Footer />
    </div>
  );
}

export default App;
