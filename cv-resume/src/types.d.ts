export type yourDetail ={
    
    jobTitle: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string
  }
  
export type skill = {
  skillList:string
}
export type yourResume ={
    yourDetail: yourDetail
    profileSummary:string
    experienceArray: experienceInput[],
    skill:skill
  }


export type experienceInput = {
    id:number,
    experienceJobTitle: string, 
    experienceDate:string,
    experienceCompany: string,
    experienceDescription:string
}


export type educationInput = {
  id:number,
  educationDegree: string, 
  educationDate:string,
  educationInstitution: string,
}