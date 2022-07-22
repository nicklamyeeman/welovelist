const FormButton = (props) => {
  if (props.submitForm) {
    return (
      <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="submit"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  } else {
    return (
      <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    );
  }
}

export default FormButton;