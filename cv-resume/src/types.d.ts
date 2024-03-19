export type yourDetail ={
    
    jobTitle: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string
  }

export type yourResume ={
    yourDetail: yourDetail
    profileSummary:string
  }


export type experienceInput = {
    id:number,
    experienceJobTitle: string, 
    experienceDate:string,
    experienceCompany: string,
    experienceDescription:string
}