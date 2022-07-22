import { useState } from "react";
import { useSelector } from "react-redux";

import PageHeader from "../../Header/Page/PageHeader";
import ToggleDialogButton from "../../Button/ToggleDialog/ToggleDialogButton";
import ListView from "../../View/List/ListView";
import FormDialog from "../../Dialog/FormDialog/FormDialog";

const ListPage = () => {
  const {visitor} = useSelector(state => state.visitor);
  const hiddenButton = (visitor === "company") ? false : true;
  const [hiddenDialog, setHiddenDialog] = useState(true);

  return (
    <div className="grid grid-cols-1 divide-y-2 text-center container mx-auto bg-slate-100">
      <PageHeader title="Jobs Offers">
        <ToggleDialogButton
          label="Add Job Offer"
          hidden={hiddenButton}
          onClick={() => setHiddenDialog(false)}
        >
          <FormDialog
            hiddenDialog={hiddenDialog}
            onClose={() => setHiddenDialog(true)}
          />
        </ToggleDialogButton>
      </PageHeader>
      <ListView/>
    </div>
  );
}

export default ListPage;