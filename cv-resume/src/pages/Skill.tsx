import React from 'react'
import { PropsWithChildren } from 'react'
import { skill } from '../types'

interface Props{
    storeSkill:(data:skill)=>void,
    skill: skill;
}
export default function Skill(props:PropsWithChildren<Props>) {
  const {skill, storeSkill} = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
      const data:skill = {
        skillList: event.target.value,
      }

      storeSkill(data);

  }
  return (
    <div className="section-one"> 
      <div className="title">Skills</div>
      <textarea onChange={handleChange} placeholder={skill.skillList} ></textarea>
    </div>
  )
}
