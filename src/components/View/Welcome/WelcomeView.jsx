import { useDispatch } from "react-redux";
import { setVisitor } from "../../../app/slices/visitorSlice";

import WelcomeTitleText from "../../Text/WelcomeTitle/WelcomeTitleText";
import VisitorTypeButton from "../../Button/VisitorType/VisitorTypeButton";

const WelcomeView = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <WelcomeTitleText/>
      <div className="grid grid-cols-2">
        <VisitorTypeButton
          label="Company"
          onClick={() => dispatch(setVisitor("company"))}
        />
        <VisitorTypeButton
          label="Applicant"
          onClick={() => dispatch(setVisitor("applicant"))}
        />
      </div>
    </div>
  )
}

export default WelcomeView;