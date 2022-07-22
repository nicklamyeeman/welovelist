import { useState } from "react";

import Dialog from "../../Dialog/Dialog";
import DialogHeader from "../../Header/Dialog/DialogHeader";
import AddJobForm from "../../Form/AddJob/AddJobForm";
import DialogFooter from "../../Footer/Dialog/DialogFooter";
import CancelButton from "../../Button/Cancel/CancelButton";
import ValidateButton from "../../Button/Validate/ValidateButton";

const FormDialog = (props) => {
  const [jobOffer, setJobOffer] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobOffer({ ...jobOffer, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(jobOffer);
    props.onClose();
  }

  return (
    <Dialog hidden={props.hiddenDialog}>
      <DialogHeader
        title="Add Job Offer"
        closeDialog={props.onClose}
      />
      <form className="min-w-full" onSubmit={handleSubmit}>
        <AddJobForm
          jobOffer={jobOffer}
          handleChange={handleChange}
        />
        <DialogFooter>
          <CancelButton
            label="Cancel"
            type="button"
            onClick={props.onClose}
          />
          <ValidateButton
            label="Submit"
            type="submit"
          />
        </DialogFooter>
      </form>
    </Dialog>
  );
}

export default FormDialog;