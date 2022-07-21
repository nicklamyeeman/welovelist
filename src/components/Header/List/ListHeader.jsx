import ListHeaderText from "../../Text/ListHeader/ListHeaderText";
import AddJobOfferButton from "../../Button/AddJobOffer/AddJobOfferButton";

const ListHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-4">
        <ListHeaderText/>
        <AddJobOfferButton/>
      </div>
    </div>
  );
}

export default ListHeader;