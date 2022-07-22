import CloseCrossButton from "../../Button/CloseCross/CloseCrossButton";
import HeaderTitleText from "../../Text/HeaderTitle/HeaderTitleText";

const AddJobDialogHeader = (props) => {
  return (
    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
      <HeaderTitleText
        title="Add Job Offer"
      />
      <CloseCrossButton
        onClick={props.closeDialog}
      />
    </div>
  );
}

export default AddJobDialogHeader;