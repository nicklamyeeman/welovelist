import CompanyNameText from "../../Text/CompanyName/CompanyNameText";
import JobDescriptionText from "../../Text/JobDescription/JobDescriptionText";
import ViewMoreButton from "../../Button/ViewMore/ViewMoreButton";
import ApplyButton from "../../Button/Apply/ApplyButton";

const JobCard = (props) => {
  return (
    <div className="p-4">
      <CompanyNameText
        companyName={props.job.smallCompany.companyName}
      />
      <JobDescriptionText
        jobDescription={props.job.description}
      />
      <ViewMoreButton/>
      <ApplyButton/>
    </div>
  );
}

export default JobCard;