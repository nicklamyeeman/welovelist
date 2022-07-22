import { useSelector } from "react-redux";

import CompanyNameText from "../../Text/CompanyName/CompanyNameText";
import JobDescriptionText from "../../Text/JobDescription/JobDescriptionText";
import PrimaryButton from "../../Button/Primary/PrimaryButton";
import SecondaryButton from "../../Button/Secondary/SecondaryButton";

const JobCard = (props) => {
  const { visitor } = useSelector(state => state.visitor);  

  return (
    <div className="p-4">
      <CompanyNameText
        companyName={props.job.smallCompany.companyName}
      />
      <JobDescriptionText
        jobDescription={props.job.description}
      />
      <SecondaryButton
        label="View More..."  
      />
      {
        visitor === "applicant" ? (
          <PrimaryButton
            label="Apply"
          />
        ) : null
      }
    </div>
  );
}

export default JobCard;