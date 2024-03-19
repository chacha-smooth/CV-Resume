import { ChangeEventHandler, PropsWithChildren } from "react";

interface Props {
  storeProfileSummary: (data: string) => void;
  profileSummary: string;
}


export default function Short_Bio(props:PropsWithChildren<Props>){
  const {storeProfileSummary, profileSummary} = props;

  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    storeProfileSummary(event.target.value);
  }
  return (
    <div className="center">
      <div className="short-bio">
        <h1>Professional summary</h1>
        <p>Now, let's add a summary.</p>
        <textarea id="summary" cols={60} rows={10} style={{maxWidth:"90%"} } value={profileSummary} onChange={handleChange}></textarea>
      </div>
    </div>
  );
}
