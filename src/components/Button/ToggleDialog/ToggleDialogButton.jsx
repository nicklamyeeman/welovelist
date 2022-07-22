const ToggleDialogButton = (props) => {
  return (
    <div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        hidden={props.hidden}
        onClick={props.onClick}
      >
        {props.label}
      </button>
      {props.children}
    </div>
  );
}

export default ToggleDialogButton;