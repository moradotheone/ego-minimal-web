import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
import UserInfoForm from "./UserInfoForm";
import Greeting from "./Greeting";
import MyChart from "./MyChart";
import MyWheelOfLife from "./MyWheelOfLife";
import MyHeroJourney from "./MyHeroJourney";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/form" element={<UserInfoForm />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/chart" element={<MyChart />} />
        <Route path="/wheel" element={<MyWheelOfLife />} />
        <Route path="/hero-journey" element={<MyHeroJourney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
