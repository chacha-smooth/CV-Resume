import {yourResume } from "../types";
// import "../../css/resume.css";
export default function Resume({ resumeOutput }: { resumeOutput: yourResume }) {
  return (
    <div className="resume-background">
      <div className="resume">
        {resumeOutput.yourDetail.firstName ||
        resumeOutput.yourDetail.lastName ? (
          <div className="fn-ln format-container">
            {resumeOutput.yourDetail.firstName}{" "}
            {resumeOutput.yourDetail.lastName}
          </div>
        ) : null}

        {resumeOutput.yourDetail.jobTitle ? (
          <div className="job-title format-container">
            {resumeOutput.yourDetail.jobTitle}
          </div>
        ) : null}
        <div className="side">
          {resumeOutput.yourDetail.email ||
          resumeOutput.yourDetail.phone ||
          resumeOutput.yourDetail.address ? (
            <div className="contact-title format-container first-column">Contact</div>
          ) : null}

          {resumeOutput.yourDetail.email ? (
            <div className="email format-container first-column">
              {resumeOutput.yourDetail.email}
            </div>
          ) : null}
          {resumeOutput.yourDetail.phone ? (
            <div className="phone format-container first-column">
              {resumeOutput.yourDetail.phone}
            </div>
          ) : null}
          {resumeOutput.yourDetail.address ? (
            <div className="address format-container first-column">
              {resumeOutput.yourDetail.address}
            </div>
          ) : null}
        </div>

        {resumeOutput.profileSummary ? (
          <div className="profile-summary-title second-column">Profile</div>
        ) : null}
        {resumeOutput.profileSummary ? (
          <div className="profile-summary format-container second-column">
            {resumeOutput.profileSummary}
          </div>
        ) : null}

        {resumeOutput.experienceArray.length!=0 && <div className="work-experience-title second-column"> Work Experience</div>}
        {
        
        resumeOutput.experienceArray.map((item)=>{
          return <>
              <div className="job-position-title second-column">
                {item.experienceJobTitle}
              </div>
              <div className="row second-column">
              <div className="job-company-title">
                {item.experienceCompany}
              </div>
              <div className="job-date-title">
                {item.experienceDate}
              </div>
              </div>

              <div className="job-list second-column">
                {item.experienceDescription}
              </div>
          </>
        })}
      </div>
    </div>
  );
}
