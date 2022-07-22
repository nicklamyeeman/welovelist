import Dialog from "../../Dialog/Dialog";
import DialogHeader from "../../Header/Dialog/DialogHeader";
import AddJobForm from "../../Form/AddJob/AddJobForm";
import DialogFooter from "../../Footer/Dialog/DialogFooter";
import CancelButton from "../../Button/Cancel/CancelButton";
import ValidateButton from "../../Button/Validate/ValidateButton";

const FormDialog = (props) => {
  return (
    <Dialog hidden={props.hiddenDialog}>
      <DialogHeader
        title="Add Job Offer"
        closeDialog={props.onClose}
      />
      <AddJobForm/>
      <DialogFooter>
        <CancelButton
          label="Cancel"
          onClick={props.onClose}
        />
        <ValidateButton
          label="Submit"
          type="submit"
          onClick={props.onClose}
        />
      </DialogFooter>
    </Dialog>
  );
}

export default FormDialog;