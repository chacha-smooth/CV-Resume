import "../../css/experience.css";
import ExperienceInput from "../components/ExperienceInput";
import { experienceInput } from "../types";
import { useState, PropsWithChildren } from "react";

interface Props {
  experienceArray: experienceInput[];
  storeExperienceArray: (data: experienceInput) => void;
  deleteExperienceItem: (id: number) => void;
}

export default function Experience(props: PropsWithChildren<Props>) {
  const { experienceArray, storeExperienceArray, deleteExperienceItem } = props;
  const [keyId, setKeyId] = useState(0);

  const handleClick = () => {
    setKeyId(keyId + 1);
    const inputs: experienceInput = {
      id: keyId,
      experienceJobTitle: "",
      experienceDate: "",
      experienceCompany: "",
      experienceDescription: "",
    };

    storeExperienceArray(inputs);
  };

  return (
    <div className="experience">
      <div className="title">Experience</div>
      <div className="header">Your experience history.</div>

      <ul>
        {/* returns a list of Experience Inputs */}
        {experienceArray.length != 0 && experienceArray.map((item)=> <ExperienceInput inputs={item} deleteExperienceItem ={deleteExperienceItem} storeExperienceArray ={storeExperienceArray}/> )}

      </ul>
      <div className="add-experience">
        <div className="plus-btn">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>
        </div>
        <div className="sub-text">Add Experience</div>
      </div>
    </div>
  );
}
