import { useSelector } from "react-redux";

import PrimaryButton from "../../Button/Primary/PrimaryButton";
import SecondaryButton from "../../Button/Secondary/SecondaryButton";
import ImageCard from "../../Card/Image/ImageCard";
import TitleCard from "../../Card/Title/TitleCard";
import BodyCard from "../../Card/Body/BodyCard";

const JobCard = (props) => {
  const { visitor } = useSelector(state => state.visitor);  

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4 items-center">
        <ImageCard
          src={props.job.smallCompany.logoImageLink}
          alt={props.job.smallCompany.name}
        >
          <TitleCard
            textContent={props.job.smallCompany.companyName}
          />
        </ImageCard>
        <TitleCard
          textContent={props.job.title}
        />
      </div>
      <BodyCard
        textContent={props.job.descriptionPreview}
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