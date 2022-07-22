import CloseCrossButton from "../../Button/CloseCross/CloseCrossButton";
import TitleText from "../../Text/Title/TitleText";

const AddJobDialogHeader = (props) => {
  return (
    <div className="content-center items-center flex justify-between p-4 border-b border-solid border-slate-200 rounded-t">
      <TitleText
        title={props.title}
      />
      <CloseCrossButton
        onClick={props.closeDialog}
      />
    </div>
  );
}

export default AddJobDialogHeader;