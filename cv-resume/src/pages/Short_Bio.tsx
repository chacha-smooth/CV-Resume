import { PropsWithChildren } from "react";
// import "../../css/short-bio.css";
interface Props {
  storeProfileSummary: (data: string) => void;
  profileSummary: string;
}

export default function Short_Bio(props: PropsWithChildren<Props>) {
  const { storeProfileSummary, profileSummary } = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    storeProfileSummary(event.target.value);
  };
  return (
    <div className="section-one">
      <div className="short-bio">
        <div className="title">Professional Summary</div>
        <div className="subtitle">
          Now, let's add a summary.
        </div>
          <textarea className="summary-box"
            id="summary"
            value={profileSummary}
            onChange={handleChange}
          ></textarea>
      </div>
    </div>
  );
}
