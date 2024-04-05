
import { useState, PropsWithChildren,useEffect, useRef } from "react";
import { experienceInput } from "../types";
import { deleteIcon, editIcon } from "./SVG";
interface Props {
  inputs: experienceInput;
  deleteExperienceItem: (id: number) => void;
  storeExperienceArray: (data: experienceInput) => void;
}

export default function ExperienceInput(props: PropsWithChildren<Props>) {
  const { inputs, deleteExperienceItem,storeExperienceArray } = props;

  const [experienceEdit, setExperienceEdit] = useState(false);
  const [editButtonClicked, setEditButtonClicked] = useState(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)=>{
    const changedInput = {...inputs, [event.target.name]: event.target.value};

    storeExperienceArray(changedInput);
  }
  const handleDeleteOnclick = () => {
    deleteExperienceItem(inputs.id);
  };
  const handleEditClick = () => {
    setEditButtonClicked(!editButtonClicked);
  };

  return (
    <li key={inputs.id}>
      {editButtonClicked && (
        <div className="experience-front">{inputs.experienceCompany}</div>
      ) }

      <div className="btn-section">
      <button onClick={handleEditClick}>{editIcon()}</button>
      <button onClick={handleDeleteOnclick}>{deleteIcon()}</button>
      </div>

      {!editButtonClicked && (
        <div className="experience-back">
          <label>Job Title</label>
          <input className= "experience-jt"type="text" name= "experienceJobTitle" value={inputs.experienceJobTitle} onChange={handleChange}/>
          <label >Company</label>
          <input type="text"  className="experience-company" name="experienceCompany" value={inputs.experienceCompany} onChange={handleChange} />
          <label htmlFor="">Start Date - End Date</label>
          <input type="text"  className="date" name="experienceDate" value={inputs.experienceDate} onChange={handleChange}/>
          <label htmlFor="">Description</label>
          <textarea className="experience-points" name="experienceDescription" value={inputs.experienceDescription} onChange={handleChange}></textarea>
        </div>
      )}
    </li>
  );
}
