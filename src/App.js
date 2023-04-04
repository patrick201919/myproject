import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import AllProfile from "./components/users/AllProfile";
import ReadProfile from "./components/users/ReadProfile";
import CreateProfile from "./components/users/CreateProfile";
import Login from "./components/users/Login";
import AllBooking from "./components/reservations/AllBooking";
import Header from "./components/header/Header";
// import Test from "./components/users/Test";
import Teste from "./components/users/Teste";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<AllProfile />} />
        <Route path="/profile" element={<ReadProfile />} />
        <Route path="/profile/create" element={<CreateProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={<AllBooking />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/teste" element={<Teste />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
