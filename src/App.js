import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AllProfile from "./components/users/AllProfile";
import AllBooking from "./components/reservations/AllBooking";
import Header from "./components/header/Header";
// import Test from "./components/users/Test";
import Teste from "./components/users/Teste";
import Footer from "./components/footer/Footer";
import Login from "./components/users/login/Login";
import CreateProfile from "./components/users/create/CreateProfile";
import ReadProfile from "./components/users/readProfile/ReadProfile";
import UpdatePassword from "./components/users/password/UpdatePassword";
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
