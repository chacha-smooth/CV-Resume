import React from "react";

// import "../../css/education.css";
import EducationInput from "../components/EducationInput";
import { educationInput } from "../types";
import { useState, PropsWithChildren } from "react";

interface Props {
  educationArray: educationInput[];
  storeEducationArray: (data: educationInput) => void;
  deleteEducationItem: (id: number) => void;
}

export default function Education(props: PropsWithChildren<Props>) {
  const { educationArray, storeEducationArray, deleteEducationItem } = props;
  const [keyId, setKeyId] = useState(0);

  const handleClick = () => {
    setKeyId(keyId + 1);
    const inputs: educationInput = {
      id: keyId,
      educationDegree: "",
      educationDate: "",
      educationInstitution: "",
    };

    storeEducationArray(inputs);
  };

  return (
    <div className="section-one">
      <div className="title">Education</div>
      <div className="subtitle">Your education history.</div>

      <ul className="experience-list">
        {/* returns a list of Education Inputs */}
        {educationArray.length != 0 &&
          educationArray.map((item) => (
            <EducationInput
              inputs={item}
              deleteEducationItem={deleteEducationItem}
              storeEducationArray={storeEducationArray}
            />
          ))}
      </ul>
      <div className="add-education">
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
        <div className="sub-text">Add Education</div>
      </div>
    </div>
  );
}
