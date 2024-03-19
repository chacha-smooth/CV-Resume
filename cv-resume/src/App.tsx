import { useState, useEffect } from "react";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import Your_Details from "./pages/Your_Details";
import Short_Bio from "./pages/Short_Bio";
import Resume from "./components/Resume";
import { yourDetail, yourResume, experienceInput } from "./types";

import Experience from "./pages/Experience";
function App() {
  const [detailInput, setyourDetailsInput] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [profileSummary, setProfileSummary] = useState("");
  useEffect(() => {
    setyourDetailsInput({
      ...detailInput,
      jobTitle: "Computer Science",
      firstName: "Ingrid",
      lastName: "Lucas",
      email: "ingrid.lucas.developer@gmail.com",
      phone: "407-272-XXXX",
      address: "Orlando,Florida",
    });
  }, []);

  const [experienceArray, setExperienceArray] = useState<experienceInput[]>([]);

  const storeDetailInput = (data: yourDetail): void => {
    setyourDetailsInput(data);
  };

  const storeProfileSummary = (data: string): void => {
    setProfileSummary(data);
  };

  const storeExperienceArray = (data: experienceInput): void => {

    const index = experienceArray.findIndex((item) => {
      return item.id === data.id;
    });



    if (index != -1) {
      experienceArray[index] = data;
      setExperienceArray([...experienceArray]);

    } else {
      setExperienceArray([...experienceArray, data]);
    }
  };

  const deleteExperienceItem = (id: number): void => {
    setExperienceArray(experienceArray.filter((input) => input.id !== id));
  };

  const resumeOutput: yourResume = {
    yourDetail: detailInput,
    profileSummary,
  };
  return (
    <>
      <Button text={"Your Details"} path="/" />
      <Button text={"Short Bio"} path="/summary" />
      <Button text={"Experience"} path="/experience" />
      <div className="two-column-grid">
        <Routes>
          <Route
            path="/"
            element={
              <Your_Details
                handleAnyChange={storeDetailInput}
                inputGroup={detailInput}
              />
            }
          />
          <Route
            path="/summary"
            element={
              <Short_Bio
                storeProfileSummary={storeProfileSummary}
                profileSummary={profileSummary}
              />
            }
          />
          <Route
            path="/experience"
            element={
              <Experience
                experienceArray={experienceArray}
                storeExperienceArray={storeExperienceArray}
                deleteExperienceItem={deleteExperienceItem}
              />
            }
          />
        </Routes>

        <Resume resumeOutput={resumeOutput} />
      </div>
    </>
  );
}

export default App;
