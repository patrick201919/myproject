import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AllBooking from "./components/reservations/AllBooking";
import Header from "./components/header/Header";
// import Test from "./components/users/Test";
import Teste from "./components/users/Teste";
import Footer from "./components/footer/Footer";
import Login from "./components/users/login/Login";
import CreateProfile from "./components/users/create/CreateProfile";
import ReadProfile from "./components/users/readProfile/ReadProfile";
import UpdatePassword from "./components/users/password/UpdatePassword";
import VehicleCreate from "./components/vehicles/create/VehicleCreate";
import AllVehicle from "./components/vehicles/allVehicle/AllVehicle";
import AllProfile from "./components/users/allProfile/AllProfile";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<AllProfile />} />
        <Route path="/profile" element={<ReadProfile />} />
        <Route path="/password" element={<UpdatePassword />} />
        <Route path="/profile/create" element={<CreateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vehicles" element={<AllVehicle />} />
        <Route path="/vehicle/create" element={<VehicleCreate />} />
        <Route path="/bookings" element={<AllBooking />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/teste" element={<Teste />} />
        <Route />
        <Route />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
