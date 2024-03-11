import { ChangeEventHandler, PropsWithChildren } from "react";

interface Props {
  handleAnyChange: (data: yourDetail) => void;
  inputGroup: yourDetail;
}
type yourDetail = {
  jobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

export default function Your_Details(props: PropsWithChildren<Props>) {

  const {handleAnyChange, inputGroup} = props;
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleAnyChange({ ...inputGroup, jobTitle: event.target.value });

  };
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleAnyChange({ ...inputGroup, firstName: event.target.value});
  };
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleAnyChange({ ...inputGroup, lastName: event.currentTarget.value });
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleAnyChange({ ...inputGroup, email: event.currentTarget.value });
  };
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleAnyChange({ ...inputGroup, phone: event.currentTarget.value });
  };
  const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleAnyChange({ ...inputGroup, address: event.currentTarget.value });
  };
  return (
    <div className="your-details">
      <div className="title" style={{ margin: "0px" }}>
        CV Resume
      </div>
      <div className="detail-input-group">
        <div className="form your-details-jt">
          <label htmlFor="">Job Title</label>
          <input type="text" onChange={handleTitle} value={inputGroup.jobTitle}/>
        </div>
        <div className="form your-details-fn">
          <label htmlFor="">First Name</label>
          <input type="text" onChange={handleFirstName} value={inputGroup.firstName}/>
        </div>
        <div className="form your-details-ln">
          <label htmlFor="">Last Name</label>
          <input type="text" onChange={handleLastName} value={inputGroup.lastName}/>
        </div>
        <div className="form your-details-email">
          <label htmlFor="">Email</label>
          <input type="text" onChange = {handleEmail} value={inputGroup.email}/>
        </div>
        <div className="form your-details-phone">
          <label htmlFor="">Phone</label>
          <input type="text" onChange={handlePhone} value={inputGroup.phone}/>
        </div>
        <div className="form your-details-address">
          <label htmlFor="">Address</label>
          <input type="text" onChange={handleAddress} value={inputGroup.address}/>
        </div>
      </div>
    </div>
  );
}
