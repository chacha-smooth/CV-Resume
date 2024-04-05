import React from 'react';

import { useState, PropsWithChildren,useEffect, useRef } from "react";
import { educationInput } from "../types";
import { deleteIcon, editIcon } from "./SVG";
interface Props {
  inputs: educationInput;
  deleteEducationItem: (id: number) => void;
  storeEducationArray: (data: educationInput) => void;
}


export default function EducationInput(props: PropsWithChildren<Props>) {
    const { inputs, deleteEducationItem,storeEducationArray } = props;

    const [educationEdit, setEducationEdit] = useState(false);
    const [editButtonClicked, setEditButtonClicked] = useState(false);
  
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
      const changedInput = {...inputs, [event.target.name]: event.target.value};
  
      storeEducationArray(changedInput);
    }
    const handleDeleteOnclick = () => {
      deleteEducationItem(inputs.id);
    };
    const handleEditClick = () => {
      setEditButtonClicked(!editButtonClicked);
    };
  
    return (
      <li key={inputs.id}>


        {!editButtonClicked &&  <div className="education-front">{inputs.educationDegree}</div>}

        <div className="btn-section">
        <button onClick={handleEditClick}>{editIcon()}</button>
        <button onClick={handleDeleteOnclick}>{deleteIcon()}</button>
        </div>

        {editButtonClicked &&
                    <div className="education-back">
                    <input className= "education-jt"type="text" name= "educationDegree" placeholder={inputs.educationDegree} onChange={handleChange}/>
                    <input type="text"  className="education-company" name="educationInstitution" placeholder={inputs.educationInstitution} onChange={handleChange} />
                    <input type="text"  className="date" name="educationDate" placeholder={inputs.educationDate} onChange={handleChange}/>
                   
                  </div>
         }
      </li>);
}
