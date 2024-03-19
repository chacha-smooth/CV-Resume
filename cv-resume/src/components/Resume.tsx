import { yourDetail, yourResume } from "../types";

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
            <div className="contact-title format-container">Contact</div>
          ) : null}

          {resumeOutput.yourDetail.email ? (
            <div className="email format-container">
              {resumeOutput.yourDetail.email}
            </div>
          ) : null}
          {resumeOutput.yourDetail.phone ? (
            <div className="phone format-container">
              {resumeOutput.yourDetail.phone}
            </div>
          ) : null}
          {resumeOutput.yourDetail.address ? (
            <div className="address format-container">
              {resumeOutput.yourDetail.address}
            </div>
          ) : null}
        </div>

        {resumeOutput.profileSummary ? (
          <div className="profile-summary-title">Profile</div>
        ) : null}
        {resumeOutput.profileSummary ? (
          <div className="profile-summary format-container">
            {resumeOutput.profileSummary}
          </div>
        ) : null}
        {/* <div className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea
          distinctio incidunt ut blanditiis nulla earum hic a recusandae ab ipsa
          alias praesentium accusantium, numquam doloremque suscipit provident
          totam nemo reiciendis eligendi voluptates id at? Suscipit consectetur
          necessitatibus possimus temporibus soluta quis sint eaque, omnis
          maiores fuga architecto sunt fugiat.
        </div> */}
      </div>
    </div>
  );
}
