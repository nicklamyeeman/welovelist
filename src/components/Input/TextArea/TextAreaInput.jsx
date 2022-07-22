import { useRef } from "react";

const TextAreaInput = (props) => {
  const ref = useRef(null);

  const handleInput = (event) => {
    if (props.value) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${event.target.scrollHeight - 18}px`;
    }
  };

  return (
    <label>
      {props.label}
      <textarea
        ref={ref}
        className="resize-none overflow-hidden block p-2.5 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.label}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onInput={handleInput}
      />
    </label>
  );
}

export default TextAreaInput;