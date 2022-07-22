import { useState } from "react";
import { useSelector } from "react-redux";

import AddJobDialog from "../../Dialog/AddJob/AddJobDialog";

const AddJobOfferButton = () => {
  const {visitor} = useSelector(state => state.visitor);
  const hiddenButton = (visitor === "company") ? false : true;
  const [hiddenDialog, setHiddenDialog] = useState(true);

  return (
    <div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        hidden={hiddenButton}
        onClick={() => setHiddenDialog(false)}
      >
        Add Job Offer
      </button>
      <AddJobDialog
        hidden={hiddenDialog}
        closeDialog={() => setHiddenDialog(true)}
      />
    </div>
  );
}

export default AddJobOfferButton;