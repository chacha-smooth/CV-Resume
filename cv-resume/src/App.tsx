import { useState, useEffect } from "react";
import Button from "./components/Button";
import { Routes, Route } from "react-router-dom";
import Your_Details from "./pages/Your_Details";
import Short_Bio from "./pages/Short_Bio";
import Resume from "./components/Resume";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import "./css/app.css";

import {
  yourDetail,
  yourResume,
  experienceInput,
  educationInput,
  skill,
} from "./types";
import Skill from "./pages/Skill";

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

    const element: experienceInput[] = [
      {
        id: 0,
        experienceJobTitle: "Computer Science",
        experienceDate: "2020-2022",
        experienceCompany: "Microsoft",
        experienceDescription: "Did random stuff\n And hated it",
      },
      {
        id: 0,
        experienceJobTitle: "Janitor",
        experienceDate: "2020-2022",
        experienceCompany: "Apple",
        experienceDescription: "Did random stuff\n And hated it\n No.",
      },
    ];

    setExperienceArray(element);
    setProfileSummary(
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, voluptatem! Nostrum blanditiis tempore voluptas pariatur dolore fugiat obcaecati saepe reiciendis omnis, rem molestias atque, quisquam illo sed at laboriosam perferendis. Magnam nihil itaque ipsa maxime voluptatem nam dignissimos quaerat sunt dicta aut iure corrupti quibusdam ea saepe ab ducimus earum omnis, accusamus eum at necessitatibus, explicabo hic officiis odio? Officiis! Voluptate eius ipsum, asperiores aliquam molestias perspiciatis repellat aspernatur dolorem minus fugiat exercitationem inventore quibusdam incidunt minima placeat consequuntur facere animi, voluptates non doloribus? Sed perferendis consequatur magni quod tempore?"
    );
  }, []);

  const [experienceArray, setExperienceArray] = useState<experienceInput[]>([]);
  const [educationArray, setEducationArray] = useState<educationInput[]>([]);
  const [skillDescription, setSkillDescription] = useState<skill>({
    skillList: "",
  });
  const storeDetailInput = (data: yourDetail): void => {
    setyourDetailsInput(data);
  };

  const storeProfileSummary = (data: string): void => {
    setProfileSummary(data);
  };

  const storeSkill = (data: skill): void => {
    setSkillDescription({ ...data, skillList: data.skillList });
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

  const storeEducationArray = (data: educationInput): void => {
    const index = educationArray.findIndex((item) => {
      return item.id === data.id;
    });

    if (index != -1) {
      educationArray[index] = data;
      setEducationArray([...educationArray]);
    } else {
      setEducationArray([...educationArray, data]);
    }
  };

  const deleteExperienceItem = (id: number): void => {
    setExperienceArray(experienceArray.filter((input) => input.id !== id));
  };

  const deletEducationItem = (id: number): void => {
    setEducationArray(educationArray.filter((input) => input.id !== id));
  };

  const resumeOutput: yourResume = {
    yourDetail: detailInput,
    profileSummary,
    experienceArray,
    skill: skillDescription,
  };
  return (
    <>
      <div className="header alegreya-sans-black">CV Resume Builder</div>
      <div className="btn-section">
        <Button text={"Your Details"} path="/" />
        <Button text={"Short Bio"} path="/summary" />
        <Button text={"Experience"} path="/experience" />
        <Button text={"Education"} path="/education" />
        <Button text={"Skills"} path="/skill" />
      </div>

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
          <Route
            path="/education"
            element={
              <Education
                educationArray={educationArray}
                storeEducationArray={storeEducationArray}
                deleteEducationItem={deletEducationItem}
              />
            }
          />
          <Route
            path="/skill"
            element={<Skill skill={skillDescription} storeSkill={storeSkill} />}
          />
        </Routes>

        <Resume resumeOutput={resumeOutput} />
      </div>
    </>
  );
}

export default App;
