import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addJob } from '../../../app/slices/jobsSlice';

import FirebaseDatabase from '../../../app/firebase.config';
import { ref, child, set } from "firebase/database";

import Dialog from "../../Dialog/Dialog";
import DialogHeader from "../../Header/Dialog/DialogHeader";
import AddJobForm from "../../Form/AddJob/AddJobForm";
import DialogFooter from "../../Footer/Dialog/DialogFooter";
import CancelButton from "../../Button/Cancel/CancelButton";
import ValidateButton from "../../Button/Validate/ValidateButton";

const FormDialog = (props) => {
  const dispatch = useDispatch();
  const { jobs } = useSelector(state => state.jobs);
  const [jobOffer, setJobOffer] = useState({
    id: "",
    companyName: "",
    title: "",
    description: "",
  });

  const writeDatabase = (jobOffer) => {
    const dbRef = ref(FirebaseDatabase);
    set(child(dbRef, '/' + jobs.length), {
      id: jobs.length,
      title: jobOffer.title,
      smallCompany: {
        companyName: jobOffer.companyName,
      },
      description: jobOffer.description,
    });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobOffer({ ...jobOffer, [name]: value });
  }
  
  const handleSubmit = (event) => {    
    event.preventDefault();
    writeDatabase(jobOffer);
    dispatch(addJob({
      id: jobs.length,
      title: jobOffer.title,
      smallCompany: {
        companyName: jobOffer.companyName,
      },
      description: jobOffer.description,
    }));
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