import TextInput from "../../Input/Text/TextInput";
import TextAreaInput from "../../Input/TextArea/TextAreaInput";

const AddJobForm = (props) => {
  return (
    <div className="overflow-scroll h-80 relative p-6 flex-auto">
      <TextInput
        name="companyName"
        label="Company Name"
        value={props.jobOffer.companyName}
        onChange={props.handleChange}
      />
      <TextInput
        name="title"
        label="Title"
        value={props.jobOffer.title}
        onChange={props.handleChange}
      />
      <TextAreaInput
        name="description"
        label="Description"
        value={props.jobOffer.description}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default AddJobForm;