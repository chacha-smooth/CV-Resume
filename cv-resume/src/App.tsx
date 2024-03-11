import { useState } from "react";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import Your_Details from "./pages/Your_Details";
import Short_Bio from "./pages/Short_Bio";
import Resume from "./components/Resume";

function App() {
  const [yourDetailsInput, setyourDetailsInput] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: ""
  });

  type yourDetail ={
    jobTitle: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string
  }


  const storeDetailInput = (data: yourDetail )=>{
      setyourDetailsInput(data);
  }
  return (
    <>
      <Button text={"Your Details"} path="/" />
      <Button text={"Short Bio"} path="/bio" />

      <div className="two-column-grid">
        <Routes>
          <Route path="/" element={<Your_Details handleAnyChange = {storeDetailInput} inputGroup = {yourDetailsInput}/>} />
          <Route path="/bio" element={<Short_Bio />} />
        </Routes>

        <Resume />
      </div>
    </>
  );
}

export default App;
