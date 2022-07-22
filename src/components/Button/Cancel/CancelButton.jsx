const CancelButton = (props) =>{
  return (
    <div>
      <button
        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type={props.type}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}

export default CancelButton;