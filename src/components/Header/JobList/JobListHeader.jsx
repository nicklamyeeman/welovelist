import HeaderTitleText from "../../Text/HeaderTitle/HeaderTitleText";
import AddJobOfferButton from "../../Button/AddJobOffer/AddJobOfferButton";

const ListHeader = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-4">
        <HeaderTitleText
          title="Jobs Offers"
        />
        <AddJobOfferButton/>
      </div>
    </div>
  );
}

export default ListHeader;