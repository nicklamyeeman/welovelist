import { useDispatch } from "react-redux";
import { setVisitor } from "../../../app/slices/visitorSlice";

import PrimaryButton from "../../Button/Primary/PrimaryButton";

const WelcomeView = () => {
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-2">
     <PrimaryButton
        label="Company"
        onClick={() => dispatch(setVisitor("company"))}
      />
      <PrimaryButton
        label="Applicant"
        onClick={() => dispatch(setVisitor("applicant"))}
      />
    </div>
  );
}

export default WelcomeView;