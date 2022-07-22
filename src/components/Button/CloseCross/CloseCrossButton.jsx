const CloseCrossButton = (props) => {
  return (
    <button
      className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
      onClick={props.onClick}
    >
      <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
        &times;
      </span>
    </button>
  );
}

export default CloseCrossButton;